import { Link } from "react-router-dom";


type ContactItemProps = {
  label: string;
  value: string;
  icon: string;
  type?: string;
};

const Input = ({
  placeholder,
  name,
  type,
}: {
  name: string;
  placeholder: string;
  type: string;
}) => {
  return (
    <div className="form_group">
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        autoComplete="off"
      />
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

const ContactFormBox = () => {
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
        <form id="contact-form">
          <div className="row gx-3">
            <div className="col-sm-6">
              <Input name="firstName" type="text" placeholder="First name" />
            </div>
            <div className="col-sm-6">
              <Input name="lastName" type="text" placeholder="Last name" />
            </div>
            <div className="col-sm-6">
              <Input name="email" type="email" placeholder="Email address" />
            </div>
            <div className="col-sm-6">
              <Input name="phone" type="phone" placeholder="Phone number" />
            </div>
            {/* choose service */}
            <div className="col-12">
              <div className="form_group">
                <select name="service" id="service" className="tj-nice-select">
                  <option value="" selected disabled>
                    Choose Service
                  </option>
                  <option value="braning">Branding Design</option>
                  <option value="web">Web Design</option>
                  <option value="uxui">UI/UX Design</option>
                  <option value="app">App Design</option>
                </select>
              </div>
            </div>
            {/* message */}
            <div className="col-12">
              <div className="form_group">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                ></textarea>
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

const ContactInformation = () => {
  const contacts: {
    label: string;
    value: string;
    type?: string;
    icon: string;
  }[] = [
    {
      label: "Phone",
      value: "+221 771244151",
      type: "phone",
      icon: "flaticon-phone-call",
    },
    {
      label: "Email",
      value: "saifoulaye.diallo0512@gmail.com",
      type: "email",
      icon: "flaticon-mail-inbox-app",
    },
    { label: "Address", value: "Senegal, Dakar", icon: "flaticon-location" },
  ];

  return (
    <div className="contact-info-list">
      <ul className="ul-reset">
        {contacts.map((contact) => (
          <ContactItem key={contact.label} {...contact} />
        ))}
      </ul>
    </div>
  );
};

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
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
