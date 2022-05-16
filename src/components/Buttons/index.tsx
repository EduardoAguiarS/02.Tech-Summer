import "./styles.scss";

interface ButtonProps {
    text: string;
    color: string;
    bgColor: string;
    size: string;
    full: boolean;
}

const Button = ({ text, color, bgColor, size, full }: ButtonProps) => {
    return (
        <button
            className={`button ${size} ${full ? "btn__full" : ""}`}
            style={{ color: `${color}`, background: `${bgColor}` }}
        >
            {text}
        </button>
    );
};

export default Button;