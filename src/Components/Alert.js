import React from 'react'

export default function alert(props) {

    // const capitalize = (word) =>{
    //     return word.charAt(0).toUpperCase() + word.slice(1); 
    // }

    return (
        props.alt && <div className={`alert alert-${props.alt.type} alert-dismissible fade show`} role="alert">
            <b>{props.alt.type}</b> {props.alt.msg}
        </div>
    )

}
