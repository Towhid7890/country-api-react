import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/country/Country';
import Cart from './components/Cart/Cart';


function App() {
  const [countries, setCountry] = useState([]);
  const [cart, setCart]= useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data =>{setCountry(data);
    const names = data.map(countries=>countries.name);
    
    })
    
   }, [])

   const handleAddCountry =(country) => {
     const newCart =[...cart, country];
     setCart(newCart);
    }
  
  return (
    <div className="App">
      <h3>This is the heading {countries.length}</h3>
      <h2>The length of data : {cart.length}</h2>
      <Cart cart={cart}></Cart>
      <ul>
        {
        
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}  name={country.name} population={country.population} flag={country.flag}  />)

        
        }
      </ul>
    </div>
  );
}

export default App;
