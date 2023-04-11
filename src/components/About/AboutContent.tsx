

import Tool from "../../assets/tool.jpg";
import './aboutStyles.css'


export default () => {
  return (
    <div className="about-initial">
      <div className="about-mask">        
        <img className="into-img-about" src={Tool} alt="IntroImg" />
           <h2>Quem somos </h2>
           <p>Empresa especializada na revenda de peças de reposição para motocicletas 
            leves, nacionais e importadas. No mercado, há 46 anos nossa sede conta, com investimentos 
            em novos itens para atender a alta demanda de peças e modelos novos. Motos lançadas anualmente, 
            nos possibilita manter um estoque capaz de suprir as necessidades, tanto de nossos clientes de balcão 
            como dos profissionais que possuem cadastro de compra em nossa empresa. Com preços competitivos, sem 
            perder o foco de oferecer as melhores marcas nos diversos seguimentos atendidos.</p>
        <div>    
      </div>
     
            <button className="about-btn">Fale conosco</button>
        </div>
      </div>
    
  );
};
