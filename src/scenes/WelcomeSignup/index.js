import React from 'react';
import { connect } from 'react-redux';
import pufy from '../../assets/images/pufy.png'
import './styles.scss';


class WelcomeSignup extends React.Component {

  state = {  };

  render() {
  return (
    
    <div>
       <header>
        <img src={pufy}/> 
      </header>
      
     
    <section>
        <h3>Registra tu dirección de email</h3>
        <form>
            <input type="email" placeholder="Email" name=""/>
            <input type="email" placeholder="Confirmar email" name=""/>
            <input type="text" placeholder="Nombre" name=""/>
            <input type="password" placeholder="Contraseña" name=""/>

            <div className="rd">

                <input type="radio" value="" id="rd" name=""/>

                <label for="rd">
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

