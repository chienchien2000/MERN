import React from 'react'
import { WrapperContent, WrapperLabelText, WrapperPriceText, WrapperTextValue } from './style'
import { Checkbox, Rate } from 'antd';

const NavbarComponent = () => {
    const onChange = () => { }
    const renderContent = (type, options) => {
        switch (type) {
            case 'text':
                return options.map((option) => {
                    return (
                        <WrapperTextValue>{option}</WrapperTextValue>
                    )
                })
            case 'checkbox':
                return (
                    <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column' }} onChange={onChange}>
                        {options.map((option) => {
                            return (
                                <Checkbox value={option.value}>{option.label}</Checkbox>
                            )
                        })}

                        <Checkbox value="B">B</Checkbox>
                    </Checkbox.Group>
                )
            case 'star':
                return options.map((option) => {
                    return (
                        <div style={{ display: 'flex' }}>
                            <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
                            <span> {`tu ${option} sao`}</span>
                        </div>
                    )

                })
            case 'price':
                return options.map((option) => {
                    return (
                        <WrapperPriceText>{option}</WrapperPriceText>
                    )
                })
            default:
                return {}
        }
    }
    return (
        <div style={{backgroundColor:'white'}}>
            <WrapperLabelText>Label</WrapperLabelText>
            <WrapperContent>
                {renderContent('text', ['tu lanh', 'TV', 'May giat'])}
            </WrapperContent>
            {/* <WrapperContent>
                {renderContent('checkbox', [
                    { value: 'a', label: 'A' },
                    { value: 'b', label: 'B' }
                ])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('star', [3, 4, 5])}
            </WrapperContent>
            <WrapperContent>
                {renderContent('price', ['duoi 40', 'tren 50'])}
            </WrapperContent> */}
        </div>
    )
}

export default NavbarComponent