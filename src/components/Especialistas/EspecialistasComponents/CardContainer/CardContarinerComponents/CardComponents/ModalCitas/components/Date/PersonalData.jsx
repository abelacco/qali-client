import React from "react";
import { useFormik } from 'formik';
import { InputText } from "primereact/inputtext";
import { classNames } from 'primereact/utils';
import { Checkbox } from 'primereact/checkbox';

function PersonalData({ information }) {

    const [info, setInfo] = information;
    const { data } = info;

    const handleInfo = (event) => {
        const { name, value } = event.target;
        setInfo({
            ...info,
            data: {
                ...data,
                [name]:value
            }
        })
    }

    console.log(info)

    const formik = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            dni: '',
            email: '',
            phone: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.name) {
                errors.name = 'Name is required.';
            }
            if (!data.lastName) {
                errors.lastName = 'Last Name is required.';
            }
            if (!data.dni) {
                errors.dni = 'dni is required';
            }
            if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
            ) {
                errors.email = 'Email is required'
            }

            if (!data.phone) {
                errors.phone = 'phone is required';
            }
            return errors;
        },
        onSubmit: () => {
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="w-10/12 flex justify-around">
                {/* <button
                    className="w-1/3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-950 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                >
                    Es para mi
                </button>
                <button
                    className="w-1/3 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-950 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                >
                    Es para otra persona
                </button> */}
                {/* <Button label='Es para mi' size="small"/>
                <Button label='Es para otra persona' size="small"/> */}
            </div>
            <div className="card mt-4 w-10/12 flex flex-wrap items-center h-full bg-slate-50 rounded-md">
                <form onSubmit={formik.handleSubmit} className=" flex w-full h-fit felx-wrap">
                    <div className="w-1/2 flex flex-col items-center">
                        <span className="p-float-label">
                            <InputText
                                id="name"
                                name="name"
                                value={formik.values.name}
                                onChange={(e) => {
                                    formik.setFieldValue('name', e.target.value);
                                    handleInfo(e);
                                }}
                                onBlur={formik.handleBlur}
                                className={`p-inputtext-sm m-2 ${classNames({ 'p-invalid': isFormFieldInvalid('name') })}`}
                            />
                            <label htmlFor="input_name">Nombre</label>
                        </span>
                        {getFormErrorMessage('name')}
                        <span className="p-float-label">
                            <InputText
                                id="dni"
                                name="dni"
                                value={formik.values.dni}
                                onChange={(e) => {
                                    formik.setFieldValue('dni', e.target.value);
                                    handleInfo(e)
                                }}
                                onBlur={formik.handleBlur}
                                className={`p-inputtext-sm m-2 ${classNames({ 'p-invalid': isFormFieldInvalid('dni')})}`}
                            />
                            <label htmlFor="input_name">DNI</label>
                        </span>
                        {getFormErrorMessage('dni')}
                        <span className="p-float-label">
                            <InputText
                                id="phone"
                                name="phone"
                                value={formik.values.phone}
                                onChange={(e) => {
                                    formik.setFieldValue('phone', e.target.value);
                                    handleInfo(e)
                                }}
                                onBlur={formik.handleBlur}
                                className={`p-inputtext-sm m-2 ${classNames({ 'p-invalid': isFormFieldInvalid('phone')})}`}
                            />
                            <label htmlFor="input_name">Teléfono</label>
                        </span>
                    {getFormErrorMessage('phone')}
                    </div>
                    <div className="w-1/2 flex flex-col items-center">
                        <span className="p-float-label">
                            <InputText
                                id="lastName"
                                name="lastName"
                                value={formik.values.lastName}
                                onChange={(e) => {
                                    formik.setFieldValue('lastName', e.target.value);
                                    handleInfo(e)
                                }}
                                onBlur={formik.handleBlur}
                                className={`p-inputtext-sm m-2 ${classNames({ 'p-invalid': isFormFieldInvalid('lastName')})}`}
                            />
                            <label htmlFor="input_lastName">Apellido</label>
                        </span>
                        {getFormErrorMessage('lastName')}
                        <span className="p-float-label">
                            <InputText
                                id="email"
                                name="email"
                                value={formik.values.email}
                                onChange={(e) => {
                                    formik.setFieldValue('email', e.target.value);
                                    handleInfo(e)
                                }}
                                onBlur={formik.handleBlur}
                                className={`p-inputtext-sm m-2 ${classNames({ 'p-invalid': isFormFieldInvalid('email')})}`}
                            />
                            <label htmlFor="input_name">E-mail</label>
                        </span>
                        {getFormErrorMessage('email')}
                    </div>
                </form>
                <div className="w-9/12 pl-2">
                    <Checkbox />
                </div>
            </div>
        </div>
    )
}

export default PersonalData;