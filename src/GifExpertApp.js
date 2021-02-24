import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] =useState( ['One Punch man']);

    // const handleAdd =()=>{
    //     //setCategories([...categories, 'HunterXHunter']); al final 
    //     setCategories(['HunterXHunter',...categories]); // al inicioo
    //     //setCategories(cats=>[...cats,'HunterXhunter']);
    // }
    
    return (
        <>
            <h2>Gift Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            {/* <button onClick={handleAdd}> Agregar</button> */}
            <ol>
            { 
                categories.map(category =>
                    <GifGrid key={category} category={category}/>
                )}
            </ol>
        </>

    )
}

export default GifExpertApp;