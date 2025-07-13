import React from "react";
import { motion } from "framer-motion";

const accent = "text-teal-600";
const bg = "bg-[#f9fafb]";
const card = "rounded-2xl shadow-lg bg-white p-6";
const sectionPad = "py-16 px-4 sm:px-8";
const heading = "font-bold text-4xl sm:text-5xl mb-4 " + accent;
const subheading = "text-lg text-gray-600 mb-8";
const gridGap = "gap-8";

const iconStyle = "w-10 h-10 text-teal-400 mb-2";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function NetsuritLandingPage() {
  return (
    <div className={bg + " min-h-screen w-full font-sans"}>
      {/* Hero Section */}
      <motion.section
        className={sectionPad + " flex flex-col items-center text-center"}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h1 className={heading}>Netsurit | Southbound 
            </bk> Work From Anywhere Adventure</h1>
        <p className={subheading}>
          Bringing flexibility, adventure, and balance to remote teams.
        </p>
        <h3>🚀 The Idea?</h3>
        <p> A flexible “work from anywhere” program for Netsurit teams—designed to boost retention, wellbeing, and team culture by combining adventure with productivity.

Staff can live and work from inspiring global destinations while staying fully connected, supported, and productive.</p>
      </motion.section>

      {/* What’s Included Section */}
      <motion.section
        className={sectionPad + " max-w-5xl mx-auto"}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className={heading + " text-center"}>What Each Trip Includes</h2>
        <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 " + gridGap}>
          {/* Accommodation */}
          <div className={card + " flex flex-col items-center text-center"}>
            <svg className={iconStyle} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 10l9-7 9 7v7a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-7z"/></svg>
            <h3 className="font-semibold text-lg mb-1">Work-Ready Accommodation</h3>
            <p className="text-gray-500 text-base">Strong Wi-Fi, dedicated workspace, central location</p>
          </div>
          {/* Airport Transfers */}
          <div className={card + " flex flex-col items-center text-center"}>
            <svg className={iconStyle} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10.18 9"/><path d="M21 16v-2a4 4 0 00-3-3.87V7a5 5 0 00-10 0v3.13A4 4 0 005 14v2l-1 1v1h18v-1l-1-1z"/></svg>
            <h3 className="font-semibold text-lg mb-1">Airport Transfers & Arrival Support</h3>
            <p className="text-gray-500 text-base">Stress-free landings</p>
          </div>
          {/* SIM Card */}
          <div className={card + " flex flex-col items-center text-center"}>
            <svg className={iconStyle} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M8 6h8v4H8z"/></svg>
            <h3 className="font-semibold text-lg mb-1">Local SIM Card or eSIM</h3>
          </div>
          {/* Cultural Experiences */}
          <div className={card + " flex flex-col items-center text-center"}>
            <svg className={iconStyle} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
            <h3 className="font-semibold text-lg mb-1">Cultural Experiences & Optional Activities</h3>
            <p className="text-gray-500 text-base">Surfing, food tours, hikes, coworking meetups</p>
          </div>
          {/* 24/7 Support */}
          <div className={card + " flex flex-col items-center text-center"}>
            <svg className={iconStyle} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
            <h3 className="font-semibold text-lg mb-1">24/7 Remote Support</h3>
            <p className="text-gray-500 text-base">For both work and life logistics</p>
          </div>
          {/* Flexible Stays */}
          <div className={card + " flex flex-col items-center text-center"}>
            <svg className={iconStyle} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/></svg>
            <h3 className="font-semibold text-lg mb-1">Flexible Stays</h3>
            <p className="text-gray-500 text-base">Solo or group options</p>
          </div>
          {/* Visa Guidance */}
          <div className={card + " flex flex-col items-center text-center col-span-full sm:col-span-2 md:col-span-1"}>
            <svg className={iconStyle} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 19l7-7-7-7"/><path d="M5 12h14"/></svg>
            <h3 className="font-semibold text-lg mb-1">Visa Guidance</h3>
            <p className="text-gray-500 text-base">Where needed</p>
          </div>
        </div>
      </motion.section>

      {/* Why It Works Section */}
      <motion.section
        className={sectionPad + " max-w-5xl mx-auto"}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className={heading + " text-center"}>Why It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className={card}>
            <h3 className="font-semibold text-xl mb-2">Boosts Retention & Talent Attraction</h3>
            <p className="text-gray-500 text-lg">Remote perks help reduce voluntary turnover and attract top talent.</p>
          </div>
          <div className={card}>
            <h3 className="font-semibold text-xl mb-2">Drives Productivity & Wellbeing</h3>
            <p className="text-gray-500 text-lg">New environments spark creativity and foster connection.</p>
          </div>
          <div className={card}>
            <h3 className="font-semibold text-xl mb-2">Cost-Neutral Impact</h3>
            <p className="text-gray-500 text-lg">Even a 1% retention increase saves hundreds of thousands annually.</p>
          </div>
          <div className={card}>
            <h3 className="font-semibold text-xl mb-2">Flexible & Scalable</h3>
            <p className="text-gray-500 text-lg">Teams can join as individuals or groups, with rotation or reward-based trips.</p>
          </div>
        </div>
      </motion.section>

      {/* Trip Options Section */}
      <motion.section
        className={sectionPad + " max-w-6xl mx-auto"}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className={heading + " text-center"}>Choose Your Adventure</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Card 1 */}
          <motion.div whileHover={{ scale: 1.04 }} className={card + " transition-transform duration-200"}>
            <h3 className="font-bold text-2xl mb-2">Around the World in 80 Days</h3>
            <p className="text-teal-500 font-semibold mb-1">3 Months | 3 Countries</p>
            <p className="text-gray-600 mb-2">Mexico → Ecuador → Argentina</p>
            <p className="text-gray-500 mb-4">Ideal for those craving variety and adventure.</p>
            <p className="font-semibold text-lg">From $800–$1,200 <span className="text-gray-400 text-base">per person/month (accommodation only)</span></p>
          </motion.div>
          {/* Card 2 */}
          <motion.div whileHover={{ scale: 1.04 }} className={card + " transition-transform duration-200"}>
            <h3 className="font-bold text-2xl mb-2">One Country, Three Cities</h3>
            <p className="text-teal-500 font-semibold mb-1">3 Months | 1 Country</p>
            <p className="text-gray-600 mb-2">Example: Mexico City, Oaxaca, Playa del Carmen.</p>
            <p className="text-gray-500 mb-4">Less travel hassle, lower cost, more routine-friendly.</p>
            <p className="font-semibold text-lg">From $600–$1,000 <span className="text-gray-400 text-base">per person/month</span></p>
          </motion.div>
          {/* Card 3 */}
          <motion.div whileHover={{ scale: 1.04 }} className={card + " transition-transform duration-200"}>
            <h3 className="font-bold text-2xl mb-2">OOH-Friendly Rotations</h3>
            <p className="text-teal-500 font-semibold mb-1">6–12 Weeks</p>
            <p className="text-gray-600 mb-2">Time zone alignment for Netsurit’s Out-of-Hours teams (e.g., Bali, Thailand).</p>
            <p className="text-gray-500 mb-4">Avoid midnight shifts: start at 6am local time.</p>
            <p className="font-semibold text-lg">Flexible pricing.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Accommodation Options Section */}
      <motion.section
        className={sectionPad + " max-w-4xl mx-auto"}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className={heading + " text-center"}>Accommodation Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Private Apartment */}
          <div className={card + " flex flex-col items-center text-center"}>
            <svg className={iconStyle} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="14" x="3" y="7" rx="2"/><path d="M9 21V9h6v12"/></svg>
            <h3 className="font-semibold text-xl mb-2">Private Apartment</h3>
            <p className="text-gray-500 text-lg">Full privacy, your own space, ideal for solo travelers.</p>
          </div>
          {/* Shared Villa */}
          <div className={card + " flex flex-col items-center text-center"}>
            <svg className={iconStyle} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="10" x="3" y="11" rx="2"/><path d="M7 21V7h10v14"/></svg>
            <h3 className="font-semibold text-xl mb-2">Shared Villa</h3>
            <p className="text-gray-500 text-lg mb-1">Private bedroom & bathroom</p>
            <p className="text-gray-500 text-lg">Shared communal spaces: kitchen, pool, coworking area.<br/>Perfect for groups of 3–6 colleagues.</p>
          </div>
        </div>
      </motion.section>

      {/* Business Impact Section */}
      <motion.section
        className={sectionPad + " max-w-4xl mx-auto"}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className={heading + " text-center"}>The Business Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className={card + " flex flex-col"}>
            <span className="font-semibold text-lg mb-1">Retention</span>
            <span className="text-gray-500 text-base mb-2">Lower hiring/replacement costs (R100k–R150k per tech).</span>
          </div>
          <div className={card + " flex flex-col"}>
            <span className="font-semibold text-lg mb-1">Productivity</span>
            <span className="text-gray-500 text-base mb-2">Improved engagement and fresh perspectives.</span>
          </div>
          <div className={card + " flex flex-col"}>
            <span className="font-semibold text-lg mb-1">Attraction</span>
            <span className="text-gray-500 text-base mb-2">Standout recruitment perk for top talent.</span>
          </div>
          <div className={card + " flex flex-col"}>
            <span className="font-semibold text-lg mb-1">Culture</span>
            <span className="text-gray-500 text-base mb-2">Builds community across distributed teams.</span>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className={sectionPad + " max-w-xl mx-auto"}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className={heading + " text-center"}>Let’s Make It Happen</h2>
        <form
          className={card + " mt-10 flex flex-col gap-6"}
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label className="text-left font-semibold text-lg">
            Name
            <input
              type="text"
              name="name"
              required
              className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </label>
          <label className="text-left font-semibold text-lg">
            Email
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </label>
          <label className="text-left font-semibold text-lg">
            Message
            <textarea
              name="message"
              required
              rows={4}
              className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </label>
          <button
            type="submit"
            className="mt-2 px-8 py-3 bg-teal-500 text-white rounded-2xl shadow-md text-lg font-semibold hover:bg-teal-600 transition"
          >
            Submit
          </button>
        </form>
      </motion.section>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm py-8">
        © {new Date().getFullYear()} Netsurit. All rights reserved.
      </footer>
    </div>
  );
} 