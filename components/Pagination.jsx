import React from 'react'

const Pagination = (props,{skip=0,limit=10, max=50})=>{

    return(
        <ul>
            max.map(item=>(
            <li>{item}</li>
            ))
        </ul>
    )
};

export default Pagination