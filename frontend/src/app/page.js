import { Registro } from "@/components/component/registro"
import { Calendario } from "@/components/component/calendario"
import { MisRegistros } from "@/components/component/misregistros"
import { Toaster } from "react-hot-toast";

function Home() {
  return (
    <div id="__next">
      <Registro />
      <Calendario />
      <MisRegistros/>
      <Toaster/>
    </div>
  );
}

export default Home;