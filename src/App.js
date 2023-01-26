import BaseRoutes from "./Routing/routes";
import "./App.css";
import { SearchContextProvider } from "./Context/searchContext";
import { AuthContextProvider } from "./Context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <SearchContextProvider>
        <BaseRoutes />
      </SearchContextProvider>
    </AuthContextProvider>
  );
}

export default App;
