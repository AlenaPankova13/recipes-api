import iconChecked from './checked.png'

function MyRecipesComponent ({label, image, calories, ingredients}) {
    return(
        <div>
            <div className="container">
                <h2>{label}</h2>
            </div>

            <div className="container">
                <img src={image} alt='food' width='300px'/>
            </div>

            <ul className="list">
                {ingredients.map(element => (
                    <li key={element} className="item"><img src={iconChecked} alt='iconChecked' width='30px'/> {element}</li>
                ))}
            </ul>

            <div className="container">
                <h4 className="item">Calories: {calories.toFixed()}</h4>
            </div>
         
        </div>
    )
}

export default MyRecipesComponent;