import styled from 'styled-components';

export const formContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    background-color: #30dfeb;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 560px;
    margin-top: 10vh;
    height: 80vh;
    border-radius: 10px;
    @media (max-width: 560px) {
        margin-top: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        border-radius: 0;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 429px;
    margin-top: 3vh;
    @media (max-width: 560px) {
        margin-top: 40px;
    }
`;

export const Input = styled.input`
    padding-left: 15px;
    width: 429px;
    height: 65px;
    border-radius: 6px;
    margin-bottom: 13px;
    font-size: 27px;
    line-height: 40px;
    border: none;
    @media (max-width: 560px) {
        width: 330px;
        height: 55px;
    }
`;

export const Button = styled.button`
    width: 429px;
    height: 65px;
    border-radius: 6px;
    background-color:  #1877F2;
    border: none;
    margin-bottom: 22px;
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    color: #ffff;
    font-weight: 700;
    opacity: 1;
    &:hover {
        cursor: pointer;
    }
    &:disabled {
        cursor: default;
        opacity: 0.7;
        background-color:#4686db;
        color: #e0e0e0;
    }
    
    @media (max-width: 560px) {
        width: 330px;
        height: 55px;
    }
`;

export const Link = styled.div`
    color: #FFF;
    font-size: 22px;
    line-height: 33px;
    font-weight: 600; 
    a:link, a:visited,  a:hover, a:active
{
    color: #FFF;
    text-decoration: none;
}

    &:hover {
        cursor: pointer;
    }
`;
