
import { useNavigate, Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

import * as style from "../components/styles/Auth";
import logo from '../assets/imagens/logo.png';
import * as api from '../services/api/auth';
import {AppContext} from "../AppContext/Context";

export default function SignUp(){
    const [user, setUser] = useState({email: '', password: '', name: ''});
    const [disable, setDisable] = useState(false);
    const {user: userContext, setUser: setUserContext} = useContext(AppContext);
    const navigate = useNavigate();

    async function register(e){
        e.preventDefault();
        setDisable(true);
        try{
        const res = await api.signup(user.name, user.email, user.password)
            setDisable(false);
            // setUserContext(res.data);
            const token = res.data;
            sessionStorage.setItem('token', JSON.stringify(token));
            console.log("resposta",res);
            navigate('/categories');
        }catch(err) {
            setDisable(false);
            alert(err.response.data);
        }
    }
    return(
        <>
            <style.formContainer>
                <img src={logo} alt='logo'/>
                <style.Form onSubmit={e=>register(e)}>
                    <style.Input type="text" value={user.name} disabled = {disable} placeholder="Name" onChange={(e) => setUser({...user, name: e.target.value})}/>
                    <style.Input type="email" value={user.email} disabled = {disable} placeholder="email" onChange={e => setUser({...user ,email :e.target.value})} required/>
                    <style.Input type="password" value={user.password} disabled = {disable} placeholder="Password" onChange={(e) => setUser({...user, password: e.target.value})}/>
                    <style.Button  disabled={(!(user.email && user.name && user.password)||disable)?true:false} type="submit">
                    {disable?"Loading":"Cadastrar"}
                    </style.Button>
                </style.Form>
                <style.Link>
                    <Link to="/signin">Já possui uma conta?</Link>
                </style.Link>
            </style.formContainer>
        </>
    );

}