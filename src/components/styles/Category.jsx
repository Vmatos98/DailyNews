import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 70%;
    height: 90%;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 560px) {
        flex-direction: column;
        width: 500px;
        max-width: 560px;
    }
`;

export const Box = styled.div`
    position: relative;
    background-color:${(props)=>(`var(--color-${props.color})`)};
    z-index: 2;
    width: 20%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 15px;
    margin: 5px;
    ${(props)=>(props.selected===`true`?`{
        opacity: 0.3;
        &:hover {
            cursor: default;
        }
    }
    `:
    `{
        opacity:1;
        &:hover {
            cursor: pointer;
        }
    }`)};
    p{
        font-size: 25px;
        font-family: 'Oswald', sans-serif;
        font-weight: bold;
        color: #fff;
        margin: 5px;
    }
    @media (max-width: 870px) {
        flex-direction: column;
        width: 500px;
        max-width: 560px;
    }
`;

export const Button = styled.button`
    background-color: green;
    border-radius: 15px;
    width: 30%;
    height: 40px;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    color: #fff;
    font-size: 20px;
    font-family: 'Oswald', sans-serif;
    cursor: pointer;
`