import {  useEffect, useState } from "react";

import Header from "../components/HeaderMenu";  
import PageContainer from "../components/PageContainer";
// import AppContext from "../AppContext/Context";
import * as api from '../services/api/news';

export default function Tops(){
    const [dataNews, setDataNews] = useState([]);
    // const {userData, setToUserData} = useContext(AppContext);
    useEffect(() => {
        async function getData(){
            try{
                const {data} = await api.getTops();
                setDataNews(data);
                console.log("data:",data)
            }catch(err) {
                console.log(err);
            }
        }
        getData();
    }, []);

    return (
        <>
        <Header page={'tops'}/>
        
        {dataNews.map(news => {
            
            return (
                <PageContainer key={news.id} title={news.title} category ="tops" img={news.image} description ={news.description}/>
            )
        })}
        </>
    );
}