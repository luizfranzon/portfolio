import { useRef, useEffect } from "react";
import Typed from "typed.js";

import { CaretDoubleRight } from "phosphor-react";

import handEmoji from "../../../../assets/handEmoji.svg";
import codingImage from "../../../../assets/homeCodingImage.png";
import linkedinIcon from "../../../../assets/linkedinIcon.svg";
import githubIcon from "../../../../assets/githubIcon.svg";

import "./Presentation.scss";

export function Presentation() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current!, {
            strings: ["Desenvolvedor Front-end."],
            startDelay: 800,
            typeSpeed: 80,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="presentation">
            <div className="home-left">
                <span>
                    Olá! <img src={handEmoji} alt="" />
                </span>
                <span>Meu nome é:</span>
                <h1>Luiz Fernando.</h1>
                <div className="typingText">
                    <h2 ref={el}>Desenvolvedor Front-end</h2>
                </div>
                <div className="button-box">
                    <button
                        onClick={() => (window.location.href = "#projects")}
                    >
                        Projetos <CaretDoubleRight size={52} weight="bold" />
                    </button>
                    <button
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/luizffranzon/",
                                "_blank"
                            )
                        }
                    >
                        <img src={linkedinIcon} alt="" />
                    </button>
                    <button
                        onClick={() =>
                            window.open(
                                "https://github.com/luizfranzon",
                                "_blank"
                            )
                        }
                    >
                        <img src={githubIcon} alt="" />
                    </button>
                </div>
            </div>
            <img src={codingImage} alt="" />
        </div>
    );
}
