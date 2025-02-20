import plusIcon from "../assets/images/add.svg";
import backIcon from "../assets/images/back.svg";
import updateIcon from "../assets/images/update.svg";
import deleteIcon from "../assets/images/delete.svg";

function ReadPage(){
    return(
        <div className="block">
            <div className="container">
            <button className="back-button">
                <img src={backIcon} alt="backIcon" />
            </button>
            <h1 className="title_create">
                Заметка
            </h1>
            <p className="description"></p>
            <div className="bottom-container">
                <button className="delete-button">
                    <img src={deleteIcon} alt="delete" />
                </button>
                <button className="update-button">
                    <img src={updateIcon} alt="update" />
                </button>
                <button className="add-button">
                    <img src={plusIcon} alt="plus" />
                </button>
            </div>
            </div>
        </div>
    );
}

export default ReadPage;