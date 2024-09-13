import React from 'react'
import TypeProduct from '../../componets/TypeProduct/TypeProduct'
import { WrapperProducts, WrapperTypeProduct } from './Style'
import SlideComponent from '../../componets/SlideComponent/SlideComponent'
import slide1 from '../../assets/images/slide1.jpg'
import slide2 from '../../assets/images/slide2.jpg'
import slide3 from '../../assets/images/slide3.jpg'
import CardComponent from '../../componets/CardComponent/CardComponent'
import { WrapperButtonMore } from '../../componets/NavbarComponent/style'

const HomPage = () => {
  const arr = ['TV', 'Tu lanh', 'May giat', 'Laptop']
  return (
    <>
    <div style={{ padding: '0px 120px' }}>
      <WrapperTypeProduct>
        {arr.map((item) => {
          return (
            <TypeProduct name={item} key={item} />
          )
        })}
      </WrapperTypeProduct>
      </div>
      <div id="container" style={{backgroundColor:"#efefef", padding:'0 120px', height:'1000px'}}>
        <SlideComponent arrImages={[slide1, slide2, slide3]}/>
        <WrapperProducts>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
          <CardComponent/>
        </WrapperProducts>
        <div style={{display:'flex',width:'100%', justifyContent:'center', marginTop:'10px'}}>
        <WrapperButtonMore textButton='Xem thêm' type="outline" styleButton={{
            border:'1px solid rgb(11, 116, 229)',
            color:'rgb(11, 116, 229)',
            width: '240px',
            height:'38px',
            borderRadius:'4px'
          }} styleTextButton={{fontWeight:500}}/>
        </div>

        {/* <NavbarComponent/> */}
    </div>
    </>
  )
}

export default HomPage
