import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4';
import searchLogo from './find.png'
import MyRecipesComponent from './MyRecipesComponent';


function App() {
  const myID = '811c2d09';
  const myKey = '128f48bdbdd3c085e80414da5b5ba999';

  const [mySearch, setMySearch] = useState('');

  const [recipe, setRecipe] = useState([]);

  const [query, setQuery] = useState('');


  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${myID}&app_key=${myKey}`);
      const data = await response.json();
      setRecipe(data.hits)
      console.log(data.hits)
    }
    getRecipe();
  }, [query])

  

  const recipeSearch = (e) => {
    setMySearch(e.target.value);
  }
  
  const finalSearch = (e) => {
    e.preventDefault();
    setQuery(mySearch);
    setMySearch([]);
  }

  return (
  <div className="App">
      <div className="container">
        <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
        </video>

        <h1>Find a Recipe</h1>
      </div>

    <div className='container'>
      <form onSubmit={finalSearch}>
        <input className='search' placeholder='Search...' onChange={recipeSearch} value={mySearch}/>
      </form>

      <button onClick={finalSearch}><img src={searchLogo} alt='searchLogo' width='20px'/></button>
    </div>

    
    {recipe.map (element => (
      <MyRecipesComponent key={element.recipe.label}
      label={element.recipe.label} 
      image={element.recipe.image} 
      calories={element.recipe.calories}
      ingredients={element.recipe.ingredientLines}/>
    ))}  
    
    </div>
  );
}

export default App;
