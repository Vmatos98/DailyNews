import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Header(props){
    const {page} = props;
    return (
        <>
        <HeaderWrapper>
            <HeaderMenu>
                <HeaderMenuItem onSelect= {page==='categories'?'select':'unselect'}>
                    <HeaderMenuItemLink>
                        <Link to="/categories">Categorias</Link>
                    </HeaderMenuItemLink>
                </HeaderMenuItem>
                <HeaderMenuItem onSelect = {page==='news'?'select':'unselect'}>
                    <HeaderMenuItemLink>
                        <Link to="/">News</Link>
                    </HeaderMenuItemLink>
                </HeaderMenuItem>
                <HeaderMenuItem onSelect= {page==='tops'?'select':'unselect'}>
                    <HeaderMenuItemLink>
                    <Link to="/tops">Tops</Link>
                    </HeaderMenuItemLink>
                </HeaderMenuItem>
            </HeaderMenu>
        </HeaderWrapper>
        </>
    );
}

const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #4287f5;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
    z-index: 1;
    @media (max-width: 400px) {
        flex-direction: column;
        width: 400px;
        max-width: 560px;
    }
`;

const HeaderMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`;
const HeaderMenuItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color:${(props)=>(props.onSelect===`select`?`red`:`#4287f5`)};
    border-radius: 15px;
`;
const HeaderMenuItemLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #c8c1c1;
    text-decoration: none;  
    font-size: 1.2rem;
    font-weight: bold;
    a:link, a:visited,  a:hover, a:active
{
    color: #c8c1c1;
    text-decoration: none;
}
    &:hover {
        color: #fff;
        text-decoration: none;
    }
`;