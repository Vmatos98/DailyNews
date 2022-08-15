import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import Categories from "./pages/Categories"
import Tops from "./pages/Tops";
import {AppProvider, RemoveProvider} from "./AppContext/Provider"
import PersistentLogin from "./components/PersistentLogin";

function App(){
    return(
    <BrowserRouter>
        <AppProvider> 
        <RemoveProvider>
            <PersistentLogin />   
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/tops" element={<Tops />}/>
            </Routes>
        </RemoveProvider>
        </AppProvider>
    </BrowserRouter>
    );
}

export default App;