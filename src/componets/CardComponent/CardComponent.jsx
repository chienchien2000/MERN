import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReporText, WrapperStyleTextSell } from './style'
import { StarFilled } from '@ant-design/icons';
import logo from '../../assets/images/logo_offical.png'
// import { Image } from 'antd';
const CardComponent = () => {
    return (
        <WrapperCardStyle
            hoverable
            headStyle={{width:'200px', height:'200px'}}
            style={{ width: 200 }}
            bodyStyle={{ pading: '10px' }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <img src = {logo} style={{width:'68px', height:'14px',borderRadius:'3px', position:'absolute',top:0, left:0}}/>
            <StyleNameProduct>
                IPhone
            </StyleNameProduct>
            <WrapperReporText>
                <span style={{marginRight: '4px' }}>
                    <span>4.96</span> <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
                </span>
                <WrapperStyleTextSell> | Da ban 1000+</WrapperStyleTextSell>
            </WrapperReporText>
            <WrapperPriceText style={{ marginRight: '8px' }}>
                1.000.000d
                <WrapperDiscountText>
                    -5%
                </WrapperDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
    )
}

export default CardComponent
