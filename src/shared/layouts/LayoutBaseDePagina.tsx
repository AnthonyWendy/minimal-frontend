import { Menu } from "@mui/icons-material";
import { Icon, Box, IconButton, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useDrawerContext } from "../contexts";

interface ILayoutBaseDePaginaProps {
  titulo: string;
  children?: React.ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({
  children,
  titulo,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  //Função que abre o menu lateral
  const { toggleDrawerOpen } = useDrawerContext();


  return (
      <Box height="100%" display="flex" flexDirection="column" gap={1} >
        <Box padding={1} display="flex" alignItems="center" height={theme.spacing(12)}>
          {smDown && (
            <IconButton onClick={toggleDrawerOpen}>
              <Icon><Menu/></Icon>
            </IconButton>
          )}

          <Typography variant="h5">
            {titulo}
          </Typography>
        </Box>

        <Box>

          Barra de ferramentas
        </Box>


        <Box>
          {children}
        </Box>
      </Box>
  );
};
