import { createBrowserRouter } from "react-router";
import Home from "./components/Home";
import RecordVisit from "./components/RecordVisit";
import Analysis from "./components/Analysis";
import FeatureList from "./components/features/FeatureList";
import Feature1 from "./components/features/Feature1";
import Feature3 from "./components/features/Feature3";
import Feature7 from "./components/features/Feature7";
import Feature8 from "./components/features/Feature8";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/record",
    Component: RecordVisit,
  },
  {
    path: "/analysis",
    Component: Analysis,
  },
  {
    path: "/features",
    Component: FeatureList,
  },
  {
    path: "/feature1",
    Component: Feature1,
  },
  {
    path: "/feature3",
    Component: Feature3,
  },
  {
    path: "/feature7",
    Component: Feature7,
  },
  {
    path: "/feature8",
    Component: Feature8,
  },
]);