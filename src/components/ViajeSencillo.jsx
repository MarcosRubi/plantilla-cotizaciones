/* eslint-disable react/prop-types */
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

import person from "../assets/person.png";
import personWithBag from "../assets/person-with-bag.png";
import bag from "../assets/bag.png";

function ViajeSencillo({ data }) {
  const {
    date,
    airline,
    optionsBag,
    optionsRestrictions,
    countBag,
    isCheckedAdult,
    isCheckedChild,
    origin,
    destination,
    departureTime,
    arrivalTime,
    priceAdult,
    priceChild,
  } = data;

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
          <span className="absolute top-[19rem] left-2 text-[1.25rem] font-bold ">
            {date}
          </span>
          <span className="absolute top-[20.5rem] left-2 text-[1.25rem] font-bold ">
            {origin} - {departureTime}
          </span>
        </div>

        <div>
          <span className="absolute top-[19rem] right-2 text-[1.25rem] font-bold ">
            {date}
          </span>
          <span className="absolute top-[20.5rem] right-2 text-[1.25rem] font-bold ">
            {destination} - {arrivalTime}
          </span>
        </div>

        <span className="absolute bottom-[3rem] left-14 text-[1.25rem] font-bold ">
          <ul className="text-sm leading-5">
            {optionsRestrictions.map((restriction, id) => (
              <li key={id}>*{restriction}</li>
            ))}
          </ul>
        </span>

        <div className="absolute bottom-[10rem] left-14 text-[1.1rem] font-bold">
          {isCheckedAdult && (
            <span className="block mb-5">
              Precio por <span className="underline">adulto</span>: <br />{" "}
              <span className="text-[1.25rem] text-green-600 ">
                ${priceAdult}
              </span>
            </span>
          )}
          {isCheckedChild && (
            <span className="block">
              Precio por <span className="underline">menor</span>: <br />{" "}
              <span className="text-[1.25rem] text-green-600 ">
                ${priceChild}
              </span>
            </span>
          )}
        </div>

        <div>
          <img
            src={
              optionsBag.length > 0 && optionsBag.includes("Maleta de mano")
                ? personWithBag
                : person
            }
            className="absolute bottom-0 right-[8rem] max-w-[8rem] "
            alt=""
          />
          {optionsBag.length > 0 && optionsBag.includes("Maleta de carga") ? (
            <>
              <img
                src={bag}
                alt=""
                className="absolute bottom-0 right-[4rem] max-w-[4.5rem] "
              />
              <span className="absolute bottom-12 right-[1.75rem] text-4xl font-bold">
                x{countBag}{" "}
              </span>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default ViajeSencillo;
