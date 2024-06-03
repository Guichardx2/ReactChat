import './ButtonChat.css';
import { useNavigate } from 'react-router-dom'; 
export function ButtonChat(props) {
    let navigate = useNavigate();

    function handleClick() {
        navigate('/chat');
    }
    return (
        <button type="button" id="go-chat" onClick={handleClick} >
        {props.title}
        </button> 
    )
}