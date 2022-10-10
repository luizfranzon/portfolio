import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { AboutMe } from "./pages/aboutMe";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Knowledge } from "./pages/Knowledge";

export function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<AboutMe />} />
                <Route path="/conhecimentos" element={<Knowledge />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
