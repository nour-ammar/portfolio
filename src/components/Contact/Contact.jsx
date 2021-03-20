import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12716.992274976386!2d10.024401984809414!3d37.170575227981224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2dcfffb93beb5%3A0xc342eaa20b2e22a2!2sEl%20Alia!5e0!3m2!1sfr!2stn!4v1616232656027!5m2!1sfr!2stn"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
     

      <h4>Phone</h4>
      <p>27801805</p>

      <h4>Email</h4>
      <p>noor.ammar@outlook.fr</p>

      <h4>Address</h4>
      <p>El Alia , Bizerte</p>
    </div>
  );
};

export default Contact;
