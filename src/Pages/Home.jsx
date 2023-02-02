import { Link } from "react-router-dom";
import FormLogin from "../Componts/Atomos/FormLogin";

function Home(){
    return(
        <>
        <FormLogin/>
        <Link to="/Login">Iniciar Sesion</Link>
        </>
    )
}

export default Home;