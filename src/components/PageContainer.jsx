import { useState } from 'react';

import * as style from './styles/PageContainer';
import {AiFillFire, AiOutlineFire} from "react-icons/ai";
import {FaSnowflake} from "react-icons/fa";

export default function PageContainer(props){
    const {category, title, img, description, link} = props;
    const [hot, setHot] = useState(false);
    const [cold, setCold] = useState(false);

    function vote(type){
        if(type === 'hot'){
            setHot(!hot);
            setCold(false);
        }
        if(type === 'cold'){
            setCold(!cold);
            setHot(false);
        }
    }

    function redirect(){
        window.open(link, "_blank");
    }

    return (
        <>
        <style.PageContainer >
            <style.Top category={category}>  
                <style.Title>{category.toUpperCase()}</style.Title> 
            </style.Top>
            <style.Content onClick={()=>{redirect()}}>
                <img src={img} alt={title} />
                <style.TextContent>
                    <style.TextTitle>{title}</style.TextTitle>
                    <style.TextDescription>{description}</style.TextDescription>
                </style.TextContent>
            </style.Content>
            <style.Bottom>
                <style.Fire color={hot?'#ec4422':'#fff'} onClick={()=>{vote("hot")}}>
                    {hot?<AiFillFire />:<AiOutlineFire />}
                </style.Fire>
                <style.Snow color={cold?'#5b96f5':'#fff'} onClick={()=>{vote("cold")}}>
                    <FaSnowflake />
                </style.Snow>
            </style.Bottom>
        </style.PageContainer>
        
        </>
    );
}