import { Registro } from "@/components/component/registro"
import { Calendario } from "@/components/component/calendario"
import { MisRegistros } from "@/components/component/misregistros"

function Home() {
  return (
    <div className="app-container">
      <Registro />
      <Calendario />
      <MisRegistros/>
    </div>
  );
}

export default Home;