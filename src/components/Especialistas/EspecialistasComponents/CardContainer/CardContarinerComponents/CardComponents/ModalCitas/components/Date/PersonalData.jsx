import React, { useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { classNames } from 'primereact/utils';
import { Checkbox } from 'primereact/checkbox';

function PersonalData({ stateButtonsPage, formik }) {

    const [buttonsPage, setButtonsPage] = stateButtonsPage;

    const isFormFieldInvalid = (prop)=>{
        const isTouched = !!formik.touched[prop];
        const error = !!formik.errors[prop];
        return(isTouched && error);
    } 
    
    const formCompletedOk = ()=>{
        const { values, errors } = formik;
        const status ={
            name: (!!values.data.name && !errors.name),
            lastName: (!!values.data.lastName && !errors.lastName),
            dni: (!!values.data.dni && !errors.dni),
            email: (!!values.data.email && !errors.email),
            phone: (!!values.data.phone && !errors.phone),
        }
        const {name, lastName, dni, email, phone} = status;
        const completedOk = (!!name && !!lastName && !!dni && !!email && !!phone);
        setButtonsPage({
            ...buttonsPage,
            nextPage: completedOk
        })
        return completedOk;
    }
    useEffect(()=>{
        const form = formCompletedOk();
        console.log(form)
    },[formik.values.data, formik.errors]);
    
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
                        <span className="flex flex-col items-center w-full">
                            <label className="ml-9 self-start" htmlFor="input_name">Nombre</label>
                            <InputText
                                id="name"
                                name="name"
                                value={formik.values.data.name}
                                onChange={(e) => {
                                    formik.setFieldValue('data', {...formik.values.data, name: e.target.value} );
                                }}
                                onBlur={formik.handleBlur}
                                className={`p-inputtext-sm m-2 mb-0 ${classNames({ 'p-invalid': isFormFieldInvalid('name') })}`}
                            />
                            <span className="w-3/4 m-0 ml-2 h-6 text-red-500 text-sm" >
                                { isFormFieldInvalid("name") ? formik.errors.name : "" }
                            </span>
                        </span>
                        <span className="flex flex-col items-center w-full">
                            <label className="ml-9 self-start" htmlFor="input_name">DNI</label>
                            <InputText
                                id="dni"
                                name="dni"
                                value={formik.values.data.dni}
                                onChange={(e) => {
                                    formik.setFieldValue('data', {...formik.values.data, dni: e.target.value});
                                }}
                                onBlur={formik.handleBlur}
                                className={`p-inputtext-sm m-2 ${classNames({ 'p-invalid': isFormFieldInvalid('dni')})}`}
                            />
                            <span className="w-3/4 m-0 ml-2 h-6 text-red-500 text-sm" >
                                { isFormFieldInvalid("dni") ? formik.errors.dni : "" }
                            </span>
                        </span>
                        <span className="flex flex-col items-center w-full">
                            <label className="ml-9 self-start" htmlFor="input_name">Teléfono</label>
                            <InputText
                                id="phone"
                                name="phone"
                                value={formik.values.data.phone}
                                onChange={(e) => {
                                    formik.setFieldValue('data', {...formik.values.data, phone: e.target.value});
                                    }}
                                onBlur={formik.handleBlur}
                                className={`p-inputtext-sm m-2 ${classNames({ 'p-invalid': isFormFieldInvalid('phone')})}`}
                            />
                            <span className="w-3/4 m-0 ml-2 h-6 text-red-500 text-sm" >
                                { isFormFieldInvalid("phone") ? formik.errors.phone : "" }
                            </span>
                        </span>
                    </div>
                    <div className="w-1/2 flex flex-col items-center">
                        <span className="flex flex-col items-center w-full">
                            <label className="ml-9 self-start" htmlFor="input_lastName">Apellido</label>
                            <InputText
                                id="lastName"
                                name="lastName"
                                value={formik.values.data.lastName}
                                onChange={(e) => {
                                    formik.setFieldValue('data', {...formik.values.data, lastName: e.target.value});
                                    formCompletedOk();
                                }}
                                onBlur={formik.handleBlur}
                                className={`p-inputtext-sm m-2 ${classNames({ 'p-invalid': isFormFieldInvalid('lastName')})}`}
                            />
                            <span className="w-3/4 m-0 ml-2 h-6 text-red-500 text-sm" >
                                { isFormFieldInvalid("lastName") ? formik.errors.lastName : "" }
                            </span>
                        </span>
                        <span className="flex flex-col items-center w-full">
                            <label className="ml-9 self-start" htmlFor="input_name">E-mail</label>
                            <InputText
                                id="email"
                                name="email"
                                value={formik.values.data.email}
                                onChange={(e) => {
                                    formik.setFieldValue('data', {...formik.values.data, email: e.target.value});
                                    formCompletedOk();
                                    }}
                                onBlur={formik.handleBlur}
                                className={`p-inputtext-sm m-2 ${classNames({ 'p-invalid': isFormFieldInvalid('email')})}`}
                            />
                            <span className="w-3/4 m-0 ml-2 h-6 text-red-500 text-sm" >
                                { isFormFieldInvalid("email") ? formik.errors.email : "" }
                            </span> 
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PersonalData;