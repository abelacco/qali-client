import { Formik } from "formik";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

const FormDoctor = () => {
  return (
    <>
      <Navbar />
      <br></br>
      <h1 className="bg-qaliBlue text-4xl text-white font-bold inline-block woff2 rounded-r-full p-4">
        Registrarme como
      </h1>
      <Formik>
        <form>
          <div className="mt-6 space-y-6 p-4">
            <>
              <div className="flex items-center gap-x-3 font-bold">
                <input
                  id="push-especialista"
                  name="push-notifications"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="push-especialista"
                  className="block text-qaliLightGrey text-3xl leading-6 text-gray-400"
                >
                  Especialista
                </label>
              </div>
              <div className="flex items-center gap-x-3 font-bold">
                <input
                  id="push-centro"
                  name="push-notifications"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="push-centro"
                  className="block text-qaliLightGrey text-3xl leading-6 text-gray-400"
                >
                  Centro Médico (MPVII)
                </label>
              </div>
              <div className="flex items-center gap-x-3 font-bold">
                <input
                  id="push-paciente"
                  name="push-notifications"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="push-nothing"
                  className="block text-qaliLightGrey text-3xl leading-6 text-gray-400"
                >
                  Paciente
                </label>
              </div>
            </>
          </div>
          {/* diseño form */}
          <br></br>
          <div className="flex gap-2 p-2">
            <div className="sm:col-span-3">
              <label
                htmlFor="especialidad"
                className="block text-qaliLightGrey text-3xl leading-6 text-gray-400 p-4"
              >
                Especialidad
              </label>

              <Dropdown
                options=""
                onChange=""
                value=""
                placeholder="Van a ir lista de Especialidad"
                className="w-80"
                showClear
              />
            </div>
            <div className="flex gap-2">
              <div className="sm:col-span-3">
                <label className="block text-qaliLightGrey text-3xl leading-6 text-gray-400 p-4">
                  Nombre y Apellido
                </label>
                <Dropdown
                  options=""
                  onChange=""
                  value=""
                  placeholder="Van a ir lista de Especialidad"
                  className="w-80"
                  showClear
                />
              </div>
            </div>

            <div className="flex gap-2">
              <div className="sm:col-span-3">
                <label className="block text-qaliLightGrey text-3xl leading-6 text-gray-400 p-4">
                  Grado Académico
                </label>
                <Dropdown
                  options=""
                  onChange=""
                  value=""
                  placeholder="Van a ir lista de Especialidad"
                  className="w-80"
                  showClear
                />
              </div>
            </div>
          </div>
          <br></br>

          <div className="flex gap-2 p-2">
            <div className="sm:col-span-3">
              <label className="block text-qaliLightGrey text-3xl leading-6 text-gray-400 p-4">
                Ciudad
              </label>

              <Dropdown
                options=""
                onChange=""
                value=""
                placeholder="Van a ir lista de Especialidad"
                className="w-80"
                showClear
              />
            </div>
            <div className="flex gap-2">
              <div className="sm:col-span-3">
                <label className="block text-qaliLightGrey text-3xl leading-6 text-gray-400 p-4">
                  Teléfono Móvil
                </label>
                <Dropdown
                  options=""
                  onChange=""
                  value=""
                  placeholder="Van a ir lista de Especialidad"
                  className="w-80"
                  showClear
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="sm:col-span-3">
                <div className="block text-qaliLightGrey text-3xl leading-6 text-gray-400 p-7"></div>
                <Dropdown
                  options=""
                  onChange=""
                  value=""
                  placeholder="Van a ir lista de Especialidad"
                  className="w-80"
                  showClear
                />
              </div>
            </div>
          </div>

          <br></br>

          <div className="flex gap-2">
            <div className="sm:col-span-3">
              <label className="block text-qaliLightGrey text-3xl leading-6 text-gray-400 p-4">
                Correo
              </label>

              <Dropdown
                options=""
                onChange=""
                value=""
                placeholder="Van a ir lista de Especialidad"
                className="w-80"
                showClear
              />
            </div>
            <div className="flex gap-2">
              <div className="sm:col-span-3">
                <label className="block text-qaliLightGrey text-3xl leading-6 text-gray-400 p-4">
                  Contraseña
                </label>
                <Dropdown
                  options=""
                  onChange=""
                  value=""
                  placeholder="Van a ir lista de Especialidad"
                  className="w-80"
                  showClear
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="sm:col-span-3">
                <label className="block text-qaliLightGrey text-3xl leading-6 text-gray-400 p-4">
                  Num.Colegiatura
                </label>
                <Dropdown
                  options=""
                  onChange=""
                  value=""
                  placeholder="Van a ir lista de Especialidad"
                  className="w-80"
                  showClear
                />
              </div>
            </div>
          </div>

          <br></br>

          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 flex">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="especialidad"
                    className="block text-qaliLightGrey text-3xl leading-6 text-gray-400 p-4"
                  >
                    Especialidad
                  </label>
                  <div className="mt-2 p-4">
                    <select
                      id="especialidad"
                      name="especialidad"
                      autoComplete="especialidad-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Nutricionista</option>
                      <option>Psicologa</option>
                      <option>Otro</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="especialidad"
                    className="block text-qaliLightGrey text-3xl leading-6 text-gray-400 p-4"
                  >
                    Nombre y Apellido
                  </label>
                  <div className="mt-2 p-4">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="especialidad"
                    className="block text-qaliLightGrey text-3xl leading-6 text-gray-400 p-4"
                  >
                    Grado Académico
                  </label>

                  <div className="mt-2 p-4">
                    <input
                      type="text"
                      name="grado"
                      id="grado"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3 p-4">
                  <label
                    htmlFor="ciudad"
                    className="block text-qaliLightGrey text-3xl leading-6 text-gray-400"
                  >
                    Ciudad
                  </label>
                  <div className="mt-2">
                    <select
                      id="ciudad"
                      name="ciudad"
                      autoComplete="ciudad"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Lima</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3 p-4">
                  <label
                    htmlFor="telefono"
                    className="block text-qaliLightGrey text-3xl leading-6 text-gray-400 p-4"
                  >
                    Teléfono Móvil
                  </label>
                  <div className="mt-2 flex">
                    <select
                      id="telefono"
                      name="telefono"
                      autoComplete="telefono-name"
                      className="w-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2"
                    >
                      <option>+51</option>
                      <option>+54</option>
                    </select>
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="ml-2 flex-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="especialidad"
                    className="block text-qaliLightGrey text-3xl leading-6 text-gray-400 p-4"
                  >
                    Correo
                  </label>
                  <div className="mt-2 p-4">
                    <input //ver input del type del mail
                      id="mail"
                      type="text"
                      name="mail"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    ></input>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="especialidad"
                    className="block text-qaliLightGrey text-3xl leading-6 text-gray-400 p-4"
                  >
                    Contraseña
                  </label>
                  <div className="mt-2">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="especialidad"
                    className="block text-qaliLightGrey text-3xl leading-6 text-gray-400 p-4"
                  >
                    Num. Colegiatura
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="colegiatura"
                      id="cole"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:col-span-3 sm:col-start-1">
              <h1 className="text-qaliLightGrey text-3xl leading-6 text-gray-400 p-4">
                Escanear Diploma o Certificado
              </h1>
              <div className="flex gap-2">
                <Button
                  label="Buscar"
                  size="small"
                  className=" border-none bg-qaliGreen ml-4"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-6 p-4">
            <>
              <div className="flex items-center gap-x-3 font-bold">
                <input
                  id="push-especialista"
                  name="push-notifications"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="push-especialista"
                  className="block text-qaliLightGrey text-3xl leading-6 text-gray-400"
                >
                  Acepto los T&C del servicio de Qalï
                </label>
              </div>
              <div className="flex items-center gap-x-3 font-bold">
                <input
                  id="push-centro"
                  name="push-notifications"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="push-centro"
                  className="block text-qaliLightGrey text-3xl leading-6 text-gray-400"
                >
                  Acepto recibir información de Qalï
                </label>
              </div>
              <div className="flex gap-2">
                <Button
                  label="Finalizar"
                  type="submmit"
                  size="small"
                  className=" border-none bg-qaliGreen ml-auto"
                />
              </div>
            </>
          </div>
        </form>
      </Formik>

      <Footer />
    </>
  );
};

export default FormDoctor;

//"Toaster"
