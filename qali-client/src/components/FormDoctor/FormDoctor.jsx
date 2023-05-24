import { useFormik } from "formik";
import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Dialog } from "primereact/dialog";
import { classNames } from "primereact/utils";
import { CITIES, SPECIALTIES, PREFIJO } from "../../utils/constantes";

const FormDoctor = () => {
  const [formData, setFormData] = useState({});
  console.log(formData);
  const [showMessage, setShowMessage] = useState(false);
  console.log(showMessage);

  /*   useEffect(() => {
    .get().then(data => set(data));
}, []); 
 */
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      especialidad: null,
      ciudad: null,
      prefijo: null,
      grado: "",
      colegiatura: "",
      accept: false,
    },
    validate: (data) => {
      let errors = {};

      if (!data.name) {
        errors.name = "Nombres requeridos.";
      }

      if (!data.email) {
        errors.email = "El correo es requerido.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email =
          "Dirección de correo electrónico no válida. P.ej. ejemplo@email.com";
      }

      if (!data.password) {
        errors.password = "Contraseña es requerida.";
      }

      if (!data.especialidad) {
        errors.especialidad = "Especialidad es requerida.";
      }
      if (!data.grado) {
        errors.grado = "Grado Académico es requerido.";
      }
      if (!data.ciudad) {
        errors.ciudad = "Ciudad es requerida";
      }

      if (!data.accept) {
        errors.accept = "Tienes que aceptar los términos y condiciones.";
      }

      return errors;
    },
    onSubmit: (data) => {
      setFormData(data);
      setShowMessage(true);

      formik.resetForm();
    },
  });

  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );

  const passwordHeader = <h6>Elige una Contraseña</h6>;
  const passwordFooter = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">Sugerencias</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>Al menos una minúscula</li>
        <li>Al menos una mayúscula</li>
        <li>Al menos un número</li>
        <li>Mínimo 8 caracteres</li>
      </ul>
    </React.Fragment>
  );

  return (
    <>
      <Navbar />
      <br></br>
      <h1 className="bg-qaliBlue text-4xl text-white font-bold inline-block woff2 rounded-r-full p-4">
        Registrarme como
      </h1>
      <div className="min-w-[450px]">
        <Dialog
          visible={showMessage}
          onHide={() => setShowMessage(false)}
          position="top"
          footer={dialogFooter}
          showHeader={false}
          breakpoints={{ "960px": "80vw" }}
          style={{ width: "40vw" }}
        >
          <div className="flex align-items-center flex-column pt-6 px-3">
            <i
              className="pi pi-check-circle"
              style={{ fontSize: "5rem", color: "var(--green-500)" }}
            ></i>
            <h5>Registro exitoso!</h5>
            <p style={{ lineHeight: 3.5, textIndent: "3rem" }}>
              Su registro se ha Completado <b>{formData.name}</b>{" "}
              <b>{formData.email}</b> ;
            </p>
          </div>
        </Dialog>

        {/* diseño form */}
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-6 space-y-6 p-4">
            <>
              <div className="flex items-center gap-x-3 font-bold">
                <input
                  id="push-especialista"
                  name="push-especialista"
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
                  id="centro"
                  name="centro"
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

          <br></br>
          <div className="flex gap-2 p-2">
            <div className="sm:col-span-3">
              <label
                htmlFor="especialidad"
                className="block text-qaliLightGrey text-3xl leading-6 text-gray-600 p-4"
              >
                Especialidad
              </label>

              <Dropdown
                id="especialidad"
                name="especialidad"
                options={SPECIALTIES}
                onChange={formik.handleChange}
                value={formik.values.especialidad}
                placeholder="Especialidad"
                className="w-80"
              />
              {getFormErrorMessage("especialidad")}
            </div>
            <div className="flex gap-2">
              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className={classNames(
                    "block",
                    "text-qaliLightGrey",
                    "text-3xl",
                    "leading-6",
                    "text-gray-600",
                    "p-4",
                    { "p-error": isFormFieldValid("name") }
                  )}
                >
                  Nombre y Apellido
                </label>

                <InputText
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  placeholder="Nombres"
                  autoComplete="name"
                  className={classNames("w-80", {
                    "p-invalid": isFormFieldValid("name"),
                  })}
                />
                {getFormErrorMessage("name")}
              </div>
            </div>

            <div className="flex gap-2">
              <div className="sm:col-span-3">
                <label
                  htmlFor="grado"
                  className={classNames(
                    "block",
                    "text-qaliLightGrey",
                    "text-3xl",
                    "leading-6",
                    "text-gray-600",
                    "p-4",
                    { "p-error": isFormFieldValid("grado") }
                  )}
                >
                  Grado Académico
                </label>
                <InputText
                  id="grado"
                  name="grado"
                  onChange={formik.handleChange}
                  value={formik.values.grado}
                  placeholder="GA"
                  className={classNames("w-80", {
                    "p-invalid": isFormFieldValid("grado"),
                  })}
                />
                {getFormErrorMessage("grado")}
              </div>
            </div>
          </div>
          <br></br>

          <div className="flex gap-2 p-2">
            <div className="sm:col-span-3">
              <label className="block text-qaliLightGrey text-3xl leading-6 text-gray-600 p-4">
                Ciudad
              </label>

              <Dropdown
                id="ciudad"
                name="ciudad"
                options={CITIES}
                onChange={formik.handleChange}
                value={formik.values.ciudad}
                placeholder="Ciudad"
                className="w-80"
              />
            </div>
            <div className="flex gap-2">
              <div className="sm:col-span-3">
                <label className="block text-qaliLightGrey text-3xl leading-6 text-gray-600 p-4">
                  Teléfono Móvil
                </label>
                <Dropdown
                  id="prefijo"
                  name="prefijo"
                  options={PREFIJO}
                  onChange={formik.handleChange}
                  value={formik.values.prefijo}
                  placeholder="Cod-área"
                  className="w-40"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="sm:col-span-3">
                <div className="block text-qaliLightGrey text-3xl leading-6 text-gray-600 p-7">
                  <InputText
                    id="phone"
                    name="phone"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    placeholder="telefono"
                    className="w-80"
                  />
                </div>
              </div>
            </div>
          </div>
          <br></br>

          <div className="flex gap-2 p-2">
            <div className="sm:col-span-3">
              <label className="block text-qaliLightGrey text-3xl leading-6 text-gray-600 p-4">
                Correo
              </label>

              <InputText
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="e@mail.com"
                className="w-80"
              />
              {getFormErrorMessage("email")}
            </div>
            <div className="flex gap-2">
              <div className="sm:col-span-3">
                <label
                  htmlFor="password"
                  className={classNames(
                    "block",
                    "text-qaliLightGrey",
                    "text-3xl",
                    "leading-6",
                    "text-gray-600",
                    "p-4",
                    { "p-error": isFormFieldValid("password") }
                  )}
                >
                  Contraseña*
                </label>
                <Password
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  toggleMask
                  value={formik.values.password}
                  placeholder="***************"
                  className={classNames({
                    "p-invalid": isFormFieldValid("password"),
                  })}
                  header={passwordHeader}
                  footer={passwordFooter}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="sm:col-span-3">
                <label className="block text-qaliLightGrey text-3xl leading-6 text-gray-600 p-4">
                  Num.Colegiatura
                </label>
                <InputText
                  id="colegiatura"
                  name="colegiatura"
                  onChange={formik.handleChange}
                  value={formik.values.colegiatura}
                  placeholder="Num.Colegiatura"
                  className="w-80"
                />
              </div>
            </div>
          </div>

          <br></br>

          <div className="sm:col-span-3 sm:col-start-1">
            <h1 className="text-qaliLightGrey text-3xl leading-6 text-gray-600 p-4">
              Escanear Diploma o Certificado
            </h1>
            <div className="flex gap-2">
              <Button
                type="button"
                label="Buscar"
                size="small"
                className=" border-none bg-qaliGreen ml-4"
              />
            </div>
          </div>

          <div className="mt-6 space-y-6 p-4">
            <>
              <div className="flex items-center gap-x-3 font-bold">
                <Checkbox
                  name="accept"
                  inputId="accept"
                  checked={formik.values.accept}
                  onChange={formik.handleChange}
                  className={classNames({
                    "p-invalid": isFormFieldValid("accept"),
                  })}
                />
                <label
                  htmlFor="accept"
                  className={classNames(
                    "h-4 w-1 border-gray-300 text-indigo-600 focus:ring-indigo-600",
                    { "p-error": isFormFieldValid("accept") }
                  )}
                />
                <label className="block text-qaliLightGrey text-3xl leading-6 text-gray-400">
                  Acepto los T&C del servicio de Qalï
                </label>
              </div>
              <div className="flex items-center gap-x-3 font-bold">
                <input
                  id="push-centro"
                  name="push-centro"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-400"
                />
                <label
                  htmlFor="push-centro"
                  className="block text-qaliLightGrey text-3xl leading-6 text-gray-400"
                >
                  Acepto recibir información de Qalï
                </label>
              </div>
            </>
          </div>

          <div className="flex gap-2">
            <Button
              label="Finalizar"
              type="submit"
              size="small"
              className=" border-none bg-qaliGreen ml-auto"
            />
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default FormDoctor;

//"Toaster"
