import {
  Routes,

  Route
} from "react-router-dom";
import SignUp from './component/signUp/signUp';
import SignIn from './component/signIn/signIn';
import Home from "./component/home/home";

function App() {
  return (
    <Routes>

    <Route exact path='/home' element={<Home />} />
    <Route path='/signUp' element={<SignUp />} />
    <Route  path='/' element={<SignIn />} />
    </Routes>
  );
}

export default App;
