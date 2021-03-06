import React from 'react'
import PropTypes from'prop-types'
import classnames from 'classnames';
 const InputGroup = ({
     name,
     placeholder,
     value,
     errors,
     icon,
     type,
     onChange
 }) => {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">
                    <i className={icon}/>
                </span>
            </div>
            <input type={type} className={classnames('form-control form-control-lg',{
            'is-invalid' :errors
            })} 
            placeholder={placeholder} 
            name={name} 
            value={value} 
            onChange={onChange} />
            {errors && 
            <div className='invalid-feedback'>{errors} </div>}
      </div>
    )
}
InputGroup.prototype={
 name:PropTypes.string.isRequired,
 placeholder:PropTypes.string,
 value:PropTypes.string.isRequired,
 icon:PropTypes.string,
 errors:PropTypes.string.isRequired,
 type:PropTypes.string.isRequired,
 onChange:PropTypes.func.isRequired
}
InputGroup.defaultProps ={
    type:'text'
}

export default InputGroup;