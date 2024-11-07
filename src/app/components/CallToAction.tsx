// src/components/CallToAction.tsx

import React from 'react';

const CallToAction = () => {
  return (
    <div className="section bg-white p-8 lg:p-12 mt-8 shadow-md rounded-lg" id="contact">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        READY TO HIRE A FRACTIONAL PRODUCT MANAGER? LET&apos;S MAKE IT HAPPEN.
      </h3>
      
      <div className="space-y-8">
        {/* Contact Form Container */}
        <div className="contact-form-container">
            <p className="mb-4 text-gray-700">
                I’m ready to hear about your project. Reach out using the form below.
            </p>
            
            <form action="/submit-contact" method="POST" className="space-y-4">
                <div>
                <label className="block font-semibold mb-1 text-gray-700">Project Type</label>
                <select className="w-full border p-2 rounded">
                    <option>Select Project Type</option>
                    <option>Web App</option>
                    <option>Marketing Website</option>
                    <option>Web App Audit</option>
                    <option>Website Audit</option>
                    <option>Other</option>
                </select>
                </div>
                
                <div>
                <label className="block font-semibold mb-1 text-gray-700">Services Needed</label>
                <div className="space-y-2">
                    <label className="block"><input type="radio" name="services" value="Ongoing Advice" /> Ongoing Advice</label>
                    <label className="block"><input type="radio" name="services" value="Part-time Development" /> Part-time Development</label>
                    <label className="block"><input type="radio" name="services" value="Full-time Development" /> Full-time Development</label>
                    <label className="block"><input type="radio" name="services" value="One-time Assessment" /> One-time Assessment</label>
                    <label className="block"><input type="radio" name="services" value="Other" /> Other</label>
                </div>
                </div>
                
                <div>
                <label className="block font-semibold mb-1 text-gray-700">Budget</label>
                <select className="w-full border p-2 rounded">
                    <option>Select Budget</option>
                    <option>Less than $2,500</option>
                    <option>$2,500 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000 - $20,000</option>
                    <option>$20,000 - $50,000</option>
                    <option>$50,000+</option>
                </select>
                </div>
                
                <div>
                <label className="block font-semibold mb-1 text-gray-700">Completion Timeline</label>
                <select className="w-full border p-2 rounded">
                    <option>Select Completion Time</option>
                    <option>Less than 1 Month</option>
                    <option>1-2 Months</option>
                    <option>2-3 Months</option>
                    <option>3-6 Months</option>
                    <option>6 Months+</option>
                </select>
                </div>
                
                <div>
                <label className="block font-semibold mb-1 text-gray-700" htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" className="w-full border p-2 rounded" required />
                </div>
                
                <div>
                <label className="block font-semibold mb-1 text-gray-700" htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="w-full border p-2 rounded" required />
                </div>
                
                <div>
                <label className="block font-semibold mb-1 text-gray-700" htmlFor="url">Website URL (optional)</label>
                <input type="url" id="url" name="url" className="w-full border p-2 rounded" />
                </div>
                
                <div>
                <label className="block font-semibold mb-1 text-gray-700" htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows={5} className="w-full border p-2 rounded" required></textarea>
                </div>
                
                <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                Send Message
                </button>
            </form>
            </div>
            
            {/* Contact Info */}
            <div className="contact-info mt-8">
            <p className="text-lg font-semibold text-gray-800">Contact Information</p>
            <dl>
                <dt className="font-bold text-gray-700 mt-4">Email</dt>
                <dd><a href="mailto:iemcallister@gmail.com" className="text-blue-600">iemcallister@gmail.com</a></dd>
                <dt className="font-bold text-gray-700 mt-4">Connect</dt>
                <dd className="space-x-4">
                <a href="https://www.linkedin.com/in/ianemcallister/" target="_blank" rel="noopener noreferrer" className="text-blue-600"><i className="fab fa-linkedin"></i> LinkedIn</a>
                <a href="https://github.com/ianemcallister" target="_blank" rel="noopener noreferrer" className="text-blue-600"><i className="fab fa-github"></i> GitHub</a>
                </dd>
            </dl>
            </div>
        </div>
    </div>
  );
};

export default CallToAction;
