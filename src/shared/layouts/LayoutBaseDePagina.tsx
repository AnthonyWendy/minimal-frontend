import { Menu } from "@mui/icons-material";
import { Icon, Box, IconButton, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useDrawerContext } from "../contexts";
import { ReactNode } from "react";

interface ILayoutBaseDePaginaProps {
  titulo: string,
  barraDeFerramentas: ReactNode,
  children?: ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({
  children,
  titulo,
  barraDeFerramentas
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  //Função que abre o menu lateral
  const { toggleDrawerOpen } = useDrawerContext();


  return (
      <Box height="100%" display="flex" flexDirection="column" gap={1} >

        {/* a configuração adicionado no height serve para verificar o tamanho da tela e caso seja menor do que o especificado, o tamanho da fonte irá diminuir */}
        <Box padding={1} display="flex" alignItems="center" height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}>
          {smDown && (
            <IconButton onClick={toggleDrawerOpen}>
              <Icon><Menu/></Icon>
            </IconButton>
          )}

          <Typography
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            variant={smDown ? "h5" : mdDown ? "h4" : "h3" }
          >
            {titulo}
          </Typography>
        </Box>

        {barraDeFerramentas && (<Box>
          {barraDeFerramentas}
        </Box>)}


        <Box flex={1} overflow="auto">
          {children}
        </Box>
      </Box>
  );
};
