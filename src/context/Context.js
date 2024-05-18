import {createContext, useContext} from "react"

export const ModelContext=createContext()

export const ModelProvider=ModelContext.Provider


export default function  useModel(){
    return useContext(ModelContext)
}