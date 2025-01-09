import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect, useMemo } from "react";
import { DrawerOptionsList } from "../shared/components/menulateral/DrawerOptionsList";

export const AppRoutes = () => {
    const { toggleDrawerOpen, setDrawerOption } = useDrawerContext();

    const drawerOptionList = useMemo(() => DrawerOptionsList(), []);

    useEffect(() => {
        setDrawerOption(drawerOptionList);
    }, [setDrawerOption, drawerOptionList]);

    return (
        <Routes>
            <Route
                path="/pagina-inicial"
                element={
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={toggleDrawerOpen}
                    >
                        Mudar o contexto
                    </Button>
                }
            />
            <Route path="/cidades" element={<div>Cidades</div>} />
            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    );
};