import {useState} from "react";
import {AppContext, RemoveContext, AddContext} from "./Context";


const AppProvider = ({ children }) => {
    const [userData, setUserData] = useState({});
    const setToUserData = ((data) => {
        setUserData(userData.id=data.id, userData.name=data.name, userData.email=data.email);
        console.log(data);
        console.log("provider",userData);
    })
    return(
        <AppContext.Provider value={{ userData, setToUserData}}>
            
            {children}
        </AppContext.Provider>
    )
}

const RemoveProvider = ({ children }) => {
    const [removeData, setRemoveData] = useState({});
    const setToRemoveData = ((data) => {
        setRemoveData(removeData.categoryId=data.id, removeData.userId=data.userId);
        console.log(data);
        console.log("provider",removeData);
    }
    )
    return(
        <RemoveContext.Provider value={{ removeData, setToRemoveData}}>
            {children}
        </RemoveContext.Provider>
    )       
}

const AddProvider = ({ children }) => {
    const [addData, setAddData] = useState({});
    const setToAddData = ((data) => {
        setAddData(addData.categoryId=data.id, addData.userId=data.userId);
        console.log(data);
        console.log("provider",addData);
    }
    )
    return(
        <AddContext.Provider value={{ addData, setToAddData}}>
            {children}
        </AddContext.Provider>
    )       
}

export {
    AppProvider,
    RemoveProvider,
    AddProvider
};