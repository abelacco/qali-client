import React from "react";
import { useFormik } from 'formik';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Checkbox } from 'primereact/checkbox';

function BankData({ information }) {

    const [info, setInfo] = information;
    const { bankData } = info;

    const handleInfo = (event) => {
        const { name, value } = event.target;
        setInfo({
            ...info,
            bankData: {
                ...bankData,
                [name]: value
            }
        })
    }

    const formik = useFormik({
        initialValues: {
            cardNumber: '',
            expiration: '',
            cvv: '',
            holderName: '',
        },
        validate: (data) => {
            let errors = {};

            if (!data.cardNumber) {
                errors.cardNumber = 'card number is required.';
            }
            if (!data.expiration) {
                errors.expiration = 'expiration date is required.';
            }
            if (!data.cvv) {
                errors.cvv = 'cvv is required';
            }
            if (!data.holderName) {
                errors.holderName = 'holder name is required';
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
            <div className="card">
                <form onSubmit={formik.handleSubmit} className="flex flex-col">
                    <span className="p-float-label">
                        <InputText
                            id="cardNumber"
                            name="cardNumber"
                            value={formik.values.cardNumber}
                            onChange={(e) => {
                                formik.setFieldValue('cardNumber', e.target.value);
                                handleInfo(e);
                            }}
                            onBlur={formik.handleBlur}
                            className={classNames({ 'p-invalid': isFormFieldInvalid('cardNumber') })}
                        />
                        <label htmlFor="input_cardNumber">Numero de la Tarjeta</label>
                    </span>
                    {getFormErrorMessage('cardNumber')}

                    <div className="flex">
                        <div>
                            <span className="p-float-label">
                                <InputText
                                    id="expiration"
                                    name="expiration"
                                    value={formik.values.expiration}
                                    onChange={(e) => {
                                        formik.setFieldValue('expiration', e.target.value);
                                        handleInfo(e)
                                    }}
                                    onBlur={formik.handleBlur}
                                    className={classNames({ 'p-invalid': isFormFieldInvalid('expiration') })}
                                />
                                <label htmlFor="input_expiration">Vencimiento</label>
                            </span>
                            {getFormErrorMessage('expiration')}
                        </div>
                        <div>
                            <span className="p-float-label">
                                <InputText
                                    id="cvv"
                                    name="cvv"
                                    value={formik.values.cvv}
                                    onChange={(e) => {
                                        formik.setFieldValue('cvv', e.target.value);
                                        handleInfo(e)
                                    }}
                                    onBlur={formik.handleBlur}
                                    className={classNames({ 'p-invalid': isFormFieldInvalid('cvv') })}
                                />
                                <label htmlFor="input_cvv">CVV</label>
                            </span>
                            {getFormErrorMessage('cvv')}
                        </div>
                    </div>

                    <span className="p-float-label">
                        <InputText
                            id="holderName"
                            name="holderName"
                            value={formik.values.holderName}
                            onChange={(e) => {
                                formik.setFieldValue('holderName', e.target.value);
                                handleInfo(e)
                            }}
                            onBlur={formik.handleBlur}
                            className={classNames({ 'p-invalid': isFormFieldInvalid('holderName') })}
                        />
                        <label htmlFor="input_holderName">Nombre de la/el titular</label>
                    </span>
                    {getFormErrorMessage('holderName')}

                </form>
            </div>
        </>
    )
}

export default BankData;