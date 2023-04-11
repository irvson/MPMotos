

import './WorkStyles.css';


import WorkCard from './WorkCard';
import WordCardData from "./WorkCardData"



export default () => {
return  (
    <div className='container'>
        <div className="cards">
       
        <h1 className='title'>PRODUTOS EM DESTAQUE</h1>
        
        <div className="card-container">
        
            {WordCardData.map((val , ind) =>{
                return(
                    <WorkCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}                    
                    price={val.price}
                    />
                )
            })}
        </div>
    </div>



        </div>
       
        
) 
}