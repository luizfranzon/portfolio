import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages---------------
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Knowledge } from "./pages/Knowledge";
import { Contact } from "./pages/Contact";
//--------------------

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<About/>}/>
                <Route path="/conhecimentos" element={<Knowledge/>}/>
                <Route path="/contato" element={<Contact/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}
