import React, { useState } from "react";
import { MapPinIcon } from "@heroicons/react/20/solid";

const data = [
  {
    nombre: "Noma",
    descripcion:
      "Noma es un restaurante danés dirigido por el chef René Redzepi en Copenhague, Dinamarca. Es conocido por su enfoque en la cocina nórdica.",
    categoria: "Nórdica",
    correo: "info@noma.dk",
    telefono: "+45 32 96 32 97",
    imageUrl: "../src/assets/images/noma.png",
    webside: "https://noma.dk/",
    ubicacion:
      "https://www.google.com/maps/place/Noma/@22.2087798,-76.3792511,3z/data=!4m10!1m2!2m1!1snoma+restaurant!3m6!1s0x4652533b679080a5:0x42eaecc5eb37e114!8m2!3d55.6828273!4d12.6104808!15sCg9ub21hIHJlc3RhdXJhbnRaESIPbm9tYSByZXN0YXVyYW50kgEXc2NhbmRpbmF2aWFuX3Jlc3RhdXJhbnTgAQA!16s%2Fm%2F02qsmm3?hl=es-419&entry=ttu",
  },
  {
    nombre: "Osteria Francescana",
    descripcion:
      "Osteria Francescana, ubicada en Módena, Italia, es un restaurante aclamado dirigido por el chef Massimo Bottura. Ofrece una experiencia culinaria única que combina la tradición italiana con técnicas modernas.",
    categoria: "Italiana",
    correo: "info@osteriafrancescana.it",
    telefono: "+39 059 223912",
    imageUrl: "../src/assets/images/osteria.png",
    webside: "https://osteriafrancescana.it/",
    ubicacion:
      "https://www.google.com/maps/place/Osteria+Francescana/@44.6448302,10.918998,17z/data=!3m1!4b1!4m6!3m5!1s0x477fef12d42cf17f:0x19607398f8f8e95d!8m2!3d44.6448264!4d10.9215729!16s%2Fm%2F05zrj5x?hl=es-419&entry=ttu",
  },
  {
    nombre: "Eleven Madison Park",
    descripcion:
      "El restaurante ofrece una experiencia gastronómica excepcional con un enfoque en ingredientes locales y temporada, con platos creativos y elegantes.",
    categoria: "Americana",
    correo: "info@elevenmadisonpark.com",
    telefono: "+1 212-889-0905",
    imageUrl: "../src/assets/images/eleven.png",
    webside: "https://www.elevenmadisonpark.com/",
    ubicacion:
      "https://www.google.com/maps/place/Eleven+Madison+Park/@40.7416559,-73.9898102,17z/data=!3m2!4b1!5s0x89c259970f0b20bf:0xf77815186e02582d!4m6!3m5!1s0x89c259a6cfd76611:0x5654dfd3ae8aa92c!8m2!3d40.7416519!4d-73.9872353!16s%2Fm%2F0h5697k?hl=es-419&entry=ttu",
  },
  {
    nombre: "El Celler de Can Roca",
    descripcion:
      "Con una cocina innovadora que combina técnicas modernas con influencias tradicionales, el restaurante ofrece una experiencia gastronómica única y emocionante.",
    categoria: "Mediterránea",
    correo: "info@cellercanroca.com",
    telefono: "+34 972 22 21 57",
    imageUrl: "../src/assets/images/el-celler.jpg",
    webside: "https://cellercanroca.com/",
    ubicacion:
      "https://www.google.com/maps/place/El+Celler+de+Can+Roca/@41.9933678,2.805075,17z/data=!3m1!4b1!4m6!3m5!1s0x12bae711df335e93:0x27068e002439c4fa!8m2!3d41.9933638!4d2.8076499!16s%2Fm%2F02676r8?hl=es-419&entry=ttu",
  },
  {
    nombre: "Central",
    descripcion:
      "Es conocido por su enfoque en la cocina peruana de vanguardia, utilizando ingredientes de diferentes altitudes para crear platos únicos y sorprendentes.",
    categoria: "Peruana",
    correo: "info@centralrestaurante.com.pe",
    telefono: "+51 1 2428515",
    imageUrl: "../src/assets/images/central.png",
    webside: "https://centralrestaurante.com.pe/default.html",
    ubicacion:
      "https://www.google.com/maps/place/Central+Restaurante/@-12.152643,-77.0250328,17z/data=!3m1!4b1!4m6!3m5!1s0x9105b7e1872d5bd3:0x5f5d8fa5bbdab11c!8m2!3d-12.1526483!4d-77.0224579!16s%2Fm%2F0vztjbj?hl=es-419&entry=ttu",
  },
  {
    nombre: "Mirazur",
    descripcion:
      "El restaurante ofrece una experiencia gastronómica excepcional con una mezcla de influencias francesas e italianas.",
    categoria: "Francesa",
    correo: "info@mirazur.fr",
    telefono: "+33 4 92 41 86 86",
    imageUrl: "../src/assets/images/mirazur.jpg",
    webside: "https://www.mirazur.fr/",
    ubicacion:
      "https://www.google.com/maps/place/Mirazur/@43.7858424,7.5233013,17z/data=!3m2!4b1!5s0x12cdec097a275955:0xe33314d37d9e9a99!4m6!3m5!1s0x12cdec097ad9c09b:0x970320ed1eeb6f98!8m2!3d43.7858386!4d7.5279147!16s%2Fm%2F05zmk5c?hl=es-419&entry=ttu",
  },
  {
    nombre: "Geranium",
    descripcion:
      "Ofrece una experiencia culinaria de alta gama con un enfoque en ingredientes locales y temporada, combinando técnicas clásicas con innovación.",
    categoria: "Nórdica",
    correo: "info@geranium.dk",
    telefono: "+45 69 96 00 20",
    imageUrl: "../src/assets/images/genarium.png",
    webside: "https://www.geranium.dk/en/",
    ubicacion:
      "https://www.google.com/maps/place/Geranium/@55.703751,12.5696164,17z/data=!3m1!4b1!4m6!3m5!1s0x465252f9c1210b01:0xb5b7c890c2f8d717!8m2!3d55.703748!4d12.5721913!16s%2Fg%2F1ym_l7kff?hl=es-419&entry=ttu",
  },
  {
    nombre: "Mugaritz",
    descripcion:
      "Es conocido por su enfoque en la cocina experimental, ofreciendo platos sorprendentes y emocionantes que desafían las convenciones culinarias.",
    categoria: "Vanguardista",
    correo: "info@mugaritz.com",
    telefono: "+34 943 52 24 55",
    imageUrl: "../src/assets/images/mugaritz.jpg",
    webside: "https://www.mugaritz.com/",
    ubicacion:
      "https://www.google.com/maps/place/Restaurante+Mugaritz/@43.2724083,-1.9197867,17z/data=!3m1!4b1!4m6!3m5!1s0xd51aed6fee3b2ad:0x5f789cf1f1ab27a4!8m2!3d43.2724044!4d-1.9172118!16s%2Fm%2F02qsl94?hl=es-419&entry=ttu",
  },
  {
    nombre: "Attica",
    descripcion:
      "Con un enfoque en los ingredientes locales y la cultura australiana, el restaurante ofrece una experiencia gastronómica única que refleja la diversidad y la creatividad del país.",
    categoria: "Australiana",
    correo: "info@attica.com.au",
    telefono: "+61 3 9530 0111",
    imageUrl: "../src/assets/images/attica.png",
    webside: "https://www.attica.com.au/",
    ubicacion:
      "https://www.google.com/maps/place/Attica/@-37.8770051,144.9947342,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad642c9b85be4dd:0x4f47aed1d1ece186!8m2!3d-37.8770094!4d144.9973091!16s%2Fg%2F11bzsqm_x5?hl=es-419&entry=ttu",
  },
  {
    nombre: "Azurmendi",
    descripcion:
      "Con una filosofía centrada en la sostenibilidad y la innovación, el restaurante ofrece una experiencia gastronómica única en un entorno impresionante.",
    categoria: "Vanguardista",
    correo: "info@azurmendi.biz",
    telefono: "+34 944 55 88 66",
    imageUrl: "../src/assets/images/azumendi.jpg",
    webside: "https://azurmendi.restaurant/",
    ubicacion:
      "https://www.google.com/maps/place/Restaurante+Azurmendi/@43.2605608,-2.8186047,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e4854720ee109:0x909b2223a4c812fe!8m2!3d43.2605569!4d-2.8160298!16s%2Fg%2F1tfqh3dp?hl=es-419&entry=ttu",
  },
  {
    nombre: "Alinea",
    descripcion:
      "Es conocido por su enfoque en la cocina molecular y la experiencia gastronómica multisensorial, que combina arte y ciencia en cada plato.",
    categoria: "Molecular",
    correo: "info@alinearestaurant.com",
    telefono: "+1 312-867-0110",
    imageUrl: "../src/assets/images/alinea.png",
    webside: "https://www.alinearestaurant.com/",
    ubicacion:
      "https://www.google.com/maps/place/Alinea/@41.913439,-87.6506301,17z/data=!3m1!4b1!4m6!3m5!1s0x880fd322d33a22bb:0xed1db5da10d6043b!8m2!3d41.913435!4d-87.6480552!16s%2Fm%2F0275b31?hl=es-419&entry=ttu",
  },
  {
    nombre: "Disfrutar",
    descripcion:
      "Con una cocina creativa y experimental, el restaurante ofrece una experiencia gastronómica divertida y emocionante.",
    categoria: "Creativa",
    correo: "info@disfrutarbarcelona.com",
    telefono: "+34 933 48 68 96",
    imageUrl: "../src/assets/images/disfrutar.jpg",
    webside: "https://www.disfrutarbarcelona.com/",
    ubicacion:
      "https://www.google.com/maps/place/Disfrutar/@41.3877666,2.1485856,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a285bbc62c4d:0xcd8a70d67beb3993!8m2!3d41.3877627!4d2.153199!16s%2Fg%2F11b6p9j0sw?hl=es-419&entry=ttu",
  },
];

export const List = () => {
  const [restaurantes, setRestaurantes] = useState(data);
  const [filtro, setFiltro] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();
    const valorInput = event.target.value;
    setFiltro(valorInput);
    if (valorInput === "") {
      setRestaurantes(data);
    } else {
      const listaFiltrada = data.filter((restaurante) =>
        restaurante.nombre.toLowerCase().includes(valorInput.toLowerCase())
      );
      setRestaurantes(listaFiltrada);
    }
  };

  return (
    <>
      <div className="bg-white shadow sm:rounded-lg mb-6">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Busca tu restaurante favorito
          </h3>
          <div className="mt-5 sm:flex sm:items-center">
            <div className="w-full sm:max-w-xs">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="text"
                value={filtro}
                onChange={handleInputChange}
                name="text"
                id="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Donde quieres cenar hoy?"
              />
            </div>
          </div>
        </div>
      </div>

      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-16"
      >
        {restaurantes.map((restaurant) => (
          <li
            key={restaurant.correo}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow px-10"
          >
            <a href={restaurant.webside} target="_blank" rel="noopener noreferrer" className="flex flex-1 flex-col py-8" >
              <img
                className="mx-auto h-32 w-32 flex-shrink-0"
                src={restaurant.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-sm font-medium text-gray-900">
                {restaurant.nombre}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-gray-500">
                  {restaurant.descripcion}
                </dd>
                <dt className="sr-only">Role</dt>
                <div>
                  <dd className="mt-3">
                    <span className="inline-flex items-center bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      {restaurant.correo}
                    </span>
                  </dd>
                  <dd className="mt-3">
                    <span className="inline-flex items-center bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      {restaurant.telefono}
                    </span>
                  </dd>
                </div>
              </dl>
            </a>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <a
                    href={restaurant.ubicacion}
                    target="_blank"
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <MapPinIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    Ubicación
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
