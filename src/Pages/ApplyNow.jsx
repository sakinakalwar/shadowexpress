import { useState } from "react";
import { motion } from "framer-motion";
import PageBanner from "../common/PageBanner";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" } }),
};

const countries = [
  "Afghanistan","Albania","Algeria","Angola","Argentina","Australia","Austria","Azerbaijan","Bahrain",
  "Bangladesh","Belgium","Brazil","Bulgaria","Cambodia","Canada","Chile","China","Colombia","Croatia",
  "Czech Republic","Denmark","Ecuador","Egypt","Ethiopia","Finland","France","Germany","Ghana","Greece",
  "Hungary","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Japan","Jordan","Kazakhstan",
  "Kenya","Kuwait","Lebanon","Libya","Malaysia","Mexico","Morocco","Netherlands","New Zealand","Nigeria",
  "Norway","Oman","Pakistan","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia",
  "Saudi Arabia","Serbia","Singapore","Somalia","South Africa","South Korea","Spain","Sri Lanka",
  "Sudan","Sweden","Switzerland","Syria","Taiwan","Tanzania","Thailand","Tunisia","Turkey","Uganda",
  "Ukraine","United Arab Emirates","United Kingdom","United States","Uzbekistan","Vietnam","Yemen","Zimbabwe",
];

const occupations = [
  "Construction","Engineering","HTV Driver","LTV Driver","Security Guard","Packing","Office Boy",
  "Factory Worker","Warehouse Worker","Sales Man","Delivery Person","Housekeeping","Plumber",
  "Electrician","Farm Worker","Cook","Painter","Carpenter","Other",
];

const emptyForm = {
  fullName: "", passportNumber: "", country: "", occupation: "", email: "",
  photo: null, cv: null,
};

export default function ApplyNow() {
  const [form, setForm]         = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [photoName, setPhotoName] = useState("");
  const [cvName, setCvName]       = useState("");

  const handleFile = (field, setter) => (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm(f => ({ ...f, [field]: file }));
      setter(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(emptyForm);
    setPhotoName("");
    setCvName("");
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white">
      <PageBanner title="Apply Now" />

      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" animate="visible"
          className="text-center mb-10">
          <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">Join Our Network</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Job Application Form</h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto">
            Fill in your details below and upload your documents. Our team will review your application and get back to you.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} custom={1} initial="hidden" animate="visible"
          className="bg-white rounded-xl shadow-md border border-gray-100 p-8 md:p-10">

          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium text-center">
              ✓ Your application has been submitted successfully! We will contact you within 3–5 business days.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
              <input type="text" required value={form.fullName}
                onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" />
            </div>

            {/* Passport Number */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Passport Number *</label>
              <input type="text" required value={form.passportNumber}
                onChange={e => setForm(f => ({ ...f, passportNumber: e.target.value }))}
                placeholder="Enter your passport number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors uppercase" />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Country *</label>
              <select required value={form.country}
                onChange={e => setForm(f => ({ ...f, country: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors bg-white">
                <option value="">Select your country</option>
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* Occupation */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Occupation *</label>
              <select required value={form.occupation}
                onChange={e => setForm(f => ({ ...f, occupation: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors bg-white">
                <option value="">Select your occupation</option>
                {occupations.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email *</label>
              <input type="email" required value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" />
            </div>

            {/* Upload Photo */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Upload Image (Passport Size Photo) *</label>
              <label className="flex items-center gap-3 w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-red-400 transition-colors group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-red-500 shrink-0 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors truncate">
                  {photoName || "Choose passport photo (JPG, PNG)"}
                </span>
                <input type="file" required accept="image/*" className="hidden" onChange={handleFile("photo", setPhotoName)} />
              </label>
            </div>

            {/* Upload CV */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Upload Experience CV *</label>
              <label className="flex items-center gap-3 w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-red-400 transition-colors group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-red-500 shrink-0 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors truncate">
                  {cvName || "Choose CV file (PDF, DOC, DOCX)"}
                </span>
                <input type="file" required accept=".pdf,.doc,.docx" className="hidden" onChange={handleFile("cv", setCvName)} />
              </label>
            </div>

            <button type="submit"
              className="w-full py-4 bg-red-600 text-white font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-red-700 transition-colors mt-2">
              Submit Application
            </button>
          </form>
        </motion.div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-14 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Subscribe Our Newsletter</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-lg mx-auto">
              A newsletter is a regularly distributed publication, often via email, that contains news, updates, or information related to a specific topic or organization.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Your Name"
                className="flex-1 px-5 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:border-red-500" />
              <button type="submit"
                className="px-8 py-3 bg-red-600 text-white font-bold uppercase tracking-wide text-sm rounded hover:bg-red-700 transition-colors">
                Sign Up
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
