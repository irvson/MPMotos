import "./footer.css";


import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";


export default ()=>{
    return (
        <div className="footer">
      
        <div className="footer-container">
         
          <div className="left">
            
            <div className="location">
             
              <FaHome 
              size={20} 
              style={{ marginRight: "2rem", color: "#fff" }} 
              />
            <p>Rua do Saletis,Djalminha Dutra ,188</p>
              <p></p>
            </div>
            
          
             
              
           
            
            
            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ marginRight: "2rem", color: "#fff" }}
                />
                (71) 99485-3887
              </h4>          
            </div>
           
            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ marginRight: "2rem", color: "#fff" }}
                />
                mpmotos@gmail.com
              </h4>
            </div>  
  
          </div>
  
          <div className="right">
            <h4>Sobre a empresa</h4>
            <p>              
©Copyright 2016 - MP Motos Peças e Acessórios para Motos LTDA - 
Todos os direitos reservados. CNPJ: 28.004.065/0008-44

            </p>
            
            <div className="social">
            <FaFacebook
              size={20}
              style={{ marginRight: "2rem", color: "#fff" }}
            />
             <FaTwitter
              size={20}
              style={{ marginRight: "2rem", color: "#fff" }}
            />
             <FaLinkedin
              size={20}
              style={{ marginRight: "2rem", color: "#fff" }}
            />
            
            
            </div>
         
         
          </div>
        </div>
      </div>
    )
}