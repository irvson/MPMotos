import "./HelmetStyles.css";


import HelmetCard from './HelmetCard';
import HelmetProductData from './HelmetCardData';





export default (props: any, itens: any) => {
   
      return (
        <div className='helmet-container'>

             <h1 className='helmet-header'>CAPACETES EM DESTAQUE</h1>
            
             <div className="prod-container">
             {HelmetProductData.map((val , ind) =>{
                return(
                    <HelmetCard
                    key={ind}
                    imgsrc={val.imgsrc}                   
                    />
                )
            })}



</div>
             </div>
            
        
        
        
        
    )
    };

function mdx() {
    throw new Error('Function not implemented.');
}
    