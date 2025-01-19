import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect, useMemo } from "react";
import { DrawerOptionsList } from "../shared/components/menulateral/DrawerOptionsList";
import { Dashboard } from "../pages";

export const AppRoutes = () => {
    const { setDrawerOption } = useDrawerContext();

    const drawerOptionList = useMemo(() => DrawerOptionsList(), []);

    useEffect(() => {
        setDrawerOption(drawerOptionList);
    }, [setDrawerOption, drawerOptionList]);

    return (
        <Routes>
            <Route path="/pagina-inicial" element={ <Dashboard /> } />
            <Route path="/cidades" element={<div>Cidades</div>} />
            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    );
};