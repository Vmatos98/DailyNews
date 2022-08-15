import {  useEffect, useState } from "react";

import Header from "../components/HeaderMenu";  
import PageContainer from "../components/PageContainer";
// import AppContext from "../AppContext/Context";
import * as api from '../services/api/news';

export default function Home(){
    const [dataNews, setDataNews] = useState({});
    // const {userData, setToUserData} = useContext(AppContext);
    useEffect(() => {
        async function getData(){
            try{
                const {data} = await api.getNews();
                setDataNews(data);
            }catch(err) {
                console.log(err);
            }
        }
        getData();
    }, []);

    const categories = Object.keys(dataNews);
    return (
        <>
        <Header page={'news'}/>
        {categories.map(category => {
            const news =  organizeNews(dataNews[category]);
            return (
                <PageContainer key={category} category={category} title={news.title} img={news.image} description ={news.description}/>
            )
        })}
        </>
    );
}

function organizeNews(news){
    const random = Math.floor(Math.random() * 10);
    const response = news[random];
    return response;
}