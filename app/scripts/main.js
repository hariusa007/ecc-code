/**
 * The Initial React Setup file
 * ...
 * 
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 * 
 * == JS
 * All files in here start from this init point for the React Components.
 *  
 * 
 * Firstly we need to import the React JS Library
 */
import React,{useState} from 'react';
import { createRoot } from 'react-dom/client';

import Menu from './components/menu';
import Home from './components/home';


/**
 * We can start our initial App here in the main.js file
 */


 const App=()=>  {
   const [filtererdData,setData]=useState([])

    const onSearch= async (e)=>{
        const name = e.target.value; 
        if(name){
            const res = await fetch(`http://localhost:3035/cart?name=${name}`);
            const data = await res.json()
            console.log('data', data)
            setData(data);
        }else setData([]);
    };
        return (
            <div className="App">
                <Menu onSearch={onSearch} />
                <Home data={filtererdData} />
            </div>
        );

}

// Render this out
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
