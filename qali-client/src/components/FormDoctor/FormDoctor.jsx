export const FormDoctor = () => {
  return (
    <div>
      <h1 className="bg-color1BlueNavbar text-4xl text-white font-bold inline-block woff2 rounded-lg">
        Registrarme como
      </h1>

      <form action="#" className="mt-8 grid grid-cols-3 gap-6">
        {/* Columna 1 */}
        <div>
          <div className="bg-color2 rounded-lg border-gray-200 p-3 text-sm">
            <label
              htmlFor="especialidad"
              className="block text-m font-medium text-gray-700"
            >
              Especialidad
            </label>
            <input
              className="bg-color2 w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Especialidad"
              type="text"
              id="especialidad"
            />
          </div>
          <div className="bg-color2 rounded-lg border-gray-200 p-3 text-sm mt-4">
            <label
              htmlFor="Ciudad"
              className="block text-sm font-medium text-gray-700"
            >
              Ciudad
            </label>
            <input
              className="bg-color2 w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="nombre"
            />
          </div>
          <div className="bg-color2 rounded-lg border-gray-200 p-3 text-sm mt-4">
            <label
              htmlFor="grado"
              className="block text-sm font-medium text-gray-700"
            >
              Grado Académico
            </label>
            <input
              className="bg-color2 w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="grado"
            />
          </div>
        </div>

        {/* Columna 2 */}
        <div>
          <div className="bg-color2 rounded-lg border-gray-200 p-3 text-sm">
            <label
              htmlFor="input4"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre y Apellido
            </label>
            <input
              className="bg-color2 w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="input4"
            />
          </div>
          <div className="bg-color2 rounded-lg border-gray-200 p-3 text-sm mt-4">
            <label
              htmlFor="input5"
              className="block text-sm font-medium text-gray-700"
            >
              Input 5
            </label>
            <input
              className="bg-color2 w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="input5"
            />
          </div>
          <div className="bg-color2 rounded-lg border-gray-200 p-3 text-sm mt-4">
            <label
              htmlFor="input6"
              className="block text-sm font-medium text-gray-700"
            >
              Input 6
            </label>
            <input
              className="bg-color2 w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="input6"
            />
          </div>
        </div>

        {/* Columna 3 */}
        <div>
          <div className="bg-color2 rounded-lg border-gray-200 p-3 text-sm">
            <label
              htmlFor="input7"
              className="block text-sm font-medium text-gray-700"
            >
              Grado Académico
            </label>
            <input
              className="bg-color2 w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="input7"
            />
          </div>
          <div className="bg-color2 rounded-lg border-gray-200 p-3 text-sm mt-4">
            <label
              htmlFor="input8"
              className="block text-sm font-medium text-gray-700"
            >
              Input 8
            </label>
            <input
              className="bg-color2 w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="input8"
            />
          </div>
          <div className="bg-color2 rounded-lg border-gray-200 p-3 text-sm mt-4">
            <label
              htmlFor="input9"
              className="block text-sm font-medium text-gray-700"
            >
              Input 9
            </label>
            <input
              className="bg-color2 w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="input9"
            />
          </div>
        </div>

        {/* Botón de envío */}
        <div className="col-span-3">
          <button
            type="submit"
            className="w-20px rounded-lg bg-black px-5 py-3 font-medium text-white"
          >
            Finalizar
          </button>
        </div>
      </form>
    </div>
  );
};
