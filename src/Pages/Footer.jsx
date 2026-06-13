import { FaPhoneAlt, FaRegEnvelopeOpen } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-gray-200 px-16 py-12">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo + Text */}
          <div>
            <img src="/logo.png" alt="logo" className="w-48 mb-4" />
            <p className="text-gray-700 leading-8">
              Delivering trusted logistics solutions
              with speed, safety, and reliability
              across the globe.
              <br />
              Stay connected with us for seamless
              shipping and customer support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-red-600 text-2xl mb-5">Quick Links</h2>
            <ul className="space-y-4">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
              <li>Team</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-red-600 text-2xl mb-5">Services</h2>
            <ul className="space-y-4">
              <li>Ocean Freight</li>
              <li>Road Transport</li>
              <li>Air Freight</li>
              <li>Warehousing</li>
              <li>Cargo Insurance</li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h2 className="text-red-600 text-2xl mb-5">Information</h2>

            <div className="flex items-center gap-3 mb-4">
              <FaPhoneAlt className="text-red-600" />
              <p>+1 343 353 2232</p>
            </div>

            <div className="flex items-center gap-3">
              <FaRegEnvelopeOpen className="text-red-600" />
              <p>info@shadowxpress.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-red-600 text-white text-center py-4">
        © 2025 Shadow Xpress All Rights Reserved and Developed By Roaslift
      </div>
    </footer>
  );
}