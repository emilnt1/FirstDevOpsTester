import './App.css';
import {Routes, Route} from "react-router-dom";
import {AppBar, Toolbar, Typography} from "@mui/material";
import {giraffeStore} from "./stores/GiraffeStore";

function App() {
  return (
    <div>
        <Header/>
        <div><Typography>This is a tester</Typography></div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/giraffe" element={<Giraffes/>}/>
        </Routes>
    </div>
  );
}

 const About = () => {
     return <div>
         <h1>Hi</h1>
     </div>
 }

 const Home= () => {
        return <div>
            <h1>Home</h1>
        </div>
 }

const Giraffes= () => {
    return <div>
        <Typography>Girafliste</Typography>
        <ul>
            {giraffeStore.giraffes.map((giraffeName,key)=>
                <li key={key}>{giraffeName}</li>
            )}
        </ul>
    </div>
}
 const Header = () => {
     return (
         <AppBar position="static">
             <Toolbar>
                 <Typography variant="h4">
                     Navbar
                 </Typography>
             </Toolbar>
         </AppBar>
     )
}

export default App;
