import React, { useState } from 'react'
import { DropDownField, TextImportField } from './FormFields';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
    const roles = ["Developer", "QA Analyst", "Business Analyst"];
    const formik = useFormik({
        initialValues: {
        name: '',
        email: '',
        phone: '',
        company: '',
        roleInCompany: roles[0],
        age: '',
        },
        validationSchema: Yup.object({
        name: Yup.string()
                .label('Full Name')
                .required(),
        email: Yup.string()
                .email()
                .required(),
        phone: Yup.string()
            .required()
            .matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, 'Please Provide a valid response'),
        roleInCompany: Yup.string()
                    .oneOf(roles, 'The profession you chose does not exist'),
        company: Yup.string()
                .max(50, 'You need to be older than 15 to register')
                .required()
        }),
        onSubmit: function (values) {
            alert(`You are registered! Name: ${values.name}. Email: ${values.email}. Profession: ${values.roleInCompany}. 
                Age: ${values.age}.`);
        },
    })

    return (
        <div className="w-full bg-blue-500 py-[200px]">
        <div>
            <div className="mx-auto flex w-[800px] flex-col items-center justify-center">
            <h1 className="mb-[25px] text-center text-[62px] text-white">
                Request a Demo
            </h1>
            <p className="w-[450px] text-center text-white">
                If you are a professional, we offer a desktop admin platform, to
                allow a better and faster management of your whole business
            </p>
            </div>
            <div className="mx-auto mt-[108px] w-[873px] rounded-3xl bg-white p-10 shadow-lg">
            <h2 className="mb-[20px] font-poppins text-[42px] font-semibold">
                Please fill your application
            </h2>
            <div>
                <form onSubmit={formik.handleSubmit}>
                <TextImportField 
                    id="name"
                    fieldName="name" 
                    fieldLabel="Name" 
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errors={formik.errors.name}
                    touched={formik.touched.name}
                />
                <TextImportField 
                    id="email"
                    fieldName="email" 
                    fieldLabel="Email" 
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errors={formik.errors.email}
                    touched={formik.touched.email}
                />
                <TextImportField
                    id="phone"
                    fieldName="phone" 
                    fieldLabel="Phone" 
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errors={formik.errors.phone}
                    touched={formik.touched.phone}
                />
                <TextImportField 
                    id="company"
                    fieldName="company" 
                    fieldLabel="Company" 
                    value={formik.values.company}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errors={formik.errors.company}
                    touched={formik.touched.company}
                />
                <DropDownField
                    id="roleInCompany"
                    fieldName="roleInCompany" 
                    fieldLabel="Role in Company" 
                    optionsList={roles}
                    value={formik.values.roleInCompany}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errors={formik.errors.roleInCompany}
                    touched={formik.touched.roleInCompany}
                />
                <div>
                    <button
                    disabled={!formik.dirty || !formik.isValid}
                    className=" h-[116px] w-full rounded-xl bg-blue-500 text-[30px] font-semibold text-white disabled:bg-[#E9EBEF]"
                    >
                    Submit
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    )
}

export default ContactForm