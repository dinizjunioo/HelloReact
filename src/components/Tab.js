import React, { useEffect, useState } from 'react'
// import Question from './Question'
// import Results from './Results'



let Tab = (props) => {

  const [resposta,setResposta] = useState("");

  let Options = [
    {title: 'React',data: 'Texto da tabela um'},
    {title: 'Vue',data: 'Texto da tabela dois'},
    {title: 'Angular',data: ''},
    {title: 'Svelte',data: 'Texto da tabela tres'}
  ]

  // Gerando Lista de Botões percorrenda a lista de opções
  let listaDeBotoes = [];

  Options.forEach(option => {
    listaDeBotoes.push(<button  type="button" className='btn btn-outline-primary' onClick={() => setResposta(option.data)}>{option.title}</button>)
  });

  return(
    <div className="questionPanel">
        <div>
            <h1 class="title">TESTE!</h1>
        </div>
        <div className='Buttons'>
            {listaDeBotoes}
            <hr/>
            <div class="texto" rows="">
                <textarea value={resposta} onInput={(campo) => setResposta(campo.target.value) }></textarea>
            </div>
            <hr/>
            <div>
                <button className="btn btn-primary" type="submit">Reinicia</button>
            </div>
        </div>
        
    </div>
      
  )

}
export default Tab;