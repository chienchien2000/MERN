
import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import InputComponent from '../InputComponent/InputComponent';
import ButtomComponent from '../ButtonComponent/ButtomComponent';

const ButtonInputSearch = (props) => {
  const {
    size, placeholder, textButton,
    bordered, backgroundColorInput = '#fff',
    backgroundColorButton = 'rgb(13, 92, 182)', 
    colorButton ='#fff'
  }= props
  return (
    <div style={{ display: 'flex', borderRadius: "0" }}>
      <InputComponent 
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{backgroundColor: backgroundColorInput,borderRadius: "0" }} 
      />
      <ButtomComponent  
        size={size}
        styleButton={{ background: backgroundColorButton, borderRadius: "0",border: !bordered && 'none' }}
        icon={<SearchOutlined  color={colorButton} style={{color: '#fff'}}/>}
        textButton={textButton}  
        styleTextButton={{color: colorButton}}       
      />
    </div>
  )
}

export default ButtonInputSearch
