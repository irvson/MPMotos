

import './FormStyles.css'

export default () =>{
    return(
        <div className='form'>
      <form >
        <label>Nome</label>
        <input type="text" name="" id="" />

        <label>Email</label>
        <input type="email" name="" id="" />

        <label>Tema</label>
        <input type="text" name="" id="" />

        <label>Mensagem</label>
        <textarea rows={6} placeholder='Assunto...' />
            <button className="btn">Enviar</button>
      </form>
    </div>
    )
}