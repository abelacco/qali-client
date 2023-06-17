import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { STATUS_API } from "../../utils/constantes";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";
import { Dropdown } from "primereact/dropdown";
import { createPatientAsync } from "../../redux/store/patient/patientSlice";
import { ProgressSpinner } from "primereact/progressspinner";
import styles from "./FormPatientModal.module.css";
import "./LoaderColor.css";
import cookies from "js-cookie";

const FormPatientModal = ({ closeModal }) => {
  const { token } = cookies.get();
  console.log(token);
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.patient);
  const [showMessage, setShowMessage] = useState(false);
  const cities = ["Lima", "Piura"];
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      location: null,
      password: "",
      phone: "",
    },
    validate: (data) => {
      let errors = {};

      if (!data.name) {
        errors.name = "Nombre requerido.";
      }
      if (!data.lastName) {
        errors.lastName = "Apellido requerido.";
      }
      if (!data.email) {
        errors.email = "El correo es requerido.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email = "E-mail no válido. P.ej. ejemplo@email.com";
      }
      if (!data.location) {
        errors.location = "Ciudad es requerida";
      }
      if (!data.password) {
        errors.password = "Contraseña es requerida";
      } else if (!/^.{8,15}$/.test(data.password)) {
        errors.password = "La contraseña debe tener entre 8 y 15 caracteres";
      } else if (!/[A-Z]/.test(data.password)) {
        errors.password = "La contraseña debe tener al menos una mayúscula";
      }
      if (!data.phone) {
        errors.phone = "Teléfono es requerido";
      } else if (!/^\d+$/.test(data.phone)) {
        errors.phone = "Ingrese un teléfono válido";
      }
      return errors;
    },
    onSubmit: (data) => {
      dispatch(createPatientAsync(data));
      setShowMessage(true);
      formik.resetForm();
    },
  });

  const isFormFieldInvalid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);

  const formCompletedOk = () => {
    const isFormModified = !!(
      Object.values(formik.touched).every((value) => value) &&
      Object.values(formik.touched).length
    );
    const contentErrors = !!Object.values(formik.errors).length;
    return !contentErrors && isFormModified;
  };

  return (
    <>
      {!(
        showMessage &&
        (status == STATUS_API.SUCCEEDED || status == STATUS_API.FAILED)
      ) ? (
        <Dialog
          header="Crear cuenta de Paciente"
          visible={true}
          style={{ width: "500px", height: "510px" }}
          onHide={() => closeModal()}
        >
          {status == STATUS_API.LOADING ? (
            <div className="flex justify-center items-center w-full h-full">
              <ProgressSpinner
                style={{ width: "100px", height: "100px" }}
                strokeWidth="4"
                fill="var(--surface-ground)"
                animationDuration=".5s"
              />
            </div>
          ) : (
            <form
              onSubmit={formik.handleSubmit}
              className="flex justify-center"
            >
              <div className="w-10/12 m-3">
                <div className="flex justify-between">
                  <div className=" flex flex-col w-1/2">
                    <label htmlFor="name" className="w-max">
                      Nombre
                    </label>
                    <InputText
                      id="name"
                      aria-describedby="username-help"
                      onBlur={formik.handleBlur}
                      className={`mb-0 mr-0.5 p-inputtext-sm ${classNames({
                        "p-invalid": isFormFieldInvalid("name"),
                      })}`}
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    />
                    {isFormFieldInvalid("name") ? (
                      <small
                        id="username-help"
                        className="flex items-center ml-2.5 text-red-500 "
                      >
                        {formik.errors.name}
                      </small>
                    ) : (
                      <div className="h-4"></div>
                    )}
                  </div>
                  <div className=" flex flex-col w-1/2">
                    <label htmlFor="lastName" className="w-max">
                      Apellido
                    </label>
                    <InputText
                      id="lastName"
                      aria-describedby="userlastName-help"
                      onBlur={formik.handleBlur}
                      className={`mb-0 ml-0.5 p-inputtext-sm ${classNames({
                        "p-invalid": isFormFieldInvalid("lastName"),
                      })}`}
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                    />
                    {isFormFieldInvalid("lastName") ? (
                      <small
                        id="userlastName-help"
                        className="flex items-center ml-2.5 text-red-500 "
                      >
                        {formik.errors.lastName}
                      </small>
                    ) : (
                      <div className="h-4"></div>
                    )}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className=" flex flex-col w-1/2">
                    <label htmlFor="location" className="w-max">
                      Ciudad
                    </label>
                    <Dropdown
                      id="location"
                      onBlur={formik.handleBlur}
                      value={formik.values.location}
                      onChange={formik.handleChange}
                      options={cities}
                      placeholder="Seleccione una ciudad"
                      className={`mb-0 mr-0.5 p-inputtext-sm ${classNames({
                        "p-invalid": isFormFieldInvalid("location"),
                      })}`}
                    />
                    {isFormFieldInvalid("location") ? (
                      <small
                        id="userlocation-help"
                        className="flex items-center ml-2.5 text-red-500 "
                      >
                        {formik.errors.location}
                      </small>
                    ) : (
                      <div className="h-4"></div>
                    )}
                  </div>
                  <div className=" flex flex-col w-1/2">
                    <label htmlFor="phone" className="w-max">
                      Teléfono
                    </label>
                    <InputText
                      id="phone"
                      aria-describedby="userphone-help"
                      onBlur={formik.handleBlur}
                      className={`mb-0 ml-0.5 p-inputtext-sm ${classNames({
                        "p-invalid": isFormFieldInvalid("phone"),
                      })}`}
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                    />
                    {isFormFieldInvalid("phone") ? (
                      <small
                        id="userphone-help"
                        className="flex items-center ml-2.5 text-red-500 "
                      >
                        {formik.errors.phone}
                      </small>
                    ) : (
                      <div className="h-4"></div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="w-max">
                    Email
                  </label>
                  <div className="flex mb-3.5">
                    <InputText
                      id="email"
                      aria-describedby="useremail-help"
                      onBlur={formik.handleBlur}
                      className={` p-inputtext-sm mb-0 mr-0.5 ${classNames({
                        "p-invalid": isFormFieldInvalid("email"),
                      })}`}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {isFormFieldInvalid("email") ? (
                      <small
                        id="useremail-help"
                        className="flex items-center ml-2.5 text-red-500 "
                      >
                        {formik.errors.email}
                      </small>
                    ) : (
                      <small
                        id="useremail-help"
                        className="ml-2.5 text-zinc-400"
                      >
                        E-mail P.ej.: ejemplo@gmail.com
                      </small>
                    )}
                  </div>
                </div>

                <div className=" flex items-end">
                  <div className=" flex flex-col">
                    <label htmlFor="password" className="w-max">
                      Contraseña
                    </label>
                    <div className="flex">
                      <Password
                        id="password"
                        name="password"
                        onBlur={formik.handleBlur}
                        className={`p-inputtext-sm mr-0.5 ${
                          styles.passwordCenterIcon
                        } ${classNames({
                          "p-invalid": isFormFieldInvalid("password"),
                        })}`}
                        value={formik.values.password}
                        onChange={(e) =>
                          formik.setFieldValue("password", e.target.value)
                        }
                        toggleMask
                        feedback={false}
                      />
                      {isFormFieldInvalid("password") ? (
                        <small
                          id="userpassword-help"
                          className=" flex items-center ml-2.5 text-red-500 "
                        >
                          {formik.errors.password}
                        </small>
                      ) : (
                        <small
                          id="useremail-help"
                          className="flex items-center ml-2.5 text-zinc-400"
                        >
                          Contraseña de cuenta.
                        </small>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={closeModal}
                    className="w-3/12 mt-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-950 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className={`w-3/12 mt-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-950 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm ${
                      !formCompletedOk() ? "bg-opacity-50" : "hover:bg-gray-700"
                    }`}
                    disabled={!formCompletedOk()}
                  >
                    Aceptar
                  </button>
                </div>
              </div>
            </form>
          )}
        </Dialog>
      ) : (
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-0 sm:p-6 sm:pb-0">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                {status == STATUS_API.SUCCEEDED ? (
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    "Cuenta creada con exito"
                  </h3>
                ) : (
                  <div className="h-20 flex flex-col justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Ocurrió un error:
                    </h3>
                    <p>{error}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <div className="flex justify-center w-full sm:flex-row">
              <button
                onClick={() => {
                  setShowMessage(false);
                  closeModal();
                }}
                className="mt-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-950 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormPatientModal;
