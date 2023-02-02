import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/Style/FormRegister.css'

function FormRegister() {
    const navigate = useNavigate()
const form = useRef()

    const handlerClick=(e)=>{
        e.preventDefault();
        const newForm = new FormData(form.current)
        alert('Nombre: '+newForm.get('name')+'Username: '+newForm.get('username')+'Password: '+newForm.get('password'))
    }
    return (
      <div className="formulario">
        <div className="form_Register">
          <div className="imgAlta">
            {/* <img src={Logo} alt="Logo" height="100px" /> */} 
          </div>
          <form action="" ref={form}>
            <div className="Colm">
              <div className="text">
                <label className="caption" htmlFor="name">
                  Nombre
                </label>
                <input
                  className="inp"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="name"/>
              </div>
              <div className="text">
                <label className="caption">username</label>
                <input
                  className="inp"
                  type="text"
                  name="username"
                  placeholder="name"
                />
              </div>
              <div className="text">
                <label className="caption" htmlFor="pass">
                  password
                </label>
                <input
                  className="inp"
                  type="password"
                  id="pass"
                  name="password"
                />
              </div>
            </div>
            <div className="boton">
              <button onClick={handlerClick}>Registro</button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default FormRegister;