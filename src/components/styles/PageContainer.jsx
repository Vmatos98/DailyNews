import styled from "styled-components";


export const PageContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    max-width: 760px;
    height: 60vh;
    max-height: 500px;
    left: 50%;
    transform: translate(-50%);
    background-color:blue;
    border: 1px solid #fafafa;
    border-radius: 10px;
    margin-top: 60px;
    margin-bottom: 5px;
    @media(max-width: 560px) {
        width:100%;
        max-width:560px;
    }
    `;

export const Top = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    width: 100%;
    height: 15%;
    background-color:${(props)=>(`var(--color-${props.category})`)};
`;

export const Title = styled.h1`
    font-family: 'Oswald', sans-serif;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
`;

export const Content = styled.div`
    position: absolute;
    top: 15%;
    width: 100%;
    height: 80%;
    background-image: url("https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg");
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
    img {
        width: 100%;
        height: 100%;
    }
    &:hover {
        img {
            filter: brightness(0.5);
        }
    }
`;

export const TextContent = styled.div`
    width: 100%;
    max-width:100%;
    height: 100%;
    max-height:100%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    padding-top: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2px;
    &:hover {
        color: #fff;
        padding-top: 20%;
    }
    
`;

export const TextTitle = styled.p`
    width: 100%;
    max-width:100%;
    height: 100%;
    max-height:100%;
    font-family: 'Oswald', sans-serif;
    font-size: 38px;
    font-weight: bold;
    color: rgba(255,255,255,0.8);
    text-shadow: 0px 0px 5px black;
    display: flex;
    justify-content:baseline;
    align-items: baseline;
    overflow: hidden;
    @media(max-width: 560px) {
        font-size: 25px;
    }
`;

export const TextDescription = styled.p`
    width: 100%;
    max-width:100%;
    height: 100%;
    max-height:100%;
    font-family: 'Oswald', sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: rgba(255,255,255,0);
    /* background-color:red; */
    position: absolute;
    top: 0;
    padding-top: 30%;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover {
        color: #fff;
        text-shadow: 0px 0px 5px black;
        animation: fade-in 0.8s 0.0s forwards;
    }
    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @media(max-width: 560px) {
        font-size: 18px;
        color: #fff;
        padding-top: 50%;
        padding-bottom: 10px;
        text-shadow: 0px 0px 5px black;
    }
`;

export const Bottom = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: left;
    padding-left: 10px;
    align-items: center;
    background-color: #bdb6b6;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    z-index: 1;
`;

export const Fire = styled.div`
    color: ${(props)=>(props.color)};
    width: 25px;
    display: flex;
    justify-content: center;
`
export const Snow = styled.div`
    color: ${(props)=>(props.color)};
    width: 25px;
    display: flex;
    justify-content: center;
`