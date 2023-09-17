import Icon from '@mdi/react'
import { mdiLoading } from '@mdi/js'
import './Button.css'

type Colors = 'normal' | 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger'
type mdiIcon = string

interface ButtonProps {
    children?: string
    ariaLabel?: string
    size?: 'small' | 'normal' | 'medium' | 'large'
    border?: 'normal' | 'squared' | 'rounded'
    state?: 'disabled' | 'loading'
    color?: Colors
    colorOutline?: Colors
    leftIcon?: mdiIcon
    rightIcon?: mdiIcon
}

function Button({children, ariaLabel, size='normal', border='normal', state, color='normal', colorOutline, leftIcon, rightIcon}: ButtonProps) {
    let classOptions = `size-${size} border-${border} color-${color}`
    if (colorOutline) classOptions += ' color-outline-'+colorOutline
    if (state == 'loading') classOptions += ' state-loading'
    return (
        <button aria-label={ariaLabel} className={classOptions} disabled={state == 'disabled'}>
            {state == 'loading' && <Icon path={mdiLoading} size='1em' spin={1} />}
            {leftIcon && <Icon path={leftIcon} size='1em' />}
            {children}
            {rightIcon && <Icon path={rightIcon} size='1em' />}
        </button>
    )
}

export default Button
