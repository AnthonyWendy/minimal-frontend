import { Outlet } from "react-router-dom";

function LayoutPages() {
  return (
    <>
      <h1>Layout Padrão (topo)</h1>
        <Outlet />
      <h1>Layout Padrão (rodapé)</h1>
    </>
  );
}

export default LayoutPages;
