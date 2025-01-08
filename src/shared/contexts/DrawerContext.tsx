import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Box, ThemeProvider } from "@mui/material";

import { LightTheme, DarkTheme } from "./../themes";



interface IDrawerContextData {
    isDrawerOpen: boolean,
    toggleDrawerOpen: () => void;
}

interface IDraweProviderProps {
    children: React.ReactNode
}

const DrawerContext = createContext({} as IDrawerContextData );

export const useDrawerContext = () => {
    return useContext(DrawerContext);
 }



export const DrawerProvider: React.FC<IDraweProviderProps> = ({ children }) => {

    const [isDrawerOpen, setIsDrawerOpen]= useState(false);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDraweropen => !oldDraweropen);
    }, []);


    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
            {children}
        </DrawerContext.Provider>
    );


}
