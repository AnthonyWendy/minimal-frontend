import { Home, Star } from "@mui/icons-material";

interface DrawerOption {
    icon: React.ReactNode; // O tipo para ícones em React
    path: string;          // Caminho da rota
    label: string;         // Texto que aparece no menu
}

export const DrawerOptionsList = (): DrawerOption[] => [
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
];
