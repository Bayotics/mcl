import { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/8f126900-873c-11ee-b7d9-ffc4a6fbb414"; 

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <div className="text-center mt-40">
        <div className="text-4xl font-bold">Thank you for reaching out!</div>
        <div className="text-md font-bold">We'll be in touch soon.</div>
      </div>
    );
  }
    return(
        <div className="contact-page-main">
            <div className="main-contact-hero">
                <div className="contact-heading-main text-center mt-48">
                    <h1 className="font-bold text-5xl text-center text-white">Contact Us</h1>
                </div>
            </div> 
            <div className="services-page-content px-12">
                <h1 className="font-bold text-4xl text-center">Get in Touch</h1>
                <div className="w-1/12 services-span"></div>
                <p className="font-semibold text-lg  mt-4 text-center">You can get in touch with us, our support will available to respond to you 8am-7pm Monday to Saturday.</p>
            </div>
            <div className="services-input px-12 mt-8">
                <form
                    action={FORM_ENDPOINT}
                    onSubmit={handleSubmit}
                    method="POST"
                >
                    <div className="top-input flex gap-8">
                        <input name="name" required type="text" className="w-1/3 pl-4 rounded-sm" placeholder="Your Name"></input>
                        <input name="tel" type = "tel" className="w-1/3 pl-4 rounded-sm" placeholder="Your Phone Number"></input>
                        <input  name="email" required type="email" className="w-1/3 pl-4 rounded-sm" placeholder="Subject"></input>
                    </div>
                    <div className="bottom-input mt-12">
                        <textarea name="input" required className="w-full h-64 rounded-sm" placeholder="Input your message"></textarea>
                    </div>
                    <div className="latest-proj-btn text-center mt-8">
                        <button type="submit" className="latest-proj-btn-main">Submit</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Contact