/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"

import * as api from '../services/api/auth';
import {AppContext} from "../AppContext/Context";

function PersistentLogin(){
    const {setToUserData} = useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        async function getData(){
            try{
                const {data} = await api.persistentLogin();
                console.log("data:",data);
                setToUserData({id: data.id, name: data.name, email: data.email});
            }catch(err) {
            console.log(err);
            
                alert("sessão expirada");
            
            navigate('/signin');
        }
        
    }
    getData();
    } ,[]);
    return null;
    
}
export default PersistentLogin;