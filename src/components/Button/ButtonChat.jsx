import './ButtonChat.css';
import { useNavigate } from 'react-router-dom'; 
export function ButtonChat({title, name}) {
    let navigate = useNavigate();
    
    function handleClick() {
        navigate(`/chat/${name}`);
    }
    return (
        <button type="button" id="go-chat" onClick={handleClick} >
        {title}
        </button> 
    )
}