import { Presentation } from "./components/Presentation";
import { Projects } from "./components/Projects";
import "./Home.scss";

export function Home() {
    return (
        <>
            <section className="homeSection">
                <Presentation />
            </section>
            <div className="blueLine"></div>
            <section className="projectsSection">
                <Projects />
            </section>
        </>
    );
}
