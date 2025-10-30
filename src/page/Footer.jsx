import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 px-4 sm:px-8 md:px-12">
            {/* Links Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <ul className="flex flex-col gap-2">
                    <dt className="font-semibold text-lg">Product</dt>
                    <dd className="text-gray-300 text-sm">NA</dd>
                    <dd className="text-gray-300 text-sm">NA</dd>
                    <dd className="text-gray-300 text-sm">NA</dd>
                    <dd className="text-gray-300 text-sm">NA</dd>
                </ul>

                <ul className="flex flex-col gap-2">
                    <dt className="font-semibold text-lg">Resources</dt>
                    <dd className="text-gray-300 text-sm">NA</dd>
                    <dd className="text-gray-300 text-sm">NA</dd>
                    <dd className="text-gray-300 text-sm">NA</dd>
                    <dd className="text-gray-300 text-sm">NA</dd>
                </ul>

                <ul className="flex flex-col gap-2">
                    <dt className="font-semibold text-lg">Community</dt>
                    <dd className="text-gray-300 text-sm">NA</dd>
                    <dd className="text-gray-300 text-sm">NA</dd>
                    <dd className="text-gray-300 text-sm">NA</dd>
                    <dd className="text-gray-300 text-sm">NA</dd>
                </ul>

                <ul className="flex flex-col gap-2">
                    <dt className="font-semibold text-lg">Help</dt>
                    <dd className="text-gray-300 text-sm">NA</dd>
                    <dd className="text-gray-300 text-sm">NA</dd>
                    <dd className="text-gray-300 text-sm">NA</dd>
                    <dd className="text-gray-300 text-sm">NA</dd>
                </ul>
            </div>

            {/* Copyright */}
            <p className="text-center text-gray-400 text-sm mb-4">
                ©2025 PHH, Inc. All rights reserved
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
                <a href="#" className="text-white hover:text-gray-400 text-xl">
                    <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#" className="text-white hover:text-gray-400 text-xl">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="text-white hover:text-gray-400 text-xl">
                    <i className="fa-brands fa-tiktok"></i>
                </a>
                <a href="#" className="text-white hover:text-gray-400 text-xl">
                    <i className="fa-brands fa-x-twitter"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
