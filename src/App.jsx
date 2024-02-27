import "./App.css";
import { useRoutes, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/home/Home";
import { List } from "./pages/List/List";
import { Details } from "./pages/details/Details";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/restautantes", element: <List /> },
    // { path: "/restautantes/detalle", element: <Details /> },
  ]);

  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-full">
        <div className="bg-gray-800">
          <Navbar />
        </div>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" style={{ paddingTop: "64px" }}>
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
