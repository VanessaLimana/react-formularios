import React, { Component } from 'react'; 

class App extends Component { 

constructor(props){
  super(props);
  this.state = {
    form:{
        nome: 'vanessa',
        email: 'vanessa@br.com',
        senha: '123',
        sexo: 'feminino'
    }
  }
  this.dadosform=this.dadosform.bind(this);
  
}
dadosform(e){
    let form = this.state.form;
    form[e.target.name] = e.target.value;
    this.setState({form: form});
}

  render(){
    return(
      <div>
        <h2>Login</h2>
        Nome:
        <input type ="text" name="nome" value={this.state.form.nome} onChange={this.dadosform}/>
        E-mail:
        <input type = "email" name="email" value={this.state.form.email}
          onChange={this.dadosform}/><br></br>
        Senha:
        <input type ="senha" name ="senha" value={this.state.form.senha}
          onChange={()=> this.dadosform}/> 
        Sexo:
        <select name="sexo" value={this.state.form.sexo} onChange={this.dadosform}>
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
