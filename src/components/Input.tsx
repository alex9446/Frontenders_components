import Icon from '@mdi/react'
import './Input.css'

type Colors = 'normal' | 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger'
type mdiIcon = string

interface InputProps {
    label: string
    floatingLabel?: boolean
    help?: string
    size?: 'small' | 'normal' | 'medium' | 'large'
    border?: 'normal' | 'squared' | 'rounded'
    state?: 'required' | 'disabled' | 'readonly'
    type?: string
    color?: Colors
    leftIcon?: mdiIcon
    rightIcon?: mdiIcon
}

function Input({label, floatingLabel, help, size='normal', border='normal', state, type='text', color='normal', leftIcon, rightIcon}: InputProps) {
    let classOptions = `size-${size} border-${border} color-${color}`
    if (floatingLabel) classOptions += ' floating-label'
    return (
        <div className='input-w-extra'>
            <label>{label}</label>
            {leftIcon && <Icon path={leftIcon} size='1em' />}
            <input type={type} className={classOptions} required={state == 'required'} disabled={state == 'disabled'} readOnly={state == 'readonly'} />
            {rightIcon && <Icon path={rightIcon} size='1em' />}
            {help && <p className='help'>{help}</p>}
        </div>
    )
}

export default Input
