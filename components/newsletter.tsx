'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import Image from 'next/image';

interface FormData {
  name: string;
  contact: string;
  message: string;
}

export default function Newsletter(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contact: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    setSuccess(false);

    if(formData.contact.length <6){
      setSubmitting(false);
      return alert('Please add valid Phone number or Email address')
    }
    // Send email using EmailJS
    emailjs.sendForm('service_e8nnozm', 'template_btvtndg', e.currentTarget, 'Rya_mOmzg7LDH5PYA')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        setSuccess(true);
        setError(false);
        setSubmitting(false);
        // Reset form after successful submission
        setFormData({
          name: '',
          contact: '',
          message: ''
        });
      })
      .catch((error: EmailJSResponseStatus) => {
        console.error(error.text);
        setError(true);
        setSuccess(false);
        setSubmitting(false);

      });
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* CTA box */}
        <div className="relative bg-purple-600 py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">
          {/* Background illustration */}
          <div className="absolute right-0 top-0 -ml-40 pointer-events-none" aria-hidden="true">
            <Image src={require('../public/background.svg')} alt="bg svg" />
          </div>
          <div className="relative flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Contact Form  */}
            <form onSubmit={handleSubmit} className="w-full lg:w-1/2">
              <div className="mb-6">
                <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 text-white placeholder-purple-400 focus:outline-none" />
              </div>
              <div className="mb-6">
                <label htmlFor="contact" className="block text-white font-medium mb-2">Phone/Email</label>
                <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} placeholder="Your phone or email" className="w-full bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 text-white placeholder-purple-400 focus:outline-none" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your message" rows={4} className="w-full bg-purple-700 border border-purple-500 focus:border-purple-300 rounded-sm px-4 py-3 text-white placeholder-purple-400 focus:outline-none resize-none"></textarea>
              </div>
              <button type="submit" disabled={submitting} className="btn text-purple-600 bg-purple-100 hover:bg-white shadow">
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
              {success && <p className="text-green-500 mt-2">Message sent successfully!</p>}
              {error && <p className="text-red-500 mt-2">Oops! Something went wrong. Please try again later.</p>}
            </form>
            {/* Additional Content */}
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <h2 className="text-white text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-purple-200 mb-4">We'd love to hear from you! Reach out to us with any questions or inquiries.</p>
              <div className="text-purple-200">
                <p className="flex items-center mb-2"><svg className="w-6 h-6 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.487 2 2 6.487 2 12s4.487 10 10 10 10-4.487 10-10S17.513 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm.707-13.707a1 1 0 0 0-1.414 0L7.75 11.086a.75.75 0 0 0-.172.28l-1.185 3.74a.75.75 0 0 0 .924.924l3.74-1.185a.75.75 0 0 0 .28-.172l5.793-5.793a1 1 0 0 0 0-1.414l-1.293-1.293z"/></svg>House - 381, Road - 28, New DOHS, Mohakhali, Dhaka-1206</p>
                <p className="flex items-center mb-2"><svg className="w-6 h-6 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.16 19.514L12 21.35l3.16-1.836A10 10 0 0 0 12 2zm0 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-11a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>sjs.freelanching@gmail.com</p>
                <p className="flex items-center mb-2"><svg className="w-6 h-6 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.487 2 2 6.487 2 12s4.487 10 10 10 10-4.487 10-10S17.513 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm4.242-10.757l-6.571 6.571a1 1 0 0 1-1.414 0l-3.456-3.456a1 1 0 0 1 1.415-1.414l2.742 2.742 6.157-6.157a1 1 0 1 1 1.415 1.414z"/></svg>+8801713-361734</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
