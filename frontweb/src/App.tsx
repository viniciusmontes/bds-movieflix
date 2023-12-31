import "assets/styles/custom.scss";
import Routes from "./Routes";
import { AuthContext, AuthContextData } from "AuthContext";
import { useState } from "react";

import "./App.css";

const App = () => {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <Routes />
    </AuthContext.Provider>
  );
}

export default App;
