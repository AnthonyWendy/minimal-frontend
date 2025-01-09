import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { Home, Star } from "@mui/icons-material";

export const AppRoutes = () => {
    const { toggleDrawerOpen, setDrawerOption } = useDrawerContext();

    useEffect(() => {
        setDrawerOption([
            {
                icon: <Home />,
                path: "/pagina-inicial",
                label: "Página inicial",
            },
            {
                icon: <Star />,
                path: "/cidades",
                label: "Cidades",
            },
        ]);
    }, [setDrawerOption]); // Adicionado array de dependências.

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
            <Route path="/cidades" element={<div>Cidades</div>} /> {/* Nova rota */}
            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    );
};
