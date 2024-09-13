import { Col, Image, Row } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/test.webp'
import imageSmall from '../../assets/images/imagesmall.webp'
import { WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import ButtomComponent from '../ButtonComponent/ButtomComponent'

const ProductDetailComponent = () => {
  const onChange = () => { }
  return (
    <Row style={{ padding: '16px', backgroundColor: '#fff', borderRadius:'4px' }}>
      <Col span={10} style={{borderRight:'1px solid #e5e5e5', paddingRight:'8px'}}>
        <Image src={imageProduct} alt="image product" preview={false} />
        <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageSmall} alt="image small" preview={false} />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageSmall} alt="image small" preview={false} />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageSmall} alt="image small" preview={false} />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageSmall} alt="image small" preview={false} />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageSmall} alt="image small" preview={false} />
          </WrapperStyleColImage>
          {/* <Col span={4}>
            <WrapperStyleImageSmall src={imageSmall} alt="image small" preview={false}/>
          </Col> */}
          {/* <Col span={4}>
            <WrapperStyleImageSmall src={imageSmall} alt="image small" preview="false"/>
          </Col> */}
        </Row>
      </Col>
      <Col span={14} style={{paddingLeft:'10px'}}>
        <WrapperStyleNameProduct>Sach - Thám tử lừng danh Conan - Combo 10 tập từ tập 81 đến tập 90 </WrapperStyleNameProduct>
        <div>
          <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
          <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
          <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
          <WrapperStyleTextSell> | Da ban 1000+</WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>200.000đ</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
          <span>Giao đến</span>
          <span className='address'>Hồ Chí Minh</span> -
          <span className='change-address'>Đổi địa chỉ</span>
        </WrapperAddressProduct>
        <div style={{ margin: '10px 0 20px',padding: '10px 0' ,borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5'}}>
          <div style={{ marginBottom: '10px' }}>Số lượng</div>
          <WrapperQualityProduct>
            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
              <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
            </button>
            <WrapperInputNumber defaultValue={3} onChange={onChange} />
            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
              <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
            </button>
          </WrapperQualityProduct>
        </div>
        <div style={{display:'flex', alignItems:'center',gap:'10px'}}>
          <ButtomComponent
            size={40}
            styleButton={{
              background: 'rgb(255, 57, 69)',
              height: '48px',
              width: '220px',
              border: 'none',
              borderRadius: '4px'
            }}
            textButton={'Chọn mua'}
            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
          >
          </ButtomComponent>
          <ButtomComponent
            size={40}
            styleButton={{
              background: '#fff',
              height: '48px',
              width: '220px',
              border: '1px solid rgb(13, 92, 182)',
              borderRadius: '4px'
            }}
            textButton={'Mua trả sau'}
            styleTextButton={{ color: 'rgb(13, 92, 182)', fontSize: '15px' }}
          >
          </ButtomComponent>
        </div>
      </Col>

    </Row>
  )
}

export default ProductDetailComponent
