import React from "react";
import Navbar from "../common/Shadowxpressnavbar";

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Navbar />
            <div className="text-center p-8">
                <h1 className="text-4xl font-bold mb-4">Welcome to ShadowXpress</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Your one-stop solution for all your job application needs. Track your applications, get insights, and find your dream job with us!
                </p>
                <a
                    href="#services"
                    className="inline-block px-6 py-3 bg-red-600 text-white text-sm font-bold uppercase tracking-wide hover:bg-red-700 active:bg-red-800 transition-colors rounded"
                >
                    Explore Services
                </a>
            </div>
        </div>
    );
}
export default Home