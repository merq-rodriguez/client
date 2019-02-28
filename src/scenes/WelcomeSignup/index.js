import React from 'react';
import { connect } from 'react-redux';
import pufy from '../../assets/images/pufy.png'
import './styles.scss';


class WelcomeSignup extends React.Component {

  state = { 
    err: false,
    message: '',
    user: {}
  };

  emailRef =        React.createRef();
  emialConfirmRef = React.createRef();
  nameRef =         React.createRef();
  passwordRef =     React.createRef();


  validateEmptyField(){
    if(this.state.user.email === '' || this.state.user.name === '' || this.state.user.password === '' ){
      this.setState({ err: true,  message: '* Ingrese los campos obligatorios' })
    }else{
      this.setState({ err: true,  message: ''})
    }
  }

  signUp = (e) => {
    e.preventDefault();

    const dataUser = {
      email: this.emailRef.current.value,
      name: this.nameRef.current.value,
      password: this.passwordRef.current.value
    }

    this.setState({
       data: dataUser 
    })

    this.validateEmptyField();

/* 
    if(dataUser.email === '' || dataUser.name === '' || dataUser.password === '' ){
      this.setState({
         err: true, 
         message: 'Ingrese los campos obligatorios'
      })
    }else{
      if(dataUser.email !== this.emialConfirmRef.current.value){
        console.log("Verifique que coincida el email")
        this.setState({ err: true })
      }
      this.setState({ err: false })
    } */
    console.log(dataUser);
  }

  render() {
  return (
    
    <div  className="container-signup"> 
       <header>
        <img src={pufy}/> 
      </header>
      
     
    <section>
        <h3>Registra tu dirección de email</h3>
        <form onSubmit={this.signUp}>
            <input type="email"  placeholder="Email" name="" ref={this.emailRef} />
            <p> * Campos obligatorios</p>
            <input type="email" placeholder="Confirmar email" ref={this.emialConfirmRef} name=""/>
            <input type="text" placeholder="Nombre"  ref={this.nameRef} name=""/>
            <input type="password" placeholder="Contraseña" ref={this.passwordRef} name=""/>

            <div className="rd">
            { this.state.err ? <p> Error </p> : '' }
                <input type="radio" value="" id="rd" name=""/>

                <label>
                    Compatir mis datos de registro con los proveedores de contenido de Pufy para fines de Marketing
                </label>

            </div>
            <br/>
             <p className="term">
                Al hacer click en registrarce acepta los
                <a href="">Términos y Condiciones</a> de Uso de Pufy
            </p>
            <button>REGISTRATE</button>
            <p className="term">
                ¿Ya tienes una cuenta?
                <a href="#">Iniciar sesión</a>
            </p> 
        </form>
    </section>
    <footer></footer> 
      
    </div>
    
    );
  }

  onSignupPress = (data) => { 
    this.setState({ email: data.correo });
    this.props.signupAction(data); 
  }
};

  
export default WelcomeSignup;

