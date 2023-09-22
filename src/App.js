import {Component} from "react"
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import Contact from './Pages/contact'
import About from './Pages/about'
class App extends Component{
    render(){
        return(
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        )
    }
}
export default App;