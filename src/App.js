import "./App.css";
import Protected from "./components/Protected";
import Public from "./components/Public";
import useAuth from "./hooks/useAuth";

function App() {
  const isLogin = useAuth();
  console.log(isLogin);
  return isLogin ? <Protected /> : <Public />;
}

export default App;
