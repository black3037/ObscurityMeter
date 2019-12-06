import React from 'react'

export default function Widget(props) {
    
    let widgetType = {
        enum: props.enum ? true : false,
        customenum: props.customenum ? true : false,
        param: props.param ? true : false,
        slider: props.slider ? true : false
    }
    console.log(widgetType)
    let widgetRender = '';
    switch(true) {
        case widgetType.enum:
            widgetRender = 'enum:' + 
            '"' + props.var.toString() + '",' + 
            '"' + props.var.toString() + '",' +
            '"' + props.var.toString() + '"'
            break;
        case widgetType.customenum:
            widgetRender = 'Custom Enum';
            break;
        case widgetType.param:
            widgetRender = 'param Enum';
            break;
        case widgetType.slider:
            widgetRender = 'Custom Enum';
            break;
    }

    return(
        <>{'${'}{widgetRender}{'}'}</>
    )
}