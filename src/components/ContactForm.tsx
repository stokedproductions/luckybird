import React, { useState } from 'react'
import { DropDownField, TextImportField } from './FormFields'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { stringify } from 'querystring'

const ContactForm = () => {
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmited, setFromSubmitted] = useState(false);
  const [formSubmitHadError, setSubmitHadError] = useState(false);

  const roles = ['Developer', 'QA Analyst', 'Business Analyst']
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
      name: Yup.string().label('Full Name').required().max(50),
      email: Yup.string().email().required().max(50),
      phone: Yup.string().max(13)
        .required()
        .matches(
          /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
          'Please Provide a valid response',
        ),
      roleInCompany: Yup.string().oneOf(
        roles,
      ),
      company: Yup.string()
        .max(50)
        .required(),
    }),
    onSubmit: async (values) => {
      setFormSubmitting(true);
      try {
        const sendForm = await fetch('/api/sendEmailNotification', {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(values),
        });
        const status = await sendForm.status;
        if (status === 200) {
          setFromSubmitted(true) 
          setFormSubmitting(false)
        } else if (status === 400) {
          setFromSubmitted(true) 
          setFormSubmitting(false)
          setSubmitHadError(true);
        }
      } catch {
          setFromSubmitted(true) 
          setFormSubmitting(false)
          setSubmitHadError(true);
      }
    },
  })

  return (
    <div className="w-full bg-blue-500 pt-[200px] pb-[100px] lg:py-[200px]">
      <div>
        <div className="mx-auto flex w-[95%] lg:w-[800px] flex-col items-center justify-center">
          <h1 className="mb-[25px] text-center text-[62px] text-white font-poppins font-semibold leading-[105%]">
            Request a Demo
          </h1>
          <p className="w-[80%] lg:w-[450px] mx-auto text-center text-white font-poppins text-[16px] leading-[140%]">
            If you are a professional, we offer a desktop admin platform, to
            allow a better and faster management of your whole business
          </p>
        </div>
        <div className="mx-auto mt-[108px] w-[95%] lg:w-[873px] rounded-3xl bg-white p-10 shadow-lg z-20 relative">
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
                  type="submit"
                  disabled={!formik.dirty || !formik.isValid || formSubmitting || formSubmited}
                  className=" h-[116px] w-full rounded-xl bg-blue-500 text-[30px] font-semibold text-white disabled:bg-[#E9EBEF]"
                >
                  {formSubmitting ? "Submitting" : formSubmited ? "Form Submitted Successfully!!!" : formSubmitHadError ? "Something went wrong" : "Submit"}
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
