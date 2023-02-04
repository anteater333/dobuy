import logo from "./logo.svg";
import logoGql from "./logo-gql.svg";
import MainScreen from "./screens/MainScreen";
import { QueryClient, QueryClientProvider } from "react-query";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logoGql} className="App-logo" alt="logoGql" />
        </header>
        <div className="App-body">
          <MainScreen />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
