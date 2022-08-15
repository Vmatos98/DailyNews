import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/HeaderMenu";  
import * as style from"../components/styles/Category";
import * as api from '../services/api/categories';
import {AppContext} from "../AppContext/Context";

export default function Categories(){
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [userCategories, setUserCategories] = useState([]);
    const [categoryId, setCategoryId] = useState([]);
    const [controlToAdd, setcontrolToAdd] = useState({});
    const {userData} = useContext(AppContext);

    useEffect(() => {
        async function getData(){
            try{
                const aux = [];
                const aux2 = [];
                const {data} = await api.getAllCategories();
                const categoriesData = await api.getUserCategories();
                const userData = categoriesData.data;
                setCategories(data);
                userData.forEach(element => {
                    aux.push(element.category);
                    aux2.push(element.category.id)
                });
                setUserCategories(aux);
                setCategoryId(aux2);
            }catch(err) {
                console.log(err);
            }
            
        }
        getData();
    } , []);

    function userCategory(id){
        if(categoryId.includes(id) & ( controlToAdd[id]=== "remove")){
            return false;
        }
        if(categoryId.includes(id) & ( controlToAdd[id]=== undefined)){
            return true;
        }
        if(controlToAdd[id]=== "add"){
            return true;
        }
        if(controlToAdd[id]=== undefined){
            return false;
        }
        return false;
        
    }
    function addOrRemoveCategory(id){
        
        if(categoryId.includes(id)){
            if(controlToAdd[id]=== undefined){
                setcontrolToAdd({...controlToAdd, [id]: "remove"});
            }else if(controlToAdd[id]=== "remove"){
                delete controlToAdd[id];
            }
        }else{
            if(controlToAdd[id]=== undefined){
                setcontrolToAdd({...controlToAdd, [id]: "add"});
            }else{
                delete controlToAdd[id];
            }
        }
        userCategory(id)
    }

    async function confirm(){
        const insert = [];
        const remove = [];
        Object.keys(controlToAdd).forEach(element => {
            if(controlToAdd[element]=== "add"){
                insert.push({categoryId: +element, userId: userData});
            }
            if(controlToAdd[element]=== "remove"){
                remove.push({categoryId: +element, userId: userData});
            }
        } );
        setcontrolToAdd({});
        const base = {insert, remove};
        console.log(base);
        try{
            await api.updateUserCategory(base);
            navigate('/');
        }catch(err){
            console.log(err);
            alert("Erro ao atualizar");
        }
    }

    return (
        <>
        <Header page={'categories'}/>
        <style.Container >
            {categories.map(category => {
                return (
                    <style.Box onClick={()=>{addOrRemoveCategory(category.id)}}
                        color ={category.name}
                        selected={userCategory(category.id)?"true":"false"} >
                <p>{category.name.toUpperCase()}</p>
            </style.Box>
                )
            })}
        </style.Container>
        <style.Button onClick={()=>{confirm()}}> CONFIRMAR </style.Button>
        </>
    );
}