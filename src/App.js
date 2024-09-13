import React, { Fragment, useEffect } from "react"
import { BrowserRouter  as Router, Route, Routes} from 'react-router-dom'
import { routes } from "./routes"
import DefaultComponent from "./componets/DefaultComponent/DefaultComponent"
import { isJsongString } from "./utils"
import { jwtDecode } from "jwt-decode"
import * as UserService from './service/UserService'
import {useDispatch} from 'react-redux'
import { updateUser } from './redux/slides/userSlide'
// import axios from "axios"
// import { useQuery } from "@tanstack/react-query"
// import { useQuery } from "@tanstack/react-query"
function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const {storageData, decoded} = handleDecoded()
      if (decoded?.id) {
        handleGetDetailsUser(decoded?.id, storageData)
        
      } 
  },[])

  const handleDecoded = () => {
    let storageData = localStorage.getItem('acess_token')
    let decoded = {}
    if(storageData &&  isJsongString(storageData)) {
      storageData = JSON.parse(storageData)
      decoded = jwtDecode(storageData)
    }
    console.log('chien')
    return {decoded,storageData }
  }
  
  UserService.axiosJWT.interceptors.request.use(async (config) => {
    // Do something before request is sent
    const currentTime = new Date()
    console.log('currentTime', currentTime)
    const { decoded} = handleDecoded()
    if(decoded?.exp < currentTime.getTime()/1000) {
      const data = await UserService.refreshToken()
      config.headers['token'] = `Bearer ${data?.acess_token}`
      console.log('chien1')
    }
    console.log('chien2')
    return config;
  }, (err) => {
    return Promise.reject(err);
  
  })

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token)
    dispatch(updateUser({...res?.data,acess_token:token}))
  }
  return (
    <div>
        <Router>
          <Routes>
            {routes.map((route) =>{
              const Page = route.page
              const Layout = route.isShowHeader ? DefaultComponent : Fragment
              return (
                <Route key={route.path} path ={route.path} element={
                <Layout>
                 <Page/>
                </Layout>              
              } />
              )
            })}
          </Routes>
        </Router>
    </div>
  ) 
 
}
export default App;
