type ButtonProps = {
    type?: "submit" | "reset" | "button",
    text: string,
    onClick: () => void
}
const Button = ({ type, text, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick}
    type={type ? type : "button"}>
    
        {text}
        <slot></slot>
        </button>
    )
}


export default Button