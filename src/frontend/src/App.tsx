import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ExercisePage from "./pages/ExercisePage";
import FoodPage from "./pages/FoodPage";
import HomePage from "./pages/HomePage";
import MentalPage from "./pages/MentalPage";
import RoutinePage from "./pages/RoutinePage";

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const foodRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/food",
  component: FoodPage,
});

const exerciseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/exercise",
  component: ExercisePage,
});

const mentalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/mental",
  component: MentalPage,
});

const routineRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/routine",
  component: RoutinePage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  foodRoute,
  exerciseRoute,
  mentalRoute,
  routineRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
