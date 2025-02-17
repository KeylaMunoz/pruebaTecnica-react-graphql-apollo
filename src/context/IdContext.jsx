import React, {createContext, useState} from "react";

const IdContext = createContext()

const IdProvider = ({ children }) => {

    const [id, setId] = useState('');
    const [selectedCharacterId, setSelectedCharacterId] = useState(null);

    const searchId = (getId) => {
        setId(getId)
    }

    return (
        <IdContext.Provider value={{ selectedCharacterId, setSelectedCharacterId, searchId, id}}>
            {children}
        </IdContext.Provider>
    )

}

export { IdProvider, IdContext }
