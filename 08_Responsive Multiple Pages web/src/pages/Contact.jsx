import React from 'react';

const Contact = () => {

  const handleformsubmit = (e) => {
    e.preventDefault(); // stop default page reload
    const formdata = new FormData(e.target); // get form data
    const objectFormatdata = Object.fromEntries(formdata.entries());
    console.log(objectFormatdata);
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleformsubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
