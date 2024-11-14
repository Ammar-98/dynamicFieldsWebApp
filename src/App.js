import logo from "./logo.svg";
import "./App.css";
import RouterComponent from "./AppRouter/RouterComponent.tsx";
import AppState from "./AppContext/Appstate";
// import RouterComponent from "./AppRouter/RouterComponent";

function App() {
  return (
  <AppState>
<RouterComponent />
</AppState>
  )
}

export default App;
