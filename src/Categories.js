import React, {useState} from 'react';
import Menu from "./Menu";

const Categories=({filterArr, aller, filteredMenu})=>{
    return (<div className="btn-container">
            <button className="filter-btn" onClick={aller}>All</button>
            {filteredMenu.map((el)=>{
                return (<button className="filter-btn" onClick={()=>filterArr(el)}>{el}</button>)
            })}
        </div>

    )
};

export default Categories;
