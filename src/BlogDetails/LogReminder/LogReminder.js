import './LogReminder.css';
import closeBtn from "../../Images/close.svg";

const LogReminder = ({reminder, setReminder}) => {

    const handleClick = () => {
        setReminder(false);
    }
    return (
        <div className="login-reminder-overlay">
            <div className="login-reminder-overlay-child">
                You'll need to be logged in love!
            </div>
            <div className="button-wrapper" onClick={handleClick}>
                <img src={closeBtn} alt="cancel button" />
            </div>
        </div>
    );
}

export default LogReminder;