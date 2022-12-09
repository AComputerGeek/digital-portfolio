// @author: Amir Armion
// @version: V.01

import "./App.css";
import CreateCard from "./CreateCard";
import CardShowcase from "./CardShowcase";
import { Router, Outlet, ReactLocation } from "react-location";

const location = new ReactLocation();

export default function App() 
{
  const routes = [
    {
      path: "/",
      element: <CreateCard />
    },
    {
      path: "/showcase",
      element: <CardShowcase />
    }
  ];

  return (
    <Router routes={routes} location={location}>
      <Outlet />
    </Router>
  );
}
