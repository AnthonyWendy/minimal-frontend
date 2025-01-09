import { createContext, useCallback, useContext, useState } from "react";

interface IDrawerContextData {
    isDrawerOpen: boolean;
    drawerOptions: IDrawerOption[];
    toggleDrawerOpen: () => void;
    setDrawerOption: (newDrawerOptions: IDrawerOption[]) => void;
}

interface IDrawerOption {
    icon: React.ReactNode; // Alterado para aceitar JSX.
    path: string;
    label: string;
}

interface IDrawerProviderProps {
    children: React.ReactNode;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<IDrawerProviderProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
    }, []);

    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
        setDrawerOptions(newDrawerOptions);
    }, []);

    return (
        <DrawerContext.Provider
            value={{
                isDrawerOpen,
                drawerOptions,
                toggleDrawerOpen,
                setDrawerOption: handleSetDrawerOptions,
            }}
        >
            {children}
        </DrawerContext.Provider>
    );
};
