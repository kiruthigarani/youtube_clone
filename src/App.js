import "./App.css";
import HeadComponent from "./components/HeadComponent";
import BodyComponent from "./components/BodyComponent";
import { Provider } from "react-redux";
import toggleStore from "./utils/toggleStore";
import MainComponent from "./components/MainComponent";
import WatchComponent from "./components/WatchComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
 const routes = createBrowserRouter([
    {
      path: "/",
      element: <BodyComponent />,
      children: [
        {
          path: "/",
          element: <MainComponent />,
        },
        {
          path: "/watch",
          element: <WatchComponent />
        },
      ],
    },
  ]);
function App() {
 
  return (
    <Provider store={toggleStore}>
      <div className="App">
        <HeadComponent />
        <RouterProvider router={routes} />
      </div>
    </Provider>
  );
}

export default App;
