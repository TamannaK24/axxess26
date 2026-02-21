import { createBrowserRouter } from "react-router";
import Home from "./components/Home";
import RecordVisit from "./components/RecordVisit";
import Analysis from "./components/Analysis";
import FeatureList from "./components/features/FeatureList";
import Feature1 from "./components/features/Feature1";
import Feature2 from "./components/features/Feature2";
import Feature3 from "./components/features/Feature3";
import Feature4 from "./components/features/Feature4";
import Feature5 from "./components/features/Feature5";
import Feature6 from "./components/features/Feature6";
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
    path: "/feature2",
    Component: Feature2,
  },
  {
    path: "/feature3",
    Component: Feature3,
  },
  {
    path: "/feature4",
    Component: Feature4,
  },
  {
    path: "/feature5",
    Component: Feature5,
  },
  {
    path: "/feature6",
    Component: Feature6,
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