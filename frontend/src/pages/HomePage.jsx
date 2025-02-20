import plusIcon from "../assets/images/add.svg";
import settingsIcon from "../assets/images/settings.svg";

function HomePage(){
    return(
        <div className="block">
            <div className="head">
                <h1 className="title">Заметки</h1>
                <div className="settings-container">
                    <img src={settingsIcon} alt="settings" className="settingsImage"/>
                </div>
                </div>
            <div className="container">
                <button className="add-button">
                <img src={plusIcon} alt="plus" />
                </button>
            </div>
        </div>
    );
}

export default HomePage;