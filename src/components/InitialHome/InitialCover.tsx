
import IntroImg from "../../assets/harley.jpg";
import './initialCover.css'


export default () => {
  return (
    <div className="initial-cover">
      <div className="mask">
        <img className="into-img" src={IntroImg } alt="IntroImg" />
      </div>

      <div className="content">
        <h2>Nós montamos para voar</h2>
        <h1>
          No retrovisor vejo o que ficou para trás, mas à minha frente existe
          uma longa estrada de possibilidades.
        </h1>

        <div>
            <button className="btn">Fale com um especialista</button>
        </div>
      </div>
    </div>
  );
};
