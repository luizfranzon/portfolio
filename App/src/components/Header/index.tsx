import logoMobile from "../../assets/mobile/logoMobile.svg";

export function Header() {
    return (
        <header className="bg-[#080C14] flex items-center justify-center py-5">
            <img src={logoMobile} alt="Logo do site escrito luizfranzon.dev"/>
        </header>
    );
}
