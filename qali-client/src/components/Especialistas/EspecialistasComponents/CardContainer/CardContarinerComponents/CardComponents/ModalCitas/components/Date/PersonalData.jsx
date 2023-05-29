
import React from "react";
import { useFormik } from 'formik';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Checkbox } from 'primereact/checkbox';

function PersonalData({ information }) {

    const [info, setInfo] = information;
    const { datos } = info;

    const handleInfo = (event) => {
        const { name, value } = event.target;
        setInfo({
            ...info,
            datos: {
                ...datos,
                [name]:value
            }
        })
    }

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
        <>
            <div>
                <Button label='Es para mi' />
                <Button label='Es para otra persona' />
            </div>
            <div className="card">
                <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
                    <span className="p-float-label">
                        <InputText
                            id="name"
                            name="name"
                            value={formik.values.name}
                            onChange={(e) => {
                                formik.setFieldValue('name', e.target.value);
                                handleInfo(e)
                            }}
                            className={classNames({ 'p-invalid': isFormFieldInvalid('name') })}
                        />
                        <label htmlFor="input_name">Name</label>
                    </span>
                    {getFormErrorMessage('name')}

                    <span className="p-float-label">
                        <InputText
                            id="lastName"
                            name="lastName"
                            value={formik.values.lastName}
                            onChange={(e) => {
                                formik.setFieldValue('lastName', e.target.value);
                                handleInfo(e)
                            }}
                            className={classNames({ 'p-invalid': isFormFieldInvalid('lastName') })}
                        />
                        <label htmlFor="input_lastName">LastName</label>
                    </span>
                    {getFormErrorMessage('lastName')}

                    <span className="p-float-label">
                        <InputText
                            id="dni"
                            name="dni"
                            value={formik.values.dni}
                            onChange={(e) => {
                                formik.setFieldValue('dni', e.target.value);
                                handleInfo(e)
                            }}
                            className={classNames({ 'p-invalid': isFormFieldInvalid('dni') })}
                        />
                        <label htmlFor="input_name">DNI</label>
                    </span>
                    {getFormErrorMessage('dni')}

                    <span className="p-float-label">
                        <InputText
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={(e) => {
                                formik.setFieldValue('email', e.target.value);
                                handleInfo(e)
                            }}
                            className={classNames({ 'p-invalid': isFormFieldInvalid('email') })}
                        />
                        <label htmlFor="input_name">Email</label>
                    </span>
                    {getFormErrorMessage('email')}

                    <span className="p-float-label">
                        <InputText
                            id="phone"
                            name="phone"
                            value={formik.values.phone}
                            onChange={(e) => {
                                formik.setFieldValue('phone', e.target.value);
                                handleInfo(e)
                            }}
                            className={classNames({ 'p-invalid': isFormFieldInvalid('phone') })}
                        />
                        <label htmlFor="input_name">Phone</label>
                    </span>
                    {getFormErrorMessage('phone')}


                    <Button type="submit" label="Submit" />
                </form>
            </div>
            <div>
                <Checkbox />
            </div>
        </>
    )
}

export default PersonalData