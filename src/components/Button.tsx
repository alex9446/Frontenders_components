import './Button.css'

type Colors = 'normal' | 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger'

interface ButtonProps {
    children?: string
    size?: 'small' | 'normal' | 'medium' | 'large'
    border?: 'normal' | 'squared' | 'rounded'
    state?: 'disabled' | 'loading'
    color?: Colors
    colorOutline?: Colors
}

function Button({children='', size='normal', border='normal', state, color='normal', colorOutline}: ButtonProps) {
    let classOptions = `size-${size} border-${border} color-${color}`
    if (colorOutline) classOptions += ' color-outline-'+colorOutline
    return (
        <button className={classOptions} disabled={state == 'disabled'}>{children}</button>
    )
}

export default Button
