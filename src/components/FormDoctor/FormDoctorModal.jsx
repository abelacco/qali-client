import React, { useState } from "react";
import { useFormik } from "formik";
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { Button } from 'primereact/button';
        

const FormDoctorModal = ()=>{
    
    const [visible, setVisible] = useState(true);

    const formik = useFormik({
        initialValues:{
            name: "",
            lastName: "",
            email: "",
            location: null,
            password: "",
            speciality: "",
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
            if (!data.speciality) {
                errors.speciality = "Especialidad es requerida";
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
            data && console.log(data);
            formik.resetForm();
        }
    })

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);
    
    const formCompletedOk = ()=> {
        const isFormModified = !!(Object.values(formik.touched).every(value => value) && Object.values(formik.touched).length);
        const contentErrors = !!Object.values(formik.errors).length;
        return !contentErrors && isFormModified;
    } 
    
    return(
        <Dialog header="Header" visible={visible} style={{ width: '50vw'}} onHide={() => setVisible(false)}>
            <form onSubmit={formik.handleSubmit} className="w-full flex justify-center">
                <div className="w-3/4">
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
                                value={formik.values.email} onChange={formik.handleChange}
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
                    <div className=" flex flex-col">
                        <label htmlFor="speciality" className="w-max">Especialidad</label>
                        <InputText 
                            id="speciality" 
                            aria-describedby="username-help" 
                            onBlur={formik.handleBlur} 
                            className={`mb-3 p-inputtext-sm ${classNames({ 'p-invalid': isFormFieldInvalid('speciality') })}`} 
                            value={formik.values.speciality} 
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className=" flex flex-col">
                        <label htmlFor="password" className="w-max">Contraseña</label>
                        <InputText 
                            id="password" 
                            aria-describedby="username-help" 
                            onBlur={formik.handleBlur} 
                            className={`p-inputtext-sm ${classNames({ 'p-invalid': isFormFieldInvalid('password') })}`} 
                            value={formik.values.password} 
                            onChange={formik.handleChange}
                        />
                    </div>
                    {formCompletedOk() ?
                        <Button 
                            label="Aceptar" 
                            type="submit" 
                            icon="pi pi-check" 
                            severity="secondary" 
                            className="mt-2.5 bg-blue-950"
                        /> :
                        <Button 
                            label="Aceptar" 
                            type="submit" 
                            icon="pi pi-check" 
                            severity="secondary" 
                            className="mt-2.5 bg-blue-950"
                            disabled
                        />
                     }
                </div>
            </form>
        </Dialog>
        
    )
}

export default FormDoctorModal;
        
        

