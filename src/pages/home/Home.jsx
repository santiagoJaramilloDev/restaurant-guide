import React from "react";
import Slider from "react-slick"; // Crea la funcionalidad del carrusel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const people = [
  {
    nombre: "Noma",
    descripcion:
      "Noma es un restaurante danés dirigido por el chef René Redzepi en Copenhague, Dinamarca. Es conocido por su enfoque en la cocina nórdica.",
    categoria: "Nórdica",
    correo: "info@noma.dk",
    telefono: "+45 32 96 32 97",
    imageUrl:
      "../src/assets/images/noma.png",
  },
  {
    nombre: "Osteria Francescana",
    descripcion:
      "Osteria Francescana, ubicada en Módena, Italia, es un restaurante aclamado dirigido por el chef Massimo Bottura. Ofrece una experiencia culinaria única que combina la tradición italiana con técnicas modernas.",
    categoria: "Italiana",
    correo: "info@osteriafrancescana.it",
    telefono: "+39 059 223912",
    imageUrl:
      "../src/assets/images/osteria.png",
  },
  {
    nombre: "Eleven Madison Park",
    descripcion:
      "El restaurante ofrece una experiencia gastronómica excepcional con un enfoque en ingredientes locales y temporada, con platos creativos y elegantes.",
    categoria: "Americana",
    correo: "info@elevenmadisonpark.com",
    telefono: "+1 212-889-0905",
    imageUrl:
      "../src/assets/images/eleven.png",
  },
  {
    nombre: "El Celler de Can Roca",
    descripcion:
      "Con una cocina innovadora que combina técnicas modernas con influencias tradicionales, el restaurante ofrece una experiencia gastronómica única y emocionante.",
    categoria: "Mediterránea",
    correo: "info@cellercanroca.com",
    telefono: "+34 972 22 21 57",
    imageUrl:
      "../src/assets/images/el-celler.jpg",
  },
  {
    nombre: "Central",
    descripcion:
      "Es conocido por su enfoque en la cocina peruana de vanguardia, utilizando ingredientes de diferentes altitudes para crear platos únicos y sorprendentes.",
    categoria: "Peruana",
    correo: "info@centralrestaurante.com.pe",
    telefono: "+51 1 2428515",
    imageUrl:
      "../src/assets/images/central.png",
  },
  {
    nombre: "Mirazur",
    descripcion:
      "El restaurante ofrece una experiencia gastronómica excepcional con una mezcla de influencias francesas e italianas.",
    categoria: "Francesa",
    correo: "info@mirazur.fr",
    telefono: "+33 4 92 41 86 86",
    imageUrl:
      "../src/assets/images/mirazur.jpg",
  },
  {
    nombre: "Geranium",
    descripcion:
      "Ofrece una experiencia culinaria de alta gama con un enfoque en ingredientes locales y temporada, combinando técnicas clásicas con innovación.",
    categoria: "Nórdica",
    correo: "info@geranium.dk",
    telefono: "+45 69 96 00 20",
    imageUrl:
      "../src/assets/images/genarium.png",
  },
  {
    nombre: "Mugaritz",
    descripcion:
      "Es conocido por su enfoque en la cocina experimental, ofreciendo platos sorprendentes y emocionantes que desafían las convenciones culinarias.",
    categoria: "Vanguardista",
    correo: "info@mugaritz.com",
    telefono: "+34 943 52 24 55",
    imageUrl:
      "../src/assets/images/mugaritz.jpg",
  },
  {
    nombre: "Attica",
    descripcion:
      "Con un enfoque en los ingredientes locales y la cultura australiana, el restaurante ofrece una experiencia gastronómica única que refleja la diversidad y la creatividad del país.",
    categoria: "Australiana",
    correo: "info@attica.com.au",
    telefono: "+61 3 9530 0111",
    imageUrl:
      "../src/assets/images/attica.png",
  },
  {
    nombre: "Azurmendi",
    descripcion:
      "Con una filosofía centrada en la sostenibilidad y la innovación, el restaurante ofrece una experiencia gastronómica única en un entorno impresionante.",
    categoria: "Vanguardista",
    correo: "info@azurmendi.biz",
    telefono: "+34 944 55 88 66",
    imageUrl:
      "../src/assets/images/azumendi.jpg",
  },
  {
    nombre: "Alinea",
    descripcion:
      "Es conocido por su enfoque en la cocina molecular y la experiencia gastronómica multisensorial, que combina arte y ciencia en cada plato.",
    categoria: "Molecular",
    correo: "info@alinearestaurant.com",
    telefono: "+1 312-867-0110",
    imageUrl:
      "../src/assets/images/alinea.png",
  },
  {
    nombre: "Disfrutar",
    descripcion:
      "Con una cocina creativa y experimental, el restaurante ofrece una experiencia gastronómica divertida y emocionante.",
    categoria: "Creativa",
    correo: "info@disfrutarbarcelona.com",
    telefono: "+34 933 48 68 96",
    imageUrl:
      "../src/assets/images/disfrutar.jpg",
  },
];

export const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 2000,
    autoplay: true,
  };

  return (
    <>
      <div className="mx-auto max-w-2xl pb-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Guia de restaurantes
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            ¡Bienvenido a nuestra guía de restaurantes, donde cada plato es una
            experiencia y cada visita una aventura culinaria! Sumérgete en un
            mundo de sabores, aromas y texturas mientras exploras una amplia
            selección de restaurantes que deleitarán tu paladar y satisfarán tus
            antojos gastronómicos.
          </p>
        </div>
      </div>

      <div className="bg-white py-12 mb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Favoritos
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-10 max-w-2xl gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none"
          >
            <Slider {...settings}>
              {people.map((person) => (
                <li className="p-5" key={person.nombre}>
                  <img
                    className="aspect-[3/2] w-full rounded-2xl object-cover border border-slate-300"
                    src={person.imageUrl}
                    alt=""
                  />
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {person.nombre}
                  </h3>
                  <p className="text-base leading-7 text-gray-600">
                    {person.categoria}
                  </p>
                </li>
              ))}
            </Slider>
          </ul>
        </div>
      </div>
    </>
  );
};
