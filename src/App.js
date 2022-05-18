import React, {useState} from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const filteredMenu = [...new Set(items.map((el)=>el.category))]
const itemms = items;
console.log(itemms)
const App=()=>{
    const [filter,setFilter]=useState([]);
    const [menuItems,setMenuItems]=useState(items);

    const filterArr=(category)=> {
        const newItem = items.filter((el)=>el.category===category)
        setMenuItems(newItem);
    };
    const aller = ()=>{
        setMenuItems(itemms)
    }
    return (
        <main>
            <article className="menu section">
                <div className="title"><h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                    <Categories filterArr={filterArr} aller={aller} filteredMenu={filteredMenu}/>
                <article className="section-center">
                    <Menu menuItems={menuItems}/>
                </article>
            </article>
        </main>
    )
}

export default App;
