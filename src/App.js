import BaseRoutes from "./Routing/routes";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/Store/Store";

function App() {
  return (
    <Provider store={store}>
      <BaseRoutes />
    </Provider>
  );
}

export default App;
