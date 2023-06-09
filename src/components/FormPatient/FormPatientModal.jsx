import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { STATUS_API } from "../../utils/constantes";
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';    
import { classNames } from 'primereact/utils';
import {createPatientAsync  } from '../../redux/store/patient/patientSlice';
import styles from './FormPatientModal.module.css';
        

const FormPatientModal = ({closeModal})=>{
    const dispatch = useDispatch();
    const {status, error} = useSelector((state)=>state.patient);
    const [showMessage, setShowMessage] = useState(false);
    const formik = useFormik({
        initialValues:{
            name: "",
            lastName: "",
            email: "",
            location: null,
            password: "",
            phone:""
        },
        validate: (data)=>{
            let errors={}
    
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
                errors.email =
                  "Dirección de correo electrónico no válida. P.ej. ejemplo@email.com";
              }
            if (!data.location) {
                errors.location = "Ciudad es requerida";
            }
            if(!data.password) {
                errors.password = "Contraseña es requerida";
            }else if (!/^.{8,15}$/.test(data.password)) {
                errors.password = "La contraseña debe tener entre 8 y 15 caracteres";
            }else if (!/[A-Z]/.test(data.password)){
                errors.password = "La contraseña debe tener al menos una mayúscula";
            }
            if(!data.phone){
                errors.phone = "Teléfono es requerido";
            }else if (!/^\d+$/.test(data.phone)){
                errors.phone = "Ingrese un teléfono válido"
            }
            return errors;
        },
        onSubmit: (data) => {
            dispatch(createPatientAsync(data));
            setShowMessage(true);
            formik.resetForm();
        }
    })

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);
    console.log("formik.touched", formik.touched)
    
    const formCompletedOk = ()=> {
        const isFormModified = !!(Object.values(formik.touched).every(value => value) && Object.values(formik.touched).length);
        const contentErrors = !!Object.values(formik.errors).length;
        return !contentErrors && isFormModified;
    } 
    
    return(
        <>
            {
                !(showMessage && (status == STATUS_API.SUCCEEDED || status == STATUS_API.FAILED )) ?
                <Dialog header="Crear cuenta de Paciente" visible={true} style={{ width: '500px'}} onHide={() => closeModal()}>
                    <form onSubmit={formik.handleSubmit} className="flex justify-center">
                    <div className="w-10/12 m-3">
                        <div className="flex justify-between">
                            <div className=" flex flex-col">
                                <label htmlFor="name" className="w-max">Nombre</label>
                                <InputText 
                                    id="name" 
                                    aria-describedby="username-help" 
                                    onBlur={formik.handleBlur} 
                                    className={` mb-3 p-inputtext-sm ${classNames({ 'p-invalid': isFormFieldInvalid('name') })}`} 
                                    value={formik.values.name} 
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className=" flex flex-col">
                                <label htmlFor="lastName" className="w-max">Apellido</label>
                                <InputText 
                                    id="lastName" 
                                    aria-describedby="username-help" 
                                    onBlur={formik.handleBlur} 
                                    className={` mb-3 p-inputtext-sm ${classNames({ 'p-invalid': isFormFieldInvalid('lastName') })}`}
                                    value={formik.values.lastName} 
                                    onChange={formik.handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className=" flex flex-col mb-3">
                                <label htmlFor="email" className="w-max">Email</label>
                                <InputText 
                                    id="email" 
                                    aria-describedby="username-help" 
                                    onBlur={formik.handleBlur} 
                                    className={` p-inputtext-sm ${classNames({ 'p-invalid': isFormFieldInvalid('email') })}`} 
                                    value={formik.values.email} 
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className=" flex flex-col">
                                <label htmlFor="phone" className="w-max">Teléfono</label>
                                <InputText 
                                    id="phone" 
                                    aria-describedby="username-help" 
                                    onBlur={formik.handleBlur} 
                                    className={`mb-3 p-inputtext-sm ${classNames({ 'p-invalid': isFormFieldInvalid('phone') })}`} 
                                    value={formik.values.phone} 
                                    onChange={formik.handleChange}
                                />
                            </div>
                        </div>
                        <div className=" flex flex-col">
                            <label htmlFor="location" className="w-max">Ubicación</label>
                            <InputText 
                                id="location" 
                                aria-describedby="username-help" 
                                onBlur={formik.handleBlur} 
                                className={`mb-3 p-inputtext-sm ${classNames({ 'p-invalid': isFormFieldInvalid('location') })}`} 
                                value={formik.values.location} 
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className=" flex items-end">
                            <div className=" flex flex-col">
                                <label htmlFor="password" className="w-max">Contraseña</label>
                                <div className="flex">
                                    <Password 
                                        id="password"
                                        name="password"
                                        onBlur={formik.handleBlur} 
                                        className={`p-inputtext-sm ${styles.passwordCenterIcon} ${classNames({ 'p-invalid': isFormFieldInvalid('password') })}`} 
                                        value={formik.values.password}
                                        onChange={(e)=> formik.setFieldValue('password', e.target.value)}
                                        toggleMask
                                        feedback={false}
                                    />
                                    {
                                        formik.errors.password ?
                                        <small id="username-help" className=" flex items-center ml-2.5 text-red-500 ">
                                            {formik.errors.password}
                                        </small> :
                                        <></>
                                    }
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
                                className={`w-3/12 mt-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-950 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm ${!formCompletedOk() ? "bg-opacity-50" : "hover:bg-gray-700" }`}
                                disabled={!formCompletedOk()}
                            >
                                Aceptar
                            </button>   
                        </div>
                    </div>
                    </form>
                </Dialog>
                :
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    {
                                        status == STATUS_API.SUCCEEDED ? 
                                        "Cuenta creada con exito" :
                                        `Error: ${error}`
                                    }
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <div className="flex justify-center w-full sm:flex-row">
                            <button
                            onClick={()=>{
                                setShowMessage(false) 
                                closeModal()
                                }
                            }
                            className="mt-3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-950 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
                            >
                            Aceptar
                            </button>
                        </div>
                    </div>
              </div>
            }
        </>
        
    )
}

export default FormPatientModal;