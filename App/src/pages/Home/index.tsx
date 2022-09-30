import { Header } from "../../components/Header";

import emojiHand from "../../assets/emojiHand.svg"

export function Home() {
    return(
        <>
            <section className="bg-[#080C14] h-[80vh]">
                <Header/>
                <div className="flex flex-col">
                    <div>
                        <span className="text-white">Olá!</span>
                        <img src={emojiHand} alt="" />
                    </div>
                    <span className="text-white">Meu nome é:</span>
                    <span className="text-white">Luiz Fernando.</span>
                    <span className="text-white">Desenvolvedior Front-end.</span>
                </div>

            </section>
        </>
    )
}
