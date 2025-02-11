import React from 'react';

export default function Footer() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-6 px-5 w-full bg-[#2D2D2D] py-6">
      <div className="first w-full flex flex-wrap items-start justify-between gap-6">
        {/* Intro Section */}
        <div className="intro flex flex-col gap-2 w-full lg:w-auto">
          <h1 className="text-[#FFFFFF] text-2xl lg:text-3xl font-bold text-center lg:text-left">KHALIL LUXURY RENTALS</h1>
          <p className="text-[#B0B0B0] text-center lg:text-left w-[300px]">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        <div className="lists flex flex-wrap gap-6 justify-center lg:justify-between w-full lg:w-auto lg:mr-10">
          <div className="about">
            <ul className="flex flex-col gap-1">
              <li className="font-bold text-[#E0E0E0] text-lg"><h1>About</h1></li>
              <li className="text-[#B0B0B0]">How it works</li>
              <li className="text-[#B0B0B0]">Featured</li>
              <li className="text-[#B0B0B0]">Partnership</li>
              <li className="text-[#B0B0B0]">Business Relation</li>
            </ul>
          </div>
          <div className="community">
            <ul className="flex flex-col gap-1">
              <li className="font-bold text-[#E0E0E0] text-lg"><h1>Community</h1></li>
              <li className="text-[#B0B0B0]">Events</li>
              <li className="text-[#B0B0B0]">Blog</li>
              <li className="text-[#B0B0B0]">Podcast</li>
              <li className="text-[#B0B0B0]">Invite a friend</li>
            </ul>
          </div>
          <div className="socials">
            <ul className="flex flex-col gap-1">
              <li className="font-bold text-[#E0E0E0] text-lg"><h1>Socials</h1></li>
              <li className="text-[#B0B0B0]">Discord</li>
              <li className="text-[#B0B0B0]">Instagram</li>
              <li className="text-[#B0B0B0]">Facebook</li>
              <li className="text-[#B0B0B0]">Twitter</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="line border-t w-full border-[#444444]"></div>

      <div className="last w-full flex flex-wrap items-center justify-between gap-4">
        <div className="first text-center lg:text-left w-full lg:w-auto">
          <h1 className="font-bold text-[#B0B0B0] text-sm">©2025 Khalil Luxury Rentals. All rights reserved</h1>
        </div>
        <div className="second flex flex-wrap justify-center lg:justify-end items-center gap-4 w-full lg:w-auto">
          <h1 className="font-bold text-[#B0B0B0] text-sm">Privacy & Policy</h1>
          <h1 className="font-bold text-[#B0B0B0] text-sm">Terms & Conditions</h1>
        </div>
      </div>
    </div>
  );
}
