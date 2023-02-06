import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single"
import Write from "./pages/write/Write"
import {BrowserRouter,Route,Routes} from 'react-router-dom'



function App() {
  const currentUser = true


  return (
    
    <BrowserRouter>
    <TopBar />
    <Routes>
    
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/posts' element={<Home/>}/>
    <Route exact path='/register' element={currentUser ? <Home /> : <Register />}/>
    <Route exact path='/login' element={currentUser ? <Home /> : <Login />}/>
    <Route exact path='/write' element={currentUser ? <Write /> : <Login/>}/>
    <Route exact path='/settings' element={currentUser ? <Settings /> : <Login />}/>

    <Route exact path='/post/:postId' element={<Single/>}/>

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
