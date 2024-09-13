import React, { useEffect, useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../componets/InputFrom/InputForm'
import ButtomComponent from '../../componets/ButtonComponent/ButtomComponent'
import imageLogo from '../../assets/images/logo-login.png'
import {  Image } from 'antd'
import { useNavigate } from 'react-router-dom'
import {EyeFilled, EyeInvisibleFilled} from '@ant-design/icons' 
import * as UserService from '../../service/UserService'
import { useMutationHook } from '../../hooks/useMutationHook'
import Loading from '../../componets/LoadingComponent/Loading'
import { jwtDecode } from "jwt-decode";
import {useDispatch} from 'react-redux'
import { updateUser } from '../../redux/slides/userSlide'


const SignInPage = () => {
  const [isShowPassword,setIsShowPassword] = useState(false)
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const mutation = useMutationHook(
    data => UserService.loginUser(data)
  )
  const {data, isLoading, isSuccess} = mutation

 
  useEffect(() => {
    if(isSuccess) {
      navigate('/')
      localStorage.setItem('acess_token', JSON.stringify(data?.acess_token))
      if(data?.acess_token) {
        const decoded = jwtDecode(data?.acess_token)
        if(decoded?.id) {
          handleGetDetailsUser(decoded?.id,data?.acess_token)
        }
      }
    }
  },[isSuccess])

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token)
    dispatch(updateUser({...res?.data,acess_token:token}))
    console.log('res', res)
  }
  console.log('mutation', mutation)

  const handleOnchangeEmail = (value) =>{
    setEmail(value)
  }
  const handleOnchangePassword = (value) =>{
    setPassword(value)
  }
  const handleNavigateSignup = () =>{
    navigate('/sign-up')
  }
  
  const handleSignIn = () =>{
    mutation.mutate({
      email,
      password
    })
    console.log('sign-in',email, password)
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
      <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
      <WrapperContainerLeft>
        <h1>Xin chào</h1>
        <p> Đăng nhập và tạo tài khoản</p>
        <InputForm style={{marginBottom:'10px'}} placeholder ="abc@gmail.com" value={email} onChange={handleOnchangeEmail}/>        
       <div style={{position: 'relative'}}>
        <span
          onClick={() => setIsShowPassword(!isShowPassword)}
          style={{
            zIndex:10,
            position: 'absolute',
            top:'4px',
            right:'8px'
          }}
        >{
          isShowPassword ?(
            <EyeFilled/>
          ) : (
            <EyeInvisibleFilled/>
          )
        }
        </span>
        <InputForm placeholder ="password" type={isShowPassword ? "text":"password"}value={password} onChange={handleOnchangePassword}/>
       </div>
       {data?.status === 'ERR'  && <span>{data?.message}</span>}
       <Loading isLoading ={mutation.isPending}>
        <ButtomComponent
            disabled={!email.length||!password.length}
            onClick={handleSignIn}
            size={40}
            styleButton={{
              background: 'rgb(255, 57, 69)',
              height: '48px',
              width: '100%',
              border: 'none',
              borderRadius: '4px',
              margin: '26px 0 10px'
            }}
            textButton={'Đăng nhập'}
            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
          ></ButtomComponent>
          </Loading>
          <p><WrapperTextLight>Quên mật khẩu</WrapperTextLight></p>
          <p>Chưa có tài khoản<WrapperTextLight onClick={handleNavigateSignup}>Tạo tài khoản</WrapperTextLight></p>
      </WrapperContainerLeft>
      <WrapperContainerRight>
          <Image src={imageLogo} preview={false} alt="image-logo" height="203px" width="203px" />
          <h4>Mua sắm tại Tiki</h4>
      </WrapperContainerRight>
    </div>
    </div>
  )
}

export default SignInPage
