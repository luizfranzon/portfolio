import { CaretDoubleRight } from "phosphor-react";

import handEmoji from "../../../../assets/handEmoji.svg";
import codingImage from "../../../../assets/homeCodingImage.png";
import linkedinIcon from "../../../../assets/linkedinIcon.svg";
import githubIcon from "../../../../assets/githubIcon.svg";

import "./Presentation.scss";

export function Presentation() {
    return (
        <section className="presentation">
            <div className="home-left">
                <span>
                    Olá! <img src={handEmoji} alt="" />
                </span>
                <span>Meu nome é:</span>
                <h1>Luiz Fernando.</h1>
                <h2>Desenvolvedor Front-end|</h2>
                <div className="button-box">
                    <button onClick={() => (window.location.href = "")}>
                        Projetos <CaretDoubleRight size={52} weight="bold" />
                    </button>
                    <button
                        onClick={() =>
                            (window.location.href =
                                "https://www.linkedin.com/in/luizffranzon/")
                        }
                    >
                        <img src={linkedinIcon} alt="" />
                    </button>
                    <button
                        onClick={() =>
                            (window.location.href =
                                "https://github.com/luizfranzon")
                        }
                    >
                        <img src={githubIcon} alt="" />
                    </button>
                </div>
            </div>
            <img src={codingImage} alt="" />
        </section>
    );
}
