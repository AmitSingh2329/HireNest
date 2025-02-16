import React from "react";
import { Button } from "../ui/button";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Company Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">JobPortal</h2>
            <p className="text-gray-400">
              Find the perfect job and grow your career with us. We provide the best job listings and resources.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Post a Job</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 mb-4">Email: support@jobportal.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8">
          <div className="flex justify-between items-center">
            {/* Social Media Icons (Example) */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>

            {/* Newsletter Section */}
            <div className="flex items-center space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-700 text-white rounded-md"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
