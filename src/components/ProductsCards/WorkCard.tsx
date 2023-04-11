import React from 'react'
import './WorkStyles.css'

export default (props: any) => {
return (   
    <>
    
<div className="card">
    <h3 className='header-card'>Produtos</h3>
<img src={props.imgsrc} a-lt="image-pneu" />
<h2 className="card-details">
    {props.title} 
    
</h2>
<h1 className="card-details">
{props.price}
</h1>
</div>
</>
) 


}