import './Selection.css';



function Selection() {
    return (
    <div className="Selection">
        <label for="PNi">Сортировка:</label>
        <select className="PNi" id="PNi">
            <option value="Цена">Цена</option>
            <option value="Название">Назввание</option>
        </select>
    </div>
    )
}



export default Selection;


