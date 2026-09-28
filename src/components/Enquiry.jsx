import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Enquiry = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const name = formData.get("name") || "-";
    const phone = formData.get("phone") || "-";
    const email = formData.get("email") || "-";
    const address = formData.get("address") || "-";
    const message = formData.get("message") || "-";

    // WhatsApp number (with country code, no + or spaces)
    const whatsappNumber = "917065650191";

    // Create message text
    const whatsappMessage = `
*New Enquiry Received!*
Name: ${name}
Phone: ${phone}
Email: ${email}
Address: ${address}
Message: ${message}
    `;

    // Encode message properly for URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp in new tab with prefilled message
    window.open(whatsappURL, "_blank");

    e.target.reset();
    setSuccess(true);
    setLoading(false);
  };

  return (
    <section ref={ref} className="bg-gray-50 lg:pb-16 pb-0 pt-16 px-4 md:px-16">
      <div className="pb-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Make an Enquiry</h2>
        <p className="text-lg text-gray-600">
          Connect with <span className="text-red-600 font-semibold">KNT</span>{" "}
          <span className="text-sm">Powered By Japanese Technology</span> for
          reliable automotive solutions.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-stretch justify-between gap-10">
        {/* Contact Form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-full md:w-1/2 py-6 bg-white shadow-xl rounded-2xl p-2 lg:p-8 flex flex-col justify-between"
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              name="message"
              placeholder="Write your message..."
              rows="8"
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-500 md:col-span-2 resize-none"
            ></textarea>

            <div className="md:col-span-2 text-center mt-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-red-600 cursor-pointer text-white font-semibold px-8 py-2 rounded-lg hover:bg-red-700 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "SEND ON WHATSAPP"}
              </button>
            </div>
          </form>

          {success && (
            <p className="text-green-600 font-medium text-center mt-4">
              ✅ Thank you! Your enquiry has been sent via WhatsApp.
            </p>
          )}
        </motion.div>

        {/* Google Map */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg flex-grow"
        >
          <iframe
            title="KNT Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0545282100945!2d76.92653617529717!3d28.565847875709056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d17b7b49b94f1%3A0x6a564b493c3ed679!2sIMT%20Manesar%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Enquiry;
