import React from 'react'

export default function Alert(props) {

    let titleCase=(word)=>{
word=word.charAt(0).toUpperCase+word.slice(1)
return word
    }
  return (
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{(props.alert.type)}</strong>: {props.alert.msg}
  <button type="but)ton" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

  )
}
