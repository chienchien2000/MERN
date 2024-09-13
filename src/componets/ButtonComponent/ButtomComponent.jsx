import { Button } from 'antd'
import React from 'react'

const ButtomComponent = ({size, styleButton, styleTextButton,textButton,disabled,...rest}) => {
    return (
        <Button
            style={{
                ...styleButton,
                background: disabled ? '#ccc': styleButton.background
            }}
            size={size}
            {...rest}
        >
            <span style={styleTextButton}> {textButton}</span>
        </Button>
    )
}

export default ButtomComponent
