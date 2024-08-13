import { Registro } from "@/components/component/registro"
import { Calendario } from "@/components/component/calendario"
import { MisRegistros } from "@/components/component/misregistros"
import {Footer} from "@/components/component/footer"
import { Toaster } from "react-hot-toast";

function Home() {
  return (
    <div id="__next">
      <Registro />
      <Calendario />
      <MisRegistros/>
      <Footer />
      <Toaster/>
    </div>
  );
}

export default Home;