import React from 'react'

const Rating = ({rate,setRate}) => {

const array=(x)=>{
    let star =[]
    for (let i=1 ;i<=5 ;i++){
        if(i<=x){star.push(
    <span style={{color:"yellow",cursor:"pointer",fontSize:"180%"}} onClick={()=>setRate(i)}>
        ★
    </span>

)}
else{star.push(
    <span style={{color:"yellow",cursor:"pointer",fontSize:"180%"}} onClick={()=>setRate(i)}>
        ☆
    </span>

)}
    }return star
}

    return (
        <div>
            {array(rate)}
        </div>
    )
}

export default Rating
