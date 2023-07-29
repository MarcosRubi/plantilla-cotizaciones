import bgCotizacion from "../assets/bg-cotizacion-sencilla.png";
import aviancaLogo from "../assets/avianca.svg";
import americanAirlinesLogo from "../assets/american-airlines.svg";
import deltaLogo from "../assets/delta.svg";
import volarisLogo from "../assets/volaris.svg";
import united from "../assets/united.svg";
import frontier from "../assets/frontier.svg";
import iberia from "../assets/iberia.svg";
import iberojet from "../assets/iberojet.svg";
import jetblue from "../assets/jetblue.svg";
import southwest from "../assets/southwest.svg";
import spirit from "../assets/spirit.svg";

function ViajeSencillo({ data }) {
    const { date, airline, optionsBag, optionsRestrictions, countBag, isCheckedAdult, isCheckedChild, origin, destination } = data;
    return (
        <>
            <div
                className="border-2 relative bg-black w-[600px] h-[800px]  bg-no-repeat"
                id="image"
                style={{
                    backgroundImage: `url(${bgCotizacion})`,
                }}
            >
                {airline === "av" && (
                    <img
                        src={aviancaLogo}
                        className="w-[7rem] absolute top-[12.75rem] left-[2.2rem] rotate-[45deg]"
                    />
                )}
                {airline === "de" && (
                    <img
                        src={deltaLogo}
                        className="w-[7rem] absolute top-[12.75rem] left-[2rem] rotate-[47deg]"
                    />
                )}
                {airline === "aa" && (
                    <img
                        src={americanAirlinesLogo}
                        className="w-[10rem] absolute top-[10.25rem] left-[.8rem] rotate-[46deg]"
                    />
                )}
                {airline === "vo" && (
                    <img
                        src={volarisLogo}
                        className="w-[10rem] absolute top-[10rem] left-[1rem] rotate-[47deg]"
                    />
                )}
                {airline === "un" && (
                    <img
                        src={united}
                        className="w-[7rem] absolute top-[12.75rem] left-[2rem] rotate-[45deg]"
                    />
                )}
                {airline === "fr" && (
                    <img
                        src={frontier}
                        className="w-[7rem] absolute top-[12.75rem] left-[2rem] rotate-[45deg]"
                    />
                )}
                {airline === "ib" && (
                    <img
                        src={iberia}
                        className="w-[7rem] absolute top-[13rem] left-[2rem] rotate-[45deg]"
                    />
                )}
                {airline === "ibj" && (
                    <img
                        src={iberojet}
                        className="w-[7rem] absolute top-[12rem] left-[2rem] rotate-[45deg]"
                    />
                )}
                {airline === "jb" && (
                    <img
                        src={jetblue}
                        className="w-[5rem] absolute top-[12.75rem] left-[3.4rem] rotate-[45deg]"
                    />
                )}
                {airline === "sw" && (
                    <img
                        src={southwest}
                        className="w-[7rem] absolute top-[12.75rem] left-[2rem] rotate-[45deg]"
                    />
                )}
                {airline === "sp" && (
                    <img
                        src={spirit}
                        className="w-[6rem] absolute top-[12.75rem] left-[2.5rem] rotate-[45deg]"
                    />
                )}

                <div className="">
                    <span className="absolute top-[18rem] left-8 text-[1.25rem] font-bold ">{date}</span>
                    <span className="absolute top-[20rem] left-9 text-[1.25rem] font-bold ">{origin} - {destination} </span>
                </div>
            </div>

        </>

    )
}

export default ViajeSencillo