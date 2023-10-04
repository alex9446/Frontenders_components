import { useState } from 'react'
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
    exportText?: React.Dispatch<React.SetStateAction<string>>
}

function Input({label, floatingLabel, help, size='normal', border='normal', state, type='text', color='normal', leftIcon, rightIcon, exportText}: InputProps) {
    const [text, setText] = useState('')
    const [focus, setFocus] = useState(false)

    function handleClick(event: React.MouseEvent<HTMLLabelElement>) {
        const parentElement = event.currentTarget.parentElement
        if (parentElement) (parentElement.children.namedItem('input') as HTMLInputElement).focus()
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newText = event.target.value
        setText(newText)
        if (exportText) exportText(newText)
    }

    const classOptions = `size-${size} border-${border} color-${color}`
    let labelOptions = floatingLabel ? 'floating-label' : ''
    if (text) labelOptions += ' inputNonEmpty'
    if (focus) labelOptions += ' inputFocus'
    return (
        <div className='input-w-extra'>
            <label className={labelOptions} onClick={handleClick}>{label}</label>
            {leftIcon && <Icon path={leftIcon} size='1em' />}
            <input type={type} name='input' className={classOptions} value={text} onChange={handleChange}
                   onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
                   required={state == 'required'} disabled={state == 'disabled'} readOnly={state == 'readonly'} />
            {rightIcon && <Icon path={rightIcon} size='1em' />}
            {help && <p className='help'>{help}</p>}
        </div>
    )
}

export default Input
