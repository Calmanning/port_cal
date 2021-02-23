import React from 'react'

export function Input(props) {
    return (
        <div className="form-group text">
            <input className="form=control" label="Name"{...props} />            
        </div>
    )
}

export function TextArea(props) {
    return (
        <div className="form-group text">
            <input className="form-control" rows="30" {...props} />
        </div>
    )
}

export function FormBtn(props) {
    return (
        <button className="btn btn-primary submit" {...props} >
            {props.children}
        </button>
    )
}