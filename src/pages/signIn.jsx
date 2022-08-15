import { useState, useContext, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";

import * as style from "../components/styles/Auth";
import * as api from '../services/api/auth';
import logo from '../assets/imagens/logo.png';
import {AppContext} from "../AppContext/Context";

export default function SignIn(){
    const [user, setUser] = useState({email: '', password: ''});
    const [disable, setDisable] = useState(false);
    const {setToUserData} = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if(token){
            navigate('/')
        }
    }, []);
    function login(e){
        e.preventDefault();
        setDisable(true);
        api.login(user.email, user.password)
        .then(res => {
            setDisable(false);
            const data = res.data.user;
            const token = res.data.token;
            setToUserData({id: data.id, name: data.name, email: data.email});
            console.log("res:",res.data);
            sessionStorage.setItem('token', JSON.stringify(token));
            window.location.href = '/';
        }).catch(err => {
            setDisable(false);
            console.log("erro:", err);
        }
        );
    }

    return(
        <>
            <style.formContainer>
                <img src={logo} alt='logo'/>
                <style.Form onSubmit={e=>login(e)}>
                    <style.Input type="email" value={user.email} disabled = {disable} placeholder="email" onChange={e => setUser({...user ,email :e.target.value})} required/>
                    <style.Input type="password" value={user.password} disabled = {disable} placeholder="Password" onChange={(e) => setUser({...user, password: e.target.value})}/>
                    <style.Button  disabled={(!(user.email && user.password)||disable)?true:false} type="submit">
                    {disable?"Loading":"Entrar"}
                    </style.Button>
                </style.Form>
                <style.Link>
                    <Link to="/signup">Criar conta</Link>
                </style.Link>
            </style.formContainer>
        </>
    );
}