import React, { useContext } from "react";
import { ThemeContext } from './Theme'

function Form() {

  const context = useContext(ThemeContext)

  const renderForm = (
    <form>
      <label>Nome:</label>
      <input type="text" />
      <label>E-mail:</label>
      <input type="text" />
      <label>Idade:</label>
      <input type="text" />
      <label>Telefone:</label>
      <input type="text" />
    </form>
  )

  const renderNotLogged = (
    <h1>É necessário realizar o login!</h1>
  )
  
  return (
    <div>
      {!context.token ? renderNotLogged : renderForm}
    </div>
  )
}

export default Form;