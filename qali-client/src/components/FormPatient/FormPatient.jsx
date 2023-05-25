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
import { CITIES, PREFIJO } from "../../utils/constantes";

const FormPatient = () => {
  const [formData, setFormData] = useState({});
  const [showMessage, setShowMessage] = useState(false);
  
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      especialidad: null,
      ciudad: null,
      prefijo: null,
      grado: "",
      colegiatura: "",
      accept: false,
      acceptInformation: false,
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

      if (!data.confirmPassword) {
        errors.confirmPassword = "Confirmar contraseña es requerido.";
      } else if (data.confirmPassword !== data.password) {
        errors.confirmPassword = "Las contraseñas no coinciden.";
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

      if (data.password !== data.confirmPassword) {
        //si no coinciden ver de dejar un mensaje de error o realizar alguna acción
        return;
      }
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
                  id="push-paciente"
                  name="push-notifications"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="push-nothing"
                  className="block text-3xl leading-6 text-gray-400"
                >
                  Paciente
                </label>
              </div>
            </>
          </div>
          {/* text-qaliLightGrey */}
          <br></br>
          <div className="flex gap-2 p-2">
            <div className="flex gap-2">
              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className={classNames(
                    "block",
                    "text-3xl",
                    "leading-6",
                    "text-gray-900",
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
          </div>
          <br></br>
  
          <div className="flex gap-2 p-2">
            <div className="sm:col-span-3">
              <label className="block  text-3xl leading-6 text-gray-900 p-4">
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
                <label className="block  text-3xl leading-6 text-gray-900 p-4">
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
                <label className="block  text-3xl leading-6 text-gray-900 p-7">
                  {/* vacio para mantener el eje con los inputs */}
                </label>
                <div className="block  text-3xl leading-6 text-gray-900 ">
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
              <label className="block  text-3xl leading-6 text-gray-900 p-4">
                Correo electrónico
              </label>
  
              <InputText
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="tucorreoelectronico@gmail.com"
                className="w-80"
              />
              {getFormErrorMessage("email")}
            </div>
          </div>
  
          <br></br>
  
          <div className="flex gap-2 p-2">
  <div className="sm:col-span-3">
    <div className="flex justify-between">
      <div className="mr-12">
        <label
          htmlFor="password"
          className={classNames(
            "block",
            "text-3xl",
            "leading-6",
            "text-gray-900",
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
      <div>
        <label
          htmlFor="confirmPassword"
          className={classNames(
            "block",
            "text-3xl",
            "leading-6",
            "text-gray-900",
            "p-4",
            { "p-error": isFormFieldValid("confirmPassword") }
          )}
        >
          Confirmar Contraseña*
        </label>
        <Password
          id="confirmPassword"
          name="confirmPassword"
          onChange={formik.handleChange}
          toggleMask
          value={formik.values.confirmPassword}
          placeholder="***************"
          className={classNames({
            "p-invalid": isFormFieldValid("confirmPassword"),
          })}
          header={passwordHeader}
          footer={passwordFooter}
        />
      </div>
    </div>
  </div>
</div>

  
          <br></br>
  
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
                <label className="block  text-3xl leading-6 text-gray-400">
                  Acepto los terminos y condiciones del servicio de Qalï
                </label>
              </div>
              <div className="flex items-center gap-x-3 font-bold">
                <Checkbox
                  name="acceptInformation"
                  inputId="acceptInformation"
                  checked={formik.values.acceptInformation}
                  onChange={formik.handleChange}
                  className={classNames({
                    "p-invalid": isFormFieldValid("acceptInformation"),
                  })}
                />
                <label
                  htmlFor="acceptInformation"
                  className={classNames(
                    "h-4 w-1 border-gray-300 text-indigo-600 focus:ring-indigo-600",
                    { "p-error": isFormFieldValid("acceptInformation") }
                  )}
                />
                <label
                  htmlFor="acceptInformation"
                  className="block text-3xl leading-6 text-gray-400"
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

export default FormPatient;
