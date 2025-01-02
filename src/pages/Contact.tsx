import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { Id, Slide, ToastContainer, toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";

import data from "../data.json";
import { useTheme } from "../theme/useTheme";
const { contacts } = data as { contacts: Contacts };

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const userId = import.meta.env.VITE_EMAILJS_USER_ID;

type ContactItemProps = {
  label: string;
  value: string;
  icon: string;
  type?: string;
};

type Contacts = {
  [key: string]: ContactItemProps[];
};

const Input = ({
  placeholder,
  name,
  type,
  value,
  onChange,
  onBlur,
  error,
  helperText,
}: {
  name: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error: boolean;
  helperText: string;
}) => {
  return (
    <div className="form_group">
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <span className="error">{helperText}</span>}
    </div>
  );
};

const ContactFormBox = () => {
  const toastId = useRef<Id | null>(null);
  // services
  const services: string[] = [
    "Website Development",
    "Web Application Development",
    "Freelance Java",
    "Consulting and Training",
    "API Development and Integration",
    "Custom Software",
  ];

  /**
   * Defines the validation schema for the contact form using Yup.
   * 
   * The schema includes the following fields:
   * - `firstName`: A required string field with a custom error message.
   * - `lastName`: A required string field with a custom error message.
   * - `email`: A required string field that must be in a valid email format, with custom error messages for both requirements.
   * - `phone`: A required string field with a custom error message.
   * - `message`: A required string field with a custom error message.
   * 
   * Note: The `service` field is commented out and not included in the validation schema.
   */
  const contactFormValidation = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: yup.string().required("Phone number is required"),
    // service: yup.string().oneOf(services, "Invalid option").required("Service is required"),
    message: yup.string().required("Message name is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
    validationSchema: contactFormValidation,
    onSubmit: (values, { resetForm }) => {
      toastId.current = toast.loading("Sending message...", { delay: 500 });
      console.log(values);
      emailjs
        .sendForm(
          serviceId,
          templateId,
          document.querySelector("form") as HTMLFormElement,
          userId
        )
        .then(
          () => {
            if (toastId.current !== null) {
              toast.update(toastId.current, {
                render: "Message sent successfully!",
                type: "success",
                isLoading: false,
                autoClose: 2000,
              });
            }
             resetForm();
            console.log("SUCCESS!");
          },
          (error) => {
            if (toastId.current !== null) {
              toast.update(toastId.current, {
                render: "Failed to send message!",
                type: "error",
                isLoading: false,
                autoClose: 2000,
              });
            }
            console.log("FAILED...", error);
          }
        );
    },
  });

  return (
    <div className="contact-form-box wow fadeInLeft" data-wow-delay=".3s">
      <div className="section-header">
        <h2 className="section-title">Let’s work together!</h2>
        <p>
          I design and code beautifully simple things and i love what i do. Just
          simple like that!
        </p>
      </div>

      <div className="tj-contact-form">
        <form onSubmit={formik.handleSubmit}>
          <div className="row gx-3">
            <div className="col-sm-6">
              <Input
                type="text"
                name="firstName"
                placeholder="First name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                error={
                  !!formik.touched?.firstName && !!formik.errors?.firstName
                }
                helperText={formik.errors?.firstName ?? ""}
              />
            </div>
            <div className="col-sm-6">
              <Input
                type="text"
                name="lastName"
                placeholder="Last name"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
                error={!!formik.touched.lastName && !!formik.errors.lastName}
                helperText={formik.errors.lastName ?? ""}
              />
            </div>
            <div className="col-sm-6">
              <Input
                type="email"
                name="email"
                placeholder="Email address"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                error={!!formik.touched.email && !!formik.errors.email}
                helperText={formik.errors.email ?? ""}
              />
            </div>
            <div className="col-sm-6">
              <Input
                type="phone"
                name="phone"
                placeholder="Phone number"
                onChange={formik.handleChange}
                value={formik.values.phone}
                onBlur={formik.handleBlur}
                error={!!formik.touched.phone && !!formik.errors.phone}
                helperText={formik.errors.phone ?? ""}
              />
            </div>
            {/* choose service */}
            <div className="col-12">
              <div className="form_group">
                <select
                  id="service"
                  className="tj-nice-select"
                  onChange={formik.handleChange}
                  value={formik.values.service}
                >
                  <option value="" disabled hidden>
                    Choose Service
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* message */}
            <div className="col-12">
              <div className="form_group">
                <textarea
                  {...formik.getFieldProps("message")}
                  name="message"
                  id="message"
                  placeholder="Message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <span className="error">{formik.errors.message}</span>
                ) : (
                  ""
                )}
              </div>
            </div>

            {/* submit button  */}
            <div className="col-12">
              <div className="form_btn">
                <button type="submit" className="tj-btn-primary">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const ContactItem = ({ label, value, icon, type }: ContactItemProps) => {
  return (
    <li
      className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"
      data-wow-delay=".4s"
    >
      <div className="icon-box">
        <i className={icon}></i>
      </div>
      <div className="text-box">
        <p>{label}</p>
        {type ? (
          <Link to={type === "phone" ? `tel:${value}` : `mailto:${value}`}>
            {value}
          </Link>
        ) : (
          <Link to="/">{value}</Link>
        )}
      </div>
    </li>
  );
};

/**
 * Renders a list of contact information items from the contacts data.
 * Each contact item is displayed using the ContactItem component.
 * The contacts data is extracted from a JSON file and flattened 
 * for easy rendering.
 */

const ContactInformation = () => {
  const contactInfos = Object.getOwnPropertyNames(contacts)
    .map((key) => contacts[key])
    .flat();
  return (
    <div className="contact-info-list">
      <ul className="ul-reset">
        {contactInfos.map((contact) => (
          <ContactItem key={contact.label} {...contact} />
        ))}
      </ul>
    </div>
  );
};

const Contact = () => {
  const { isDarkMode } = useTheme();
  return (
    <section className="contact-section" id="contact">
      <ToastContainer
        position="bottom-left"
        hideProgressBar
        newestOnTop
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme={isDarkMode ? "dark" : "light"}
        transition={Slide}
      />
      <div className="container">
        <div className="row">
          {/* contact form box */}
          <div className="col-lg-6 col-md-7 order-2 order-md-1">
            <ContactFormBox />
          </div>

          {/* contact information */}
          <div className="col-lg-5 offset-lg-1 col-md-5  d-flex flex-wrap align-items-center  order-1 order-md-2">
            <ContactInformation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
