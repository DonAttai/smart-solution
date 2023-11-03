import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
function App() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="justify-self-end">
        <Outlet />
      </main>
      <Footer />
    </main>
  );
}

export default App;
