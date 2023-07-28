import './myButton.css';

const MyButton = (props) => {
    const { onClick, children } = props;
    return (
    <button className="rounded-button" onClick={onClick}>
        {children}
    </button>
    );
}

export default MyButton;