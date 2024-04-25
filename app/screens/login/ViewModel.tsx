import React, { useState } from 'react';


import * as yup from 'yup';


interface Values {
    email: string,
    password: string,
}

const validationLoginSchema = yup.object().shape({
    email: yup.string().email('Ingrese un correo electrónico válido').required('El correo electrónico es requerido'),
    password: yup.string().required('La contraseña es requerida'),
});


const LoginViewModel = () => {


    const [values, setValues] = useState<Values>({
        email: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState<Record<string, string>>({});


    const onChange = (property: string, value: string) => {
        setValues({ ...values, [property]: value });
    }

    const login = async () => {
        const isValid = await isValidForm();
        if (isValid) {
            if(values.email != "test@test.com" && values.password != "1234"){
                const errors: Record<string, string> = {};
                errors["credenciales"] = "Credenciales invalidas."
                setErrorMessage(errors);
                return false;
            }
            console.log("Valido")
            return true;
        }
    }

    const isValidForm = async (): Promise<boolean> => {
        try {
            await validationLoginSchema.validate(values, { abortEarly: false });
            return true;
        } catch (error) {
            const errors: Record<string, string> = {};
            error.inner.forEach((err) => {
                errors[err.path] = err.message;
            });
            setErrorMessage(errors);
            // console.log(errors);
            return false;
        }
    }

    return {
        ...values,
        onChange,
        login,
        errorMessage,
    }
}

export default LoginViewModel;