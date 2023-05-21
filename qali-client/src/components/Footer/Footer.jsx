import img from "../../assets/Footerimg.png";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white text-gray-300 py-4 border-t-2 border-gray-400">
      <div className="container mx-auto text-center max-w-1200">
        <div className="flex flex-wrap">
          <div className="w-1/4 py-4">
            <h1 className="text-4xl font-bold inline-block woff2">
              Sobre Qalï Pro
            </h1>
            <ul>
              <li>
                <a
                  className="text-gray-500 hover:text-gray-800 text-2xl"
                  href="#"
                >
                  Quienes Somos
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-gray-800 text-2xl"
                  href="#"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-gray-800 text-2xl"
                  href="#"
                >
                  Empleos
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-gray-800 text-2xl"
                  href="#"
                >
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>

          <div className="w-1/4 py-4">
            <h1 className="text-4xl font-bold inline-block woff2">
              Para los Pacientes
            </h1>
            <ul>
              <li>
                <a
                  className="text-gray-500 hover:text-gray-800 text-2xl"
                  href="#"
                >
                  Especialistas
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-gray-800 text-2xl"
                  href="#"
                >
                  Enfermedades
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-gray-800 text-2xl"
                  href="#"
                >
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-gray-800 text-2xl"
                  href="#"
                >
                  Otros Servicios
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/4 py-4">
            <h1 className="text-4xl font-bold inline-block woff2">
              {" "}
              Para los Profesionales
            </h1>
            <ul>
              <li>
                <a
                  className="text-gray-500 hover:text-gray-800 text-2xl"
                  href="#"
                >
                  Planes
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-gray-800 text-2xl"
                  href="#"
                >
                  Condiciones
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-gray-800 text-2xl"
                  href="#"
                >
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>
          <div className=" w-1/4 py-4pl-0 inline-block">
            <img className="w-1/4 py-4pl-0 inline-block " src={img}></img>
            <h2 className="text-gray-500 text-2xl">Lima, Perú</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};
