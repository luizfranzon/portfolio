import { Presentation } from "./components/Presentation";
import { Projects } from "./components/Projects";

import "./Home.scss";

import blueCircle from "../../assets/blurCicle.svg";

export function Home() {
    return (
        <>
            <section className="homeSection">
                <img className="blueCircle noselect" alt="" src={blueCircle} />
                <Presentation />
            </section>
            <div className="blueLine"></div>
            <section className="projectsSection">
                <Projects />
            </section>
        </>
    );
}
