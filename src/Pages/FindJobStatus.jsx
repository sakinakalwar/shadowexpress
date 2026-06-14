import { useState } from "react";
import { motion } from "framer-motion";
import PageBanner from "../common/PageBanner";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" } }),
};
const bottombg = "https://shadowxpress.com/wp-content/uploads/2025/06/contact-banner.jpg"


const mockStatuses = {
  "A1234567": { name: "John Mitchell",  status: "Approved",    job: "HTV Driver",      date: "2025-06-10" },
  "B9876543": { name: "Sen Mathew",     status: "Under Review", job: "Warehouse Worker", date: "2025-06-08" },
  "C5551234": { name: "Richar Swas",    status: "Pending",     job: "Security Guard",  date: "2025-06-05" },
};

export default function FindJobStatus() {
  const [passport, setPassport] = useState("");
  const [result, setResult]     = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const found = mockStatuses[passport.trim().toUpperCase()];
    setResult(found ?? null);
    setSearched(true);
  };

  const statusColor = {
    "Approved":     "text-green-600 bg-green-50 border-green-200",
    "Under Review": "text-yellow-600 bg-yellow-50 border-yellow-200",
    "Pending":      "text-blue-600  bg-blue-50  border-blue-200",
  };

  return (
    <div className="bg-white">
      <PageBanner title="Find Job Status" bg="https://shadowxpress.com/wp-content/uploads/2025/06/istockphoto-1279104620-612x612-1.jpg" />

      {/* ── Search Section ── */}
      <section className="py-24 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" viewport={{ once: true }}
          className="text-center mb-10">
          <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">Track Your Application</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Check Your Job Status</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Enter your passport number below to find the current status of your job application.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} custom={1} initial="hidden" animate="visible"
          className="bg-white rounded-xl shadow-md border border-gray-100 p-8 md:p-10">
          <form onSubmit={handleSearch} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Enter Passport Number:
              </label>
              <input
                type="text"
                required
                value={passport}
                onChange={e => { setPassport(e.target.value); setSearched(false); }}
                placeholder="e.g. A1234567"
                className="w-full px-4 py-3.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors uppercase"
              />
              <p className="text-gray-400 text-xs mt-1.5">Try: A1234567 · B9876543 · C5551234 (demo)</p>
            </div>
            <button type="submit"
              className="w-full py-3.5 bg-red-600 text-white font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-red-700 transition-colors">
              Search Status
            </button>
          </form>

          {/* Result */}
          {searched && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }} className="mt-6">
              {result ? (
                <div className="rounded-lg border border-gray-200 overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <h3 className="font-bold text-gray-900">Application Details</h3>
                  </div>
                  <div className="px-6 py-5 space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500 font-medium">Applicant Name</span>
                      <span className="text-gray-900 font-semibold">{result.name}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500 font-medium">Applied Position</span>
                      <span className="text-gray-900 font-semibold">{result.job}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500 font-medium">Application Date</span>
                      <span className="text-gray-900 font-semibold">{result.date}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500 font-medium">Status</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${statusColor[result.status] ?? "text-gray-600 bg-gray-50 border-gray-200"}`}>
                        {result.status}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm text-center">
                  No application found with passport number <strong>{passport.toUpperCase()}</strong>. Please check the number and try again.
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* ── Newsletter ── */}
      <section className="relative py-20 border-t border-gray-200 overflow-hidden">
                    <img src={bottombg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className="text-6xl font-medium text-white mb-3">Subscribe Our Newsletter</h2>
                        <p className="text-white text-lg leading-relaxed mb-6 max-w-lg mx-auto">
                          A newsletter is a regularly distributed publication, often via email, that contains news, updates, or information related to a specific topic or organization.
                        </p>
                        <form className="flex flex-col sm:flex-row max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
                          <input type="text" placeholder="Your Name"
                            className="flex-1 px-5 py-3 border bg-white border-red-600 rounded text-sm focus:outline-none focus:border-red-500" />
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
