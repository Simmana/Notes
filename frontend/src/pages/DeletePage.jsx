import backIcon from "../assets/images/back.svg"

function DeletePage(){
    return(
        <div className="block">
            <div className="container">
              <button className="back-button">
                  <img src={backIcon} alt="backIcon" />
              </button>
              <h1 className="title_create">
                  Удалить заметку
              </h1>
              <h4 className="sub-text">Вы уверены, что хотите удалить 
              заметку? Это действие необратимо</h4>
              <button className="delete-submit-button" type="submit">Удалить</button>
            </div>
        </div>
    );
}

export default DeletePage;