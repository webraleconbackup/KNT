import React, { useState } from 'react';
import Banner from '../components/Banner';

const Careers = () => {
  const bannerImage = '/banner/banner1.jpg';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file upload validation
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size > 5 * 1024 * 1024) {
      alert('⚠️ File too large! Max 5MB allowed.');
      return;
    }
    setFile(selectedFile);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const formDataToSend = new FormData();
    formDataToSend.append('access_key', 'bc529d8f-a1c0-4611-8246-4c1291bd0188'); // 🔑 Replace with your actual Web3Forms key
    formDataToSend.append('subject', 'New Career Application');
    formDataToSend.append('from_name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('message', formData.message);

    // Use "attachments" — official field name for Web3Forms file uploads
    if (file) formDataToSend.append('attachments', file);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await res.json();
      console.log(result);

      if (result.success) {
        setStatus('✅ Application submitted successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setFile(null);
      } else {
        setStatus('❌ Error: ' + (result.message || 'Something went wrong.'));
      }
    } catch (error) {
      console.error(error);
      setStatus('❌ Network error. Please try again later.');
    }
  };

  return (
    <div>
      <Banner
        title="CAREERS"
        subtitle="Home › Careers"
        backgroundImage={bannerImage}
      />

      <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 lg:px-30 py-10 gap-10 bg-white">
        {/* LEFT TEXT + FORM */}
        <div className="w-full lg:w-1/2">
          <div className="from-blue-50 to-white border-l-4 border-blue-600 p-6 rounded-lg shadow-sm space-y-3 animate-slideIn">
            <h2 className="text-2xl font-bold text-red-600 flex items-center gap-2">
              Build Your Career With Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We’re always looking for motivated and passionate individuals to
              join our team. Browse the available openings, fill out the
              application form, and upload your resume to apply for a specific
              role.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Didn’t find a suitable position? No worries — submit your profile
              and we’ll get in touch when a matching role becomes available.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 shadow-2xl p-4 rounded-lg mt-5"
          >
            <div>
              <label className="block font-semibold mb-1">Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Phone*</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-blue-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Message</label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-blue-500"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <div>
              <label className="block font-semibold mb-1">Upload Resume</label>
              <input
                type="file"
                name="attachments"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="w-full border border-gray-400 rounded-md px-3 py-2"
              />
              {file && (
                <p className="text-sm text-green-600 mt-1">
                  ✅ File ready to upload: {file.name}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-red-600 text-white cursor-pointer font-semibold px-6 py-2 rounded-md hover:bg-red-900 transition"
            >
              Submit
            </button>

            {status && (
              <p className="text-center text-sm text-blue-700 font-semibold">
                {status}
              </p>
            )}
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 shadow-lg rounded-lg">
          <img
            src="/logo/career.jpg"
            alt="Career Growth"
            className="w-full max-w-xl lg:h-[865px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Careers;
