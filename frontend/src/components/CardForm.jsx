function CardForm(){
    return (
        <form class="form">
            <textarea className="form-control" rows="30" cols="10" placeholder="Здесь будет ваш текст..." />
            <button className="submit-button" type="submit">Сохранить</button>
        </form>
    );
}

export default CardForm;