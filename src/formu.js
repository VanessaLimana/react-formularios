import React, { Component } from 'react'; 

class App extends Component { 

constructor(props){
  super(props);
  this.state = {
    email: '',
    senha: '',
    sexo: ''
  }
  this.trocaemail=this.trocaemail.bind(this);
  this.trocasexo=this.trocasexo.bind(this);

}

trocaemail(e){
  let valorDigitado = e.target.value;
  this.setState({email: valorDigitado});

}
trocasexo(e){
  let sexoescolhido = e.target.value;
  this.setState({sexo: sexoescolhido});

}
  render(){
    return(
      <div>
        <h2>Login</h2>
        E-mail:
        <input type = "email" name="email" value={this.state.email}
          onChange={this.trocaemail}/><br></br>
        Senha:
        <input type ="senha" name ="senha" value={this.state.senha}
          onChange={(e)=> this.setState({senha: e.target.value})}/> 
        Sexo:
        <select name="sexo" value={this.state.sexo} onChange={this.trocasexo}>
          <option value="masculino"> Masculino</option>
          <option value="feminino">Feminino</option>
        </select>

        <h3>{this.state.email}</h3>
        <h3>{this.state.senha}</h3>

      </div>

         );
  }
}
export default App;
