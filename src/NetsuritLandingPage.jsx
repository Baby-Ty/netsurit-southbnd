import React, { useState } from "react";
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
  const [modal, setModal] = useState(null); // 'apartment' | 'villa' | null
  const [tripModal, setTripModal] = useState(false); // 3 Countries modal
  const [localLivingModal, setLocalLivingModal] = useState(false); // Local Living modal
  const [baliModal, setBaliModal] = useState(false); // OOH Escape: Bali modal
  const [saModal, setSaModal] = useState(false); // Reconnect in South Africa modal

  // Placeholder images for each accommodation
  const apartmentImages = [
    "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
  ];
  const villaImages = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <div className={bg + " min-h-screen w-full font-sans"}>
      {/* Hero Section (Minimal, Clean) */}
      <section className="w-full py-12 px-4 sm:px-8 flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full flex flex-col items-center">
          <span className="flex items-center gap-2 text-2xl sm:text-3xl font-normal text-gray-800 mb-10 text-center justify-center">
            <img src={process.env.PUBLIC_URL + "/Netsurit-Logo.png"} alt="Netsurit Logo" className="h-8 w-auto inline-block align-middle" />
            Netsurit  x  Southbnd
            <img src={process.env.PUBLIC_URL + "/southbound-logo.png"} alt="Southbnd Logo" className="h-8 w-auto inline-block align-middle" />
          </span>
          <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mt-2 mb-6">
            🌍 Wandering Worker Program
          </h1>
          <p className="text-center text-base sm:text-lg text-gray-600 mb-4">A shared investment in balance, wellbeing, and inspired work.</p>
          <h2 className="font-bold text-2xl mt-6 mb-2 flex items-center gap-2 justify-center">🚀 The Idea</h2>
          <p className="text-center text-base sm:text-lg text-gray-700 mb-2">A fresh way to support top talent: blend remote work with real-world adventure.</p>
          <p className="text-center text-base sm:text-lg text-gray-700 mb-2">This flexible setup helps Netsurit teams recharge, stay connected, and thrive all while exploring dynamic, work-friendly destinations.</p>
          <p className="text-center text-base sm:text-lg text-gray-700 mb-2">
            <span className="bg-green-100 animate-fade-in px-1 rounded">It's more than a perk.</span> It's a way to keep great people energised, engaged, and growing from anywhere.
          </p>
        </div>
      </section>

      {/* Minimal Divider */}
      <div className="flex justify-center my-1">
        <div className="h-px w-12 bg-gray-200 rounded-full"></div>
      </div>

      {/* What's Included Section (3x2 Grid, Improved Readability) */}
      <section className={sectionPad + " max-w-4xl mx-auto"}>
        <h2 className="font-bold text-2xl mb-8 text-center">What Every Trip Includes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Work-Ready Accommodation */}
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow transition-transform duration-200 hover:shadow-lg hover:-translate-y-1">
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 mb-3 text-2xl">🏠</span>
            <span className="font-bold text-base mb-1 text-center">Work-Ready Accommodation</span>
            <span className="text-gray-500 text-sm text-center">Fast Wi-Fi, workspace, central location</span>
          </div>
          {/* Local SIM or eSIM */}
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow transition-transform duration-200 hover:shadow-lg hover:-translate-y-1">
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-green-50 mb-3 text-2xl">📱</span>
            <span className="font-bold text-base mb-1 text-center">Local SIM or eSIM</span>
            <span className="text-gray-500 text-sm text-center">Stay connected from day one</span>
            <span className="text-gray-400 text-xs text-center mt-1">Acts as secondary internet for backup connectivity.</span>
          </div>
          {/* Arrival Pickup & Support */}
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow transition-transform duration-200 hover:shadow-lg hover:-translate-y-1">
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-50 mb-3 text-2xl">🚐</span>
            <span className="font-bold text-base mb-1 text-center">Arrival Pickup & Support</span>
            <span className="text-gray-500 text-sm text-center">Airport transfers and arrival help</span>
          </div>
          {/* Cultural Experiences */}
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow transition-transform duration-200 hover:shadow-lg hover:-translate-y-1">
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-pink-50 mb-3 text-2xl">🌴</span>
            <span className="font-bold text-base mb-1 text-center">Cultural Experiences</span>
            <span className="text-gray-500 text-sm text-center">Surfing, food tours, coworking meetups</span>
          </div>
          {/* 24/7 Remote Assistance */}
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow transition-transform duration-200 hover:shadow-lg hover:-translate-y-1">
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-50 mb-3 text-2xl">🛟</span>
            <span className="font-bold text-base mb-1 text-center">24/7 Remote Assistance</span>
            <span className="text-gray-500 text-sm text-center">For work or life logistics</span>
          </div>
          {/* Visa Guidance */}
          <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow transition-transform duration-200 hover:shadow-lg hover:-translate-y-1">
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-50 mb-3 text-2xl">🛂</span>
            <span className="font-bold text-base mb-1 text-center">Visa Guidance</span>
            <span className="text-gray-500 text-sm text-center">Help with visa needs (where needed)</span>
          </div>
        </div>
      </section>

      {/* Minimal Divider after What Every Trip Includes */}
      <div className="flex justify-center my-1">
        <div className="h-px w-12 bg-gray-200 rounded-full"></div>
      </div>

      {/* Trip Options Section (Clean, Engaging Cards) */}
      <section className="py-8 max-w-6xl mx-auto">
        <h2 className="font-bold text-2xl mb-10 flex items-center gap-2 justify-center text-center">🗺️ Trip Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Work & Roam: 3 Countries */}
          <div
            className="relative bg-blue-50 rounded-2xl shadow-lg p-6 flex flex-col justify-between items-start transition-transform duration-200 hover:shadow-2xl hover:-translate-y-1 min-h-[340px] h-full cursor-pointer"
            style={{paddingBottom: 20}}
            onClick={() => setTripModal(true)}
            tabIndex={0}
            role="button"
            aria-label="Open Work & Roam: 3 Countries details"
            onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') setTripModal(true); }}
          >
            <div className="w-full flex flex-col items-center mb-1">
              <span className="text-3xl mb-1">🌍</span>
              <span className="font-bold text-lg leading-tight text-center">Work & Roam: 3 Countries</span>
            </div>
            <div className="text-gray-500 text-base mb-1 italic leading-snug text-center w-full">Adventure across borders.</div>
            <ul className="list-disc ml-5 text-gray-700 text-base mb-0 space-y-1 leading-snug">
              <li>Mexico 🇲🇽 → Ecuador 🇪🇨 → Argentina 🇦🇷</li>
              <li>Work, travel, and explore with ease</li>
              <li>Remote life, real adventure</li>
            </ul>
            <div className="flex flex-col items-center w-full pt-1">
              <span className="text-xs text-[#6B7280] mb-1">Click to view</span>
              <div className="w-full flex items-center justify-between gap-2 mt-2 example-trip-row">
                <a
                  href="#"
                  className="max-w-[200px] bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full px-5 py-2 text-sm shadow transition text-center flex-1"
                  onClick={e => { e.preventDefault(); setTripModal(true); }}
                  style={{minWidth:0}}
                >
                  Example Trip &rarr;
                </a>
                <span className="price-badge" style={{
                  display:'inline-flex',
                  alignItems:'center',
                  padding:'4px 10px 4px 12px',
                  borderRadius:'12px',
                  background:'#fff8e1',
                  color:'#333',
                  fontSize:'13px',
                  fontWeight:500,
                  border:'1px solid #f3e5ab',
                  boxShadow:'0 1px 4px rgba(0,0,0,0.06)',
                  minHeight:'24px',
                  lineHeight:'1.2',
                  letterSpacing:'0.01em',
                  margin:0,
                  marginRight:4,
                  whiteSpace:'nowrap',
                  overflow:'hidden',
                  textOverflow:'ellipsis',
                  flexShrink:0
                }}>
                  <span role="img" aria-label="money" style={{marginRight:6, fontSize:'15px', minWidth:15}}>💸</span>From: $900 p/m
                </span>
              </div>
              <style>{`
                @media (max-width: 600px) {
                  .example-trip-row {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 6px;
                  }
                  .price-badge {
                    margin-right: 0 !important;
                  }
                }
              `}</style>
            </div>
          </div>
          {/* Card 2: Local Living: 1 Country, 3 Cities */}
          <div
            className="relative bg-green-50 rounded-2xl shadow-lg p-6 flex flex-col justify-between items-start transition-transform duration-200 hover:shadow-2xl hover:-translate-y-1 min-h-[340px] h-full cursor-pointer"
            style={{paddingBottom: 20}}
            onClick={() => setLocalLivingModal(true)}
            tabIndex={0}
            role="button"
            aria-label="Open Local Living: 1 Country, 3 Cities details"
            onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') setLocalLivingModal(true); }}
          >
            {/* Tag: Lower Travel Costs */}
            <div className="absolute top-4 right-4 z-10 flex items-start justify-end w-auto">
              <span className="inline-block px-3 py-1 rounded-full shadow text-xs font-semibold" style={{background:'#FEEFC3', color:'#B85C00', boxShadow:'0 1px 4px rgba(0,0,0,0.07)'}}>💸 Lower Travel Costs</span>
            </div>
            <div className="w-full flex flex-col items-center mb-1">
              <span className="text-3xl mb-1">🇲🇽</span>
              <span className="font-bold text-lg leading-tight text-center">Local Living: 1 Country, 3 Cities</span>
            </div>
            <div className="text-gray-500 text-base mb-1 italic leading-snug text-center w-full">Less moving, deeper connections.</div>
            <ul className="list-disc ml-5 text-gray-700 text-base mb-0 space-y-1 leading-snug">
              <li>Explore 3 regions of a single country</li>
              <li>Slower pace, richer local experiences</li>
              <li>Easy routines, vibrant community</li>
            </ul>
            <div className="flex flex-col items-center w-full pt-1">
              <span className="text-xs text-[#6B7280] mb-1">Click to view</span>
              <div className="w-full flex items-center justify-between gap-2 mt-2 example-trip-row">
                <a
                  href="#"
                  className="max-w-[200px] bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-5 py-2 text-sm shadow transition text-center flex-1"
                  onClick={e => { e.preventDefault(); setLocalLivingModal(true); }}
                  style={{minWidth:0}}
                >
                  Example Trip &rarr;
                </a>
                <span className="price-badge" style={{
                  display:'inline-flex',
                  alignItems:'center',
                  padding:'4px 10px 4px 12px',
                  borderRadius:'12px',
                  background:'#fff8e1',
                  color:'#333',
                  fontSize:'13px',
                  fontWeight:500,
                  border:'1px solid #f3e5ab',
                  boxShadow:'0 1px 4px rgba(0,0,0,0.06)',
                  minHeight:'24px',
                  lineHeight:'1.2',
                  letterSpacing:'0.01em',
                  margin:0,
                  marginRight:4,
                  whiteSpace:'nowrap',
                  overflow:'hidden',
                  textOverflow:'ellipsis',
                  flexShrink:0
                }}>
                  <span role="img" aria-label="money" style={{marginRight:6, fontSize:'15px', minWidth:15}}>💸</span>From: $800 p/m
                </span>
              </div>
              <style>{`
                @media (max-width: 600px) {
                  .example-trip-row {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 6px;
                  }
                  .price-badge {
                    margin-right: 0 !important;
                  }
                }
              `}</style>
            </div>
          </div>
          {/* Card 3: OOH Escape: Work Nights, Live Days */}
          <div
            className="relative bg-orange-50 rounded-2xl shadow-lg p-6 flex flex-col justify-between items-start transition-transform duration-200 hover:shadow-2xl hover:-translate-y-1 min-h-[340px] h-full cursor-pointer"
            style={{paddingBottom: 20}}
            onClick={() => setBaliModal(true)}
            tabIndex={0}
            role="button"
            aria-label="Open OOH Escape: Bali details"
            onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') setBaliModal(true); }}
          >
            {/* Tag: Teams that Rotate */}
            <div className="absolute top-4 right-4 z-10 flex items-start justify-end w-auto">
              <span className="inline-block px-3 py-1 rounded-full shadow text-xs font-semibold" style={{background:'#D1FADF', color:'#027A48', boxShadow:'0 1px 4px rgba(0,0,0,0.07)'}}>🟢 Teams that Rotate</span>
            </div>
            <div className="w-full flex flex-col items-center mb-1">
              <span className="text-3xl mb-1">🌴</span>
              <span className="font-bold text-lg leading-tight text-center">OOH Escape: Work Nights, Live Days</span>
            </div>
            <div className="text-gray-500 text-base mb-1 italic leading-snug text-center w-full">Built for Out-of-Hours teams.</div>
            <ul className="list-disc ml-5 text-gray-700 text-base mb-0 space-y-1 leading-snug">
              <li>Timezone-aligned</li>
              <li>Start work at sunrise, not midnight</li>
              <li>Villa stays, private rooms and shared spaces</li>
            </ul>
            <div className="flex flex-col items-center w-full pt-1">
              <span className="text-xs text-[#6B7280] mb-1">Click to view</span>
              <div className="w-full flex items-center justify-between gap-2 mt-2 example-trip-row">
                <a
                  href="#"
                  className="max-w-[200px] bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full px-5 py-2 text-sm shadow transition text-center flex-1"
                  onClick={e => { e.preventDefault(); setBaliModal(true); }}
                  style={{minWidth:0}}
                >
                  Example Trip &rarr;
                </a>
                <span className="price-badge" style={{
                  display:'inline-flex',
                  alignItems:'center',
                  padding:'4px 10px 4px 12px',
                  borderRadius:'12px',
                  background:'#fff8e1',
                  color:'#333',
                  fontSize:'13px',
                  fontWeight:500,
                  border:'1px solid #f3e5ab',
                  boxShadow:'0 1px 4px rgba(0,0,0,0.06)',
                  minHeight:'24px',
                  lineHeight:'1.2',
                  letterSpacing:'0.01em',
                  margin:0,
                  marginRight:4,
                  whiteSpace:'nowrap',
                  overflow:'hidden',
                  textOverflow:'ellipsis',
                  flexShrink:0
                }}>
                  <span role="img" aria-label="money" style={{marginRight:6, fontSize:'15px', minWidth:15}}>💸</span>From: $700 p/m
                </span>
              </div>
              <style>{`
                @media (max-width: 600px) {
                  .example-trip-row {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 6px;
                  }
                  .price-badge {
                    margin-right: 0 !important;
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
        {/* Special Card: Reconnect in South Africa */}
        <div className="flex justify-center mt-10">
          <div
            className="relative bg-yellow-50 rounded-2xl shadow-lg p-6 flex flex-col justify-between items-start transition-transform duration-200 hover:shadow-2xl hover:-translate-y-1 min-h-[340px] h-full max-w-3xl w-full cursor-pointer"
            style={{paddingBottom: 20}}
            onClick={() => setSaModal(true)}
            tabIndex={0}
            role="button"
            aria-label="Open Reconnect in South Africa details"
            onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') setSaModal(true); }}
          >
            <div className="w-full flex flex-col items-center mb-1">
              <span className="text-3xl mb-1">🇿🇦</span>
              <span className="font-bold text-lg leading-tight text-center">Reconnect in South Africa</span>
            </div>
            <span className="italic text-base text-gray-700 mb-2 text-center w-full" style={{marginTop: 0, marginBottom: 0}}>A cultural exchange trip for Netsurit's US team</span>
            <ul className="list-disc text-gray-700 text-base mb-0 space-y-1 leading-snug w-full" style={{textAlign:'center', listStylePosition:'inside', paddingLeft:0}}>
              <li>Work side-by-side with the SA team you collaborate with every day</li>
              <li>Experience vibrant cities, culture, and connection in real life</li>
              <li>Safari adventures, lush Garden Route, and summer in December</li>
            </ul>
            <p className="text-base text-gray-700 mb-2 mt-3 text-center w-full">
              More than just a trip...
            </p>
            <span className="font-semibold text-lg text-center mb-2 w-full">Meet the people, bridge the gap, bust the myths, and build trust.</span>
            <span className="text-xs text-[#6B7280] mb-1 w-full text-center">Click to view</span>
            <div className="w-full flex justify-center mt-4">
              <div className="flex items-center gap-3 example-trip-row">
                <a
                  href="#"
                  className="max-w-[200px] bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-full px-5 py-2 text-sm shadow transition text-center"
                  onClick={e => { e.preventDefault(); setSaModal(true); }}
                  style={{minWidth:0}}
                >
                  Example Trip &rarr;
                </a>
                <span className="price-badge" style={{
                  display:'inline-flex',
                  alignItems:'center',
                  padding:'4px 10px 4px 12px',
                  borderRadius:'12px',
                  background:'#fff8e1',
                  color:'#333',
                  fontSize:'13px',
                  fontWeight:500,
                  border:'1px solid #f3e5ab',
                  boxShadow:'0 1px 4px rgba(0,0,0,0.06)',
                  minHeight:'24px',
                  lineHeight:'1.2',
                  letterSpacing:'0.01em',
                  margin:0,
                  whiteSpace:'nowrap',
                  overflow:'hidden',
                  textOverflow:'ellipsis',
                  flexShrink:0
                }}>
                  <span role="img" aria-label="money" style={{marginRight:6, fontSize:'15px', minWidth:15}}>💸</span>From: $1000 p/m
                </span>
              </div>
            </div>
            <style>{`
              @media (max-width: 600px) {
                .example-trip-row {
                  flex-direction: column;
                  align-items: center;
                  gap: 6px;
                }
                .price-badge {
                  margin-right: 0 !important;
                }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Minimal Divider after Trip Options */}
      <div className="flex justify-center my-1">
        <div className="h-px w-12 bg-gray-200 rounded-full"></div>
      </div>

      {/* Accommodation Options Section (Consistent Blue Tint) */}
      <section className="py-6 max-w-4xl mx-auto">
        <h2 className="font-bold text-2xl mb-10 flex items-center gap-2 justify-center text-center">🏡 Accommodation Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Private Apartment Card */}
          <div
            className="relative bg-[#F5F9FF] rounded-2xl shadow-lg p-8 flex flex-col border border-blue-100 transition-transform duration-200 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
            onClick={() => setModal('apartment')}
            tabIndex={0}
            role="button"
            aria-label="Open Private Apartment details"
            onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') setModal('apartment'); }}
          >
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">🏠</span>
              <span className="font-bold text-lg">Private Apartment</span>
            </div>
            <div className="italic text-gray-600 text-sm mb-2">Your own space, your own pace.</div>
            <ul className="list-disc ml-5 text-gray-700 text-base mb-4 space-y-1">
              <li>Full privacy & autonomy</li>
              <li>Private kitchen, workspace, Wi-Fi</li>
              <li>Ideal for senior engineers or solo travelers</li>
              <li>Higher cost for independence</li>
            </ul>
          </div>
          {/* Shared Villa Card */}
          <div
            className="relative bg-[#F5F9FF] rounded-2xl shadow-lg p-8 flex flex-col border border-blue-100 transition-transform duration-200 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
            onClick={() => setModal('villa')}
            tabIndex={0}
            role="button"
            aria-label="Open Shared Villa details"
            onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') setModal('villa'); }}
          >
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">🏡</span>
              <span className="font-bold text-lg">Shared Villa (3–6 Netsurit People)</span>
            </div>
            <div className="italic text-gray-600 text-sm mb-2">Private comfort, shared adventure.</div>
            <ul className="list-disc ml-5 text-gray-700 text-base mb-4 space-y-1">
              <li>Large shared villa with private bedrooms & bathrooms</li>
              <li>Shared kitchen, living spaces, pool, workspaces</li>
              <li>Ideal for team bonding without sacrificing privacy</li>
            </ul>
            {/* Sales-tag style label */}
            <div
              className="absolute"
              style={{
                bottom: '1rem',
                right: '1rem',
                zIndex: 10
              }}
            >
              <span
                className="inline-block px-3 py-1 font-semibold text-xs rounded-lg shadow-md"
                style={{
                  background: '#FFE0B3',
                  color: '#B85C00', // darker orange
                  letterSpacing: '0.01em'
                }}
              >
                💸 Budget-Friendly Option
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Divider after Accommodation Options */}
      <div className="flex justify-center my-1">
        <div className="h-px w-12 bg-gray-200 rounded-full"></div>
      </div>

      {/* Netsurit Contribution & Pay Monthly Section */}
      <section className="py-10 max-w-4xl mx-auto w-full">
        <h2 className="font-bold text-2xl mb-8 flex items-center gap-2 text-center justify-center">💳 How It Could Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left card: Time at Netsurit → Trip Support */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 flex flex-col items-start shadow-lg">
            <span className="text-3xl mb-2">🪪</span>
            <span className="font-bold text-lg mb-1">Time at Netsurit → Trip Support</span>
            <span className="text-gray-500 text-sm mb-4">A simple model to reward loyalty with trip contributions:</span>
            <table className="w-full text-left mb-2 border-separate" style={{ borderSpacing: '0 0.5rem' }}>
              <thead>
                <tr>
                  <th className="py-1 pr-4 font-semibold text-gray-700">Years at Netsurit</th>
                  <th className="py-1 font-semibold text-gray-700">Contribution Idea</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr><td className="py-1 pr-4">1+ Year</td><td className="py-1">10%</td></tr>
                <tr><td className="py-1 pr-4">2+ Years</td><td className="py-1">20%</td></tr>
                <tr><td className="py-1 pr-4">3+ Years</td><td className="py-1">30%</td></tr>
                <tr><td className="py-1 pr-4">4+ Years</td><td className="py-1">40%</td></tr>
                <tr><td className="py-1 pr-4">5+ Years</td><td className="py-1">50% <span className='text-xs text-gray-400'>(capped)</span></td></tr>
              </tbody>
            </table>
          </div>
          {/* Right card: Pay Monthly, Travel Easy */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 flex flex-col items-start shadow-lg">
            <span className="text-3xl mb-2">💸</span>
            <span className="font-bold text-lg mb-1">Pay Monthly, Travel Easy</span>
            <span className="text-gray-500 text-sm mb-4">To make trips more accessible, this setup spreads costs over time:</span>
            <ul className="text-green-600 text-base mb-4 space-y-1">
              <li><span className="mr-2">✅</span>Book ahead</li>
              <li><span className="mr-2">✅</span>Pay your share off monthly</li>
            </ul>
            <div className="bg-white rounded-xl p-4 w-full mb-2 border border-gray-200">
              <span className="font-semibold text-gray-800">Example</span>
              <ul className="text-gray-700 text-sm mt-1 space-y-1">
                <li>Total: <span className="font-medium">$2,200</span></li>
                <li>Company covers 20% → <span className="font-medium">$440</span></li>
                <li>Your share: <span className="font-medium">$1,760</span></li>
                <li>Pay: <span className="font-medium">$147 × 12 months</span></li>
              </ul>
            </div>
            <span className="text-gray-500 text-xs mt-1 italic">Say yes to the adventure, without the lump sum.</span>
          </div>
        </div>
      </section>

      {/* Minimal Divider after How It Could Work */}
      <div className="flex justify-center my-1">
        <div className="h-px w-12 bg-gray-200 rounded-full"></div>
      </div>

      {/* Accommodation Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm transition-all"
          aria-modal="true"
          role="dialog"
        >
          <div className="absolute inset-0" onClick={() => setModal(null)} aria-label="Close modal" />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-4 md:mx-0 p-0 overflow-hidden animate-fadeIn">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold z-10"
              onClick={() => setModal(null)}
              aria-label="Close"
            >
              ×
            </button>
            {/* Accommodation Showcase Gallery */}
            <div className="p-5 md:p-8 flex flex-col items-start">
              <h3 className="font-bold text-2xl md:text-3xl mb-1">
                {modal === 'apartment' ? '🏠 Private Apartment' : '🏡 Shared Villa (3–6 Netsurit People)'}
              </h3>
              <div className="italic text-gray-600 text-base mb-2">
                {modal === 'apartment'
                  ? 'A quiet, comfortable space to work, rest, and live at your own pace.'
                  : 'Social, spacious, and work-friendly - ideal for solo travelers or small teams.'}
              </div>
              {/* Optional location label */}
              <div className="text-xs text-gray-400 mb-4">{modal === 'apartment' ? 'Example location: Playa del Carmen, Mexico' : 'Example location: Bali, Indonesia'}</div>
              {/* Image Grid - Apartment: 2x2 */}
              {modal === 'apartment' ? (
                <div className="grid grid-cols-2 gap-4 w-full mb-2">
                  {[
                    process.env.PUBLIC_URL + "/private room.jpg",
                    process.env.PUBLIC_URL + "/room desk 2.jpg",
                    process.env.PUBLIC_URL + "/private room view.jpg",
                    process.env.PUBLIC_URL + "/private room 3.jpg",
                  ].map((img, idx) => (
                    <div key={img} className="w-full h-32 md:h-36 bg-gray-100 rounded-xl shadow overflow-hidden flex flex-col">
                      <img src={img} alt="Accommodation" className="object-cover w-full h-full" />
                      <span className="text-xs text-gray-500 mt-1 px-1 text-center" style={{minHeight:'1.5em'}}>
                        {[
                          'Spacious private bedroom',
                          'Dedicated desk with fast Wi-Fi',
                          'Safe and central neighbourhoods',
                          'Quiet setting for deep work',
                        ][idx]}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4 w-full mb-2">
                  {[
                    process.env.PUBLIC_URL + "/villa.jpg",
                    process.env.PUBLIC_URL + "/villa 1.jpg",
                    process.env.PUBLIC_URL + "/villa 4.jpg",
                    process.env.PUBLIC_URL + "/villa 5.jpg",
                  ].map((img, idx) => (
                    <div key={img} className="w-full h-32 md:h-36 bg-gray-100 rounded-xl shadow overflow-hidden flex flex-col">
                      <img src={img} alt="Shared Accommodation" className="object-cover w-full h-full" />
                      <span className="text-xs text-gray-500 mt-1 px-1 text-center" style={{minHeight:'1.5em'}}>
                        {[
                          'Poolside villa with private rooms',
                          'Tropical dining & shared lounge',
                          'Spacious bedroom with ensuite',
                          'Bright workspace with outdoor views',
                        ][idx]}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex w-full justify-end mt-4">
                <button
                  className="border border-gray-300 text-gray-700 rounded-xl px-8 py-3 font-semibold hover:bg-gray-100 transition"
                  onClick={() => setModal(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Trip Modal: Work & Roam: 3 Countries */}
      {tripModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm transition-all"
          aria-modal="true"
          role="dialog"
        >
          <div className="absolute inset-0" onClick={() => setTripModal(false)} aria-label="Close modal" />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl md:max-w-3xl lg:max-w-2xl mx-4 md:mx-0 p-0 overflow-hidden animate-fadeIn flex flex-col max-h-[90vh]">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold z-10"
              onClick={() => setTripModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="p-6 md:p-10 overflow-y-auto w-full flex-1">
              <div className="flex flex-col items-start w-full">
                <h3 className="font-bold text-2xl md:text-3xl mb-1 flex items-center gap-2">🌍 <span>Work & Roam: 3 Countries</span></h3>
                <div className="text-base md:text-lg font-semibold text-gray-700 mb-2">Mexico 🇲🇽 → Ecuador 🇪🇨 → Argentina 🇦🇷</div>
                <div className="text-sm text-gray-500 mb-6 font-medium">Duration: 10 weeks (Mexico 4w, Argentina 4w, Ecuador 2w)</div>
                <div className="flex items-center gap-2 mb-2 mt-2">
                  <span className="text-xl">✈️</span>
                  <span className="font-bold text-lg">Itinerary Overview</span>
                </div>
                {/* Month 1 */}
                <div className="mt-4 mb-4">
                  <div className="font-bold text-base md:text-lg mb-1">Month 1: Mexico – Culture & Coastlines (4 weeks)</div>
                  <div className="text-sm text-gray-600 mb-1">Base: Playa del Carmen</div>
                  <div className="text-xs text-gray-400 mb-2">Timezone: UTC -5 (EST-friendly)</div>
                  <div className="font-semibold text-gray-700 mb-1">Highlights:</div>
                  <ul className="list-disc ml-5 text-gray-700 text-base space-y-1">
                    <li>Morning coworking near the beach 🌴</li>
                    <li>Weekend trip to cenotes & Mayan ruins</li>
                    <li>Authentic taco tour + salsa night</li>
                    <li>Optional: Scuba diving or freediving courses</li>
                    <li>Reliable fiber WiFi & work-ready villas</li>
                  </ul>
                  {/* Image Grid for Month 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 mb-2 w-full">
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                        <img src={process.env.PUBLIC_URL + "/Mexico beach.jpg"} alt="Beach coworking" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Beach day in Playa del Carmen</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                        <img src={process.env.PUBLIC_URL + "/Mexico cenote.jpg"} alt="Mayan ruins" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Jungle cenote adventure</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                        <img src={process.env.PUBLIC_URL + "/Mexico maya.jpg"} alt="Salsa night" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Explore Maya ruins</span>
                    </div>
                  </div>
                </div>
                {/* Month 2 */}
                <div className="mb-4">
                  <div className="font-bold text-base md:text-lg mb-1">Month 2: Ecuador – Nature & New Perspectives (2 weeks)</div>
                  <div className="text-sm text-gray-600 mb-1">Base: Quito (with a weekend in Mindo or the Amazon)</div>
                  <div className="text-xs text-gray-400 mb-2">Timezone: UTC -5 (EST)</div>
                  <div className="font-semibold text-gray-700 mb-1">Highlights:</div>
                  <ul className="list-disc ml-5 text-gray-700 text-base space-y-1">
                    <li>Work in historic old town cafes and coworking hubs</li>
                    <li>Amazon jungle weekend escape 🌿</li>
                    <li>Visit to Middle of the World monument</li>
                    <li>Community dinner with local chefs</li>
                    <li>Optional add-on: Galápagos trip extension 🐢</li>
                  </ul>
                  {/* Image Grid for Month 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 mb-2 w-full">
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                        <img src={process.env.PUBLIC_URL + "/ecuador amazon.jpeg"} alt="Amazon escape" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Amazon escape</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                        <img src={process.env.PUBLIC_URL + "/ecuador cafe.jpg"} alt="Quito cafés" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Quito cafés</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                        <img src={process.env.PUBLIC_URL + "/ecuador parrot.jpg"} alt="Galápagos" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Galápagos</span>
                    </div>
                  </div>
                </div>
                {/* Month 3 */}
                <div className="mb-2">
                  <div className="font-bold text-base md:text-lg mb-1">Month 3: Argentina – City Buzz & Mountain Air (4 weeks)</div>
                  <div className="text-sm text-gray-600 mb-1">Base: Buenos Aires or Mendoza</div>
                  <div className="text-xs text-gray-400 mb-2">Timezone: UTC -3 (2 hours ahead of EST - later starts)</div>
                  <div className="font-semibold text-gray-700 mb-1">Highlights:</div>
                  <ul className="list-disc ml-5 text-gray-700 text-base space-y-1">
                    <li>Late morning starts = better sleep</li>
                    <li>Coworking with rooftop views</li>
                    <li>Weekend wine tasting in Mendoza 🍷</li>
                    <li>Tango class + team asado (Argentine BBQ)</li>
                    <li>Vibrant city life, strong coffee, rich culture</li>
                  </ul>
                  {/* Image Grid for Month 3 */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 mb-2 w-full">
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                        <img src={process.env.PUBLIC_URL + "/argentina views.jpg"} alt="Rooftop coworking" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Lake day in Bariloche</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                        <img src={process.env.PUBLIC_URL + "/argentina bbw.jpg"} alt="Wine tasting" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Argentine BBQ with the team</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                        <img src={process.env.PUBLIC_URL + "/argentina cowboy.jpg"} alt="Tango class" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Horseback ride through the Andes</span>
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-end mt-6">
                  <button
                    className="border border-gray-300 text-gray-700 rounded-xl px-8 py-3 font-semibold hover:bg-gray-100 transition"
                    onClick={() => setTripModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Local Living: 1 Country, 3 Cities Modal */}
      {localLivingModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm transition-all"
          aria-modal="true"
          role="dialog"
        >
          <div className="absolute inset-0" onClick={() => setLocalLivingModal(false)} aria-label="Close modal" />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl md:max-w-3xl lg:max-w-2xl mx-4 md:mx-0 p-0 overflow-hidden animate-fadeIn flex flex-col max-h-[90vh]">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold z-10"
              onClick={() => setLocalLivingModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="p-6 md:p-10 overflow-y-auto w-full flex-1">
              <div className="flex flex-col items-start w-full">
                <h3 className="font-bold text-2xl md:text-3xl mb-1 flex items-center gap-2">🇲🇽 <span>Local Living: 1 Country, 3 Cities</span></h3>
                <div className="text-base md:text-lg font-semibold text-gray-700 mb-2">Explore Mexico at your pace - from beach to highlands to city life</div>
                <div className="text-sm text-gray-500 mb-6 font-medium">Duration: 10 weeks (Playa 4w, Oaxaca 2w, CDMX 4w)</div>
                <div className="flex items-center gap-2 mb-2 mt-2">
                  <span className="text-xl">🗺️</span>
                  <span className="font-bold text-lg">Itinerary Overview</span>
                </div>
                {/* Month 1 */}
                <div className="mt-4 mb-4">
                  <div className="font-bold text-base md:text-lg mb-1">Month 1: Playa del Carmen – Beach + Balance (4 weeks)</div>
                  <div className="italic text-gray-600 text-sm mb-1">Vibe: Coastal, relaxed, expat-friendly</div>
                  <div className="font-semibold text-gray-700 mb-1">Highlights:</div>
                  <ul className="list-disc ml-5 text-gray-700 text-base space-y-1">
                    <li>Daily coworking by the sea</li>
                    <li>Weekend escapes to cenotes or Cozumel</li>
                    <li>Beach yoga & taco tours 🌮</li>
                    <li>Great base to settle in and unwind</li>
                    <li>Consistent WiFi, walkable lifestyle</li>
                  </ul>
                  {/* Image Grid for Playa del Carmen */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 mb-2 w-full">
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                        <img src={process.env.PUBLIC_URL + "/Playa beach.jpeg"} alt="Beach coworking in Playa" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Beach day in Playa del Carmen</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                        <img src={process.env.PUBLIC_URL + "/Playa cenote.jpeg"} alt="Jungle cenote adventure" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Jungle cenote adventure</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                        <img src={process.env.PUBLIC_URL + "/Playa dive.jpg"} alt="Scuba diving with sea turtles" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Scuba diving with sea turtles</span>
                    </div>
                  </div>
                </div>
                {/* Month 2 */}
                <div className="mb-4">
                  <div className="font-bold text-base md:text-lg mb-1">Month 2: Oaxaca City – Culture & Cuisine (2 weeks)</div>
                  <div className="italic text-gray-600 text-sm mb-1">Vibe: Creative, traditional, welcoming</div>
                  <div className="font-semibold text-gray-700 mb-1">Highlights:</div>
                  <ul className="list-disc ml-5 text-gray-700 text-base space-y-1">
                    <li>Food & mezcal immersion</li>
                    <li>Artisan markets + cultural workshops</li>
                    <li>Day trips to Hierve el Agua or Monte Albán</li>
                    <li>Cozy coworking cafés in colonial buildings</li>
                    <li>Slow mornings, colorful evenings 🎨</li>
                  </ul>
                  {/* Image Grid for Month 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 mb-2 w-full">
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                        <img src={process.env.PUBLIC_URL + "/Oaxaca  market.jpg"} alt="Oaxaca market" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Oaxaca market</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                        <img src={process.env.PUBLIC_URL + "/Oaxaca  views.jpg"} alt="Mountain views" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Mountain views</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                        <img src={process.env.PUBLIC_URL + "/Oaxaca  temples.jpg"} alt="Ancient temples" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Ancient temples</span>
                    </div>
                  </div>
                </div>
                {/* Month 3 */}
                <div className="mb-4">
                  <div className="font-bold text-base md:text-lg mb-1">Month 3: Mexico City – Buzz & Big Energy (4 weeks)</div>
                  <div className="italic text-gray-600 text-sm mb-1">Vibe: Dynamic, modern, vibrant</div>
                  <div className="font-semibold text-gray-700 mb-1">Highlights:</div>
                  <ul className="list-disc ml-5 text-gray-700 text-base space-y-1">
                    <li>Rooftop coworking with skyline views</li>
                    <li>World-class food, museums, nightlife</li>
                    <li>Weekend trips to Teotihuacán or nearby pueblos</li>
                    <li>Trendy neighbourhoods (Condesa, Roma)</li>
                    <li>Final-month energy boost 🚀</li>
                  </ul>
                  {/* Image Grid for Month 3 */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 mb-2 w-full">
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                        <img src={process.env.PUBLIC_URL + "/Mexico City Teotihuacán.jpeg"} alt="Teotihuacán pyramids" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Teotihuacán pyramids</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                        <img src={process.env.PUBLIC_URL + "/Mexico City building.jpg"} alt="Modern cityscape" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Modern cityscape</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                        <img src={process.env.PUBLIC_URL + "/Mexico City food market.jpg"} alt="Food market" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Food market</span>
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-end mt-6">
                  <button
                    className="border border-gray-300 text-gray-700 rounded-xl px-8 py-3 font-semibold hover:bg-gray-100 transition"
                    onClick={() => setLocalLivingModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* OOH Escape: Bali Modal */}
      {baliModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm transition-all"
          aria-modal="true"
          role="dialog"
        >
          <div className="absolute inset-0" onClick={() => setBaliModal(false)} aria-label="Close modal" />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl md:max-w-3xl lg:max-w-2xl mx-4 md:mx-0 p-0 overflow-hidden animate-fadeIn flex flex-col max-h-[90vh]">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold z-10"
              onClick={() => setBaliModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="p-6 md:p-10 overflow-y-auto w-full flex-1">
              <div className="flex flex-col items-start w-full">
                <h3 className="font-bold text-2xl md:text-3xl mb-1 flex items-center gap-2">🇮🇩 OOH Escape: Bali</h3>
                <div className="text-base md:text-lg font-semibold text-gray-700 mb-2">Designed for Out-of-Hours teams working early-morning SAST shifts</div>
                <div className="text-base text-gray-700 mb-2">Base your team in one long-term villa, rotate members in and out, and explore Bali on the weekends.</div>
                <div className="text-sm text-gray-500 mb-6 font-medium">Duration: 12 weeks (Canggu-based with optional island trips)</div>
                <div className="flex items-center gap-2 mb-2 mt-2">
                  <span className="text-xl">🗺️</span>
                  <span className="font-bold text-lg">Itinerary Overview</span>
                </div>
                {/* Base Section */}
                <div className="mt-4 mb-2">
                  <div className="font-bold text-base md:text-lg mb-1">Base: Canggu – Comfort, Community & Coworking</div>
                  <div className="text-xs text-gray-400 mb-1">Timezone: UTC +8 (6 AM local aligns with 1 AM SAST shifts)</div>
                  <div className="italic text-gray-600 text-sm mb-1">Vibe: Beachy, social, remote work hub</div>
                  <div className="font-semibold text-gray-700 mb-1">Highlights:</div>
                  <ul className="list-disc ml-5 text-gray-700 text-base space-y-1">
                    <li>Long-term villa rental with private rooms</li>
                    <li>Rooftop coworking or poolside workspaces</li>
                    <li>Sunrise shifts, afternoon surf or gym</li>
                    <li>Vibrant café scene + weekly team dinners</li>
                    <li>Easy to onboard rotating teammates</li>
                  </ul>
                </div>
                {/* Curated Weekend Trips */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1 mt-2">
                    <span className="text-xl">🧭</span>
                    <span className="font-bold text-lg">Curated Weekend Trips (Optional Add-ons):</span>
                  </div>
                  <ul className="list-disc ml-5 text-gray-700 text-base space-y-1">
                    <li>Ubud Getaway – Jungle villas, yoga, waterfalls</li>
                    <li>East Bali Escape – Amed or Sidemen for hiking & diving</li>
                    <li>Uluwatu Vibes – Clifftop sunsets & beach clubs</li>
                    <li>Nusa Islands – Snorkeling with manta rays 🐠</li>
                    <li>Volcano Trek – Sunrise hike on Mt. Batur</li>
                  </ul>
                </div>
                {/* Sample Views Section */}
                <div className="font-bold text-lg mb-2 mt-6 flex items-center gap-2">📸 <span>Sample Views</span></div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2 w-full">
                  <div className="flex flex-col items-center">
                    <div className="w-full h-36 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                      <img src={process.env.PUBLIC_URL + "/bali beach.jpg"} alt="Coworking in Canggu" className="object-cover w-full h-full" />
                    </div>
                    <span className="text-xs text-gray-500 mt-2">Beachside cafes in Canggu</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full h-36 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                      <img src={process.env.PUBLIC_URL + "/bali vila.jpg"} alt="Jungle escapes in Ubud" className="object-cover w-full h-full" />
                    </div>
                    <span className="text-xs text-gray-500 mt-2">Private pool villas in Ubud</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full h-36 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                      <img src={process.env.PUBLIC_URL + "/bali temp.jpeg"} alt="Sunsets in Uluwatu" className="object-cover w-full h-full" />
                    </div>
                    <span className="text-xs text-gray-500 mt-2">Ocean temple views in Uluwatu</span>
                  </div>
                </div>
                <div className="flex w-full justify-end mt-6">
                  <button
                    className="border border-gray-300 text-gray-700 rounded-xl px-8 py-3 font-semibold hover:bg-gray-100 transition"
                    onClick={() => setBaliModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Reconnect in South Africa Modal */}
      {saModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm transition-all"
          aria-modal="true"
          role="dialog"
        >
          <div className="absolute inset-0" onClick={() => setSaModal(false)} aria-label="Close modal" />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl md:max-w-3xl lg:max-w-2xl mx-4 md:mx-0 p-0 overflow-hidden animate-fadeIn flex flex-col max-h-[90vh]">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold z-10"
              onClick={() => setSaModal(false)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="p-6 md:p-10 overflow-y-auto w-full flex-1">
              <div className="flex flex-col items-start w-full text-left">
                <h3 className="font-bold text-2xl md:text-3xl mb-1 flex items-center gap-2">🇿🇦 <span>Reconnect in South Africa</span></h3>
                <div className="text-base md:text-lg font-semibold text-gray-700 mb-2">A cultural exchange experience for Netsurit's US team</div>
                <div className="text-base text-gray-700 mb-2">Experience the people, culture, and context behind your daily collaboration.</div>
                <div className="text-sm text-gray-500 mb-6 font-medium">Duration: 10 weeks</div>
                <div className="flex items-center gap-2 mb-2 mt-2">
                  <span className="text-xl">🗺️</span>
                  <span className="font-bold text-lg">Itinerary Overview</span>
                </div>
                {/* Weeks 1–4: Cape Town */}
                <div className="mt-4 mb-4">
                  <div className="font-bold text-base md:text-lg mb-1">Weeks 1–4: Cape Town – Connection & Kickoff</div>
                  <div className="italic text-gray-600 text-sm mb-1">Vibe: Scenic, inspiring, collaborative</div>
                  <div className="font-semibold text-gray-700 mb-1">Highlights:</div>
                  <ul className="list-disc ml-5 text-gray-700 text-base mb-0 space-y-1 leading-snug">
                    <li>Work from a modern accommodation or coworking hub</li>
                    <li>Explore Table Mountain, Cape Point & wine country</li>
                    <li>Group dinners, coastal drives, and casual connection</li>
                    <li>Build strong in-person relationships with the SA team</li>
                    <li>Balance productive work time with local discovery</li>
                  </ul>
                  {/* Image Grid for Cape Town */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 mb-2 w-full">
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                        <img src={process.env.PUBLIC_URL + "/capetown bokaap.jpg"} alt="Bokaap neighborhood" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Bokaap neighborhood</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                        <img src={process.env.PUBLIC_URL + "/capetown clifton.jpg"} alt="Clifton beaches" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Clifton beaches</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                        <img src={process.env.PUBLIC_URL + "/capetown berg.jpg"} alt="Table Mountain" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Table Mountain</span>
                    </div>
                  </div>
                </div>
                {/* Weeks 5–6: Garden Route */}
                <div className="mb-4">
                  <div className="font-bold text-base md:text-lg mb-1">Weeks 5–6: Garden Route – Reset & Recharge</div>
                  <div className="italic text-gray-600 text-sm mb-1">Vibe: Nature, reflection, team-bonding</div>
                  <div className="font-semibold text-gray-700 mb-1">Highlights:</div>
                  <ul className="list-disc ml-5 text-gray-700 text-base mb-0 space-y-1 leading-snug">
                    <li>Travel through Knysna, Wilderness & Tsitsikamma</li>
                    <li>Safari game drive, forest hikes, and ocean views</li>
                    <li>Lodge stays and shared fireside evenings</li>
                    <li>Optional unplugged workdays or team offsites</li>
                    <li>Space to reflect, recharge, and deepen connection</li>
                  </ul>
                  {/* Image Grid for Garden Route */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 mb-2 w-full">
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                        <img src={process.env.PUBLIC_URL + "/Garden safari.jpg"} alt="Safari drive" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Safari drive</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                        <img src={process.env.PUBLIC_URL + "/Garden swim.jpeg"} alt="Forest swim" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Forest swim</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                        <img src={process.env.PUBLIC_URL + "/Garden train.jpg"} alt="Scenic train ride" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Scenic train ride</span>
                    </div>
                  </div>
                </div>
                {/* Weeks 7–10: Johannesburg */}
                <div className="mb-4">
                  <div className="font-bold text-base md:text-lg mb-1">Weeks 7–10: Johannesburg – Collaboration & Wrap-Up</div>
                  <div className="italic text-gray-600 text-sm mb-1">Vibe: Business-focused, energising, high-context</div>
                  <div className="font-semibold text-gray-700 mb-1">Highlights:</div>
                  <ul className="list-disc ml-5 text-gray-700 text-base mb-0 space-y-1 leading-snug">
                    <li>Strategic planning and team culture sessions</li>
                    <li>Explore Johannesburg's creative districts and food scene</li>
                    <li>Deepen cross-team collaboration and alignment</li>
                    <li>Final celebration dinner with the full SA team</li>
                  </ul>
                  {/* Image Grid for Johannesburg */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 mb-2 w-full">
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                        <img src={process.env.PUBLIC_URL + "/joburg mandela.jpg"} alt="Mandela Square" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Mandela Square</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                        <img src={process.env.PUBLIC_URL + "/joburg rugby.jpg"} alt="Rugby match" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Rugby match</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-full h-36 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                        <img src={process.env.PUBLIC_URL + "/joburg tower.jpg"} alt="Hillbrow Tower" className="object-cover w-full h-full" />
                      </div>
                      <span className="text-xs text-gray-500 mt-2">Hillbrow Tower</span>
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-end mt-6">
                  <button
                    className="border border-gray-300 text-gray-700 rounded-xl px-8 py-3 font-semibold hover:bg-gray-100 transition"
                    onClick={() => setSaModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* The Value for Netsurit Section (Two-Card Layout) */}
      <section className={sectionPad + " max-w-4xl mx-auto"}>
        <h2 className="font-bold text-2xl mb-8 flex items-center gap-2 text-center justify-center">💡 The Value for Netsurit</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-start shadow-sm">
            <span className="text-3xl mb-2">🚀</span>
            <span className="font-bold text-lg mb-1">Keep Your Best People</span>
            <span className="italic text-base mb-3">Engaged teams stay longer and perform better.</span>
            <ul className="list-disc ml-5 text-gray-700 text-base space-y-2 mb-4">
              <li>Energized teams stay focused and committed</li>
              <li>Lower attrition means less time and money spent on hiring</li>
              <li>Stronger relationships lead to better work and a healthier culture</li>
            </ul>
          </div>
          {/* Card 2 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-start shadow-sm">
            <span className="text-3xl mb-2">🌱</span>
            <span className="font-bold text-lg mb-1">Better Balance, Better Work</span>
            <span className="italic text-base mb-3">The right energy starts with the right environment.</span>
            <ul className="list-disc ml-5 text-gray-700 text-base space-y-2 mb-4">
              <li>New settings boost creativity, focus, and connection</li>
              <li>Space to reset improves mental clarity and team performance</li>
              <li>Shared experiences build trust, alignment, and culture</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Minimal Divider after The Value for Netsurit */}
      <div className="flex justify-center my-1">
        <div className="h-px w-12 bg-gray-200 rounded-full"></div>
      </div>

      {/* Adventure Meets Strategy Statement Card */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-8 mb-10">
        <div className="w-full rounded-2xl shadow-lg bg-gradient-to-br from-[#f8f6f3] via-[#f3ede7] to-[#e9e4db] border border-gray-200 p-8 md:p-12 flex flex-col items-center text-center relative transition-all" style={{paddingBottom: '32px'}}>
          <h2 className="font-extrabold text-3xl md:text-4xl mb-4 tracking-tight flex items-center gap-2 justify-center" style={{letterSpacing: '0.01em', marginBottom: '24px'}}>
            <span role="img" aria-label="globe">🌍</span> <span>Adventure Meets Strategy</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg md:text-xl text-gray-800 font-medium text-center" style={{lineHeight: 1.6}}>
              Great teams aren't built in boardrooms.
            </p>
            <p className="text-lg md:text-xl text-gray-800 font-medium text-center" style={{lineHeight: 1.6}}>
              They grow through shared experiences, fresh perspectives, and real connection.
            </p>
            <p className="text-lg md:text-xl text-gray-500 font-medium text-center" style={{lineHeight: 1.6}}>
              This isn't a holiday. It's about working well from somewhere new.
            </p>
          </div>
          <div className="font-bold text-xl mb-2 flex items-center gap-2 justify-center mt-4">
            <span role="img" aria-label="globe">🌐</span> <span>Suggested Timing</span>
          </div>
          <ul className="text-gray-700 text-base space-y-2 mb-2 text-left md:text-center mx-auto" style={{maxWidth:'600px'}}>
            <li className="flex items-start gap-2 justify-center"><span className="text-lg">📅</span><span><span className="font-semibold">Feb – April</span>: Ideal season for South America (Argentina, Brazil, Colombia)</span></li>
            <li className="flex items-start gap-2 justify-center"><span className="text-lg">🌴</span><span><span className="font-semibold">May – July</span>: Escape the SA winter with trips to Europe or Southeast Asia</span></li>
            <li className="flex items-start gap-2 justify-center"><span className="text-lg">🌤</span><span><span className="font-semibold">Oct – Dec</span>: Great for Southeast Asia, Mexico, or summer in Cape Town</span></li>
            <li className="flex items-start gap-2 justify-center"><span className="text-lg">🎉</span><span><span className="font-semibold">Dec – Jan</span>: Best for SA-based retreats, bring global teammates to Cape Town</span></li>
            <li className="flex items-start gap-2 justify-center"><span className="text-lg">🗓</span><span><span className="font-semibold">Year-round</span>: OOH bases in Southeast Asia</span></li>
          </ul>
        </div>
      </section>

      {/* Gallery Section: Your Next Office */}
      <section className="py-16 max-w-6xl mx-auto">
        <h2 className="font-bold text-3xl mb-2 text-center">✨ Not Your Average Office</h2>
        <p className="text-center text-gray-500 mb-10">Where work meets lifestyle - real spaces, local flavour, and everyday magic that makes remote life actually work.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* 1. 🪟 Your own cozy workspace */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-2xl shadow-lg w-full bg-white">
              <img src={process.env.PUBLIC_URL + "/gallary room.jpg"} alt="Gallery Room" className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <span className="mt-3 text-gray-700 text-base text-center font-medium">🪟 Your own cozy workspace</span>
          </div>
          {/* 2. 🌿 Jungle escapes in the Amazon */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-2xl shadow-lg w-full bg-white">
              <img src={process.env.PUBLIC_URL + "/gallary act1.jpeg"} alt="Gallery Activity 1" className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <span className="mt-3 text-gray-700 text-base text-center font-medium">🏯 Explore temples in Uluwatu</span>
          </div>
          {/* 3. 🔥 Asado-style BBQ with locals */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-2xl shadow-lg w-full bg-white">
              <img src={process.env.PUBLIC_URL + "/gallary culture.jpg"} alt="Gallery Culture" className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <span className="mt-3 text-gray-700 text-base text-center font-medium">🔥 Asado-style BBQ with locals</span>
          </div>
          {/* 4. 🖥 Desk with a view */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-2xl shadow-lg w-full bg-white">
              <img src={process.env.PUBLIC_URL + "/gallary room2.jpg"} alt="Gallery Room 2" className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <span className="mt-3 text-gray-700 text-base text-center font-medium">🖥 Desk with a view</span>
          </div>
          {/* 5. 🌊 Swim breaks at the cenote */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-2xl shadow-lg w-full bg-white">
              <img src={process.env.PUBLIC_URL + "/gallary activity.jpeg"} alt="Gallery Activity" className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <span className="mt-3 text-gray-700 text-base text-center font-medium">🌊 Swim breaks at the cenote</span>
          </div>
          {/* 6. 🎈 Sunrise over Teotihuacan */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-2xl shadow-lg w-full bg-white">
              <img src={process.env.PUBLIC_URL + "/gallary (1).jpeg"} alt="Gallery 1" className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <span className="mt-3 text-gray-700 text-base text-center font-medium">🎈 Sunrise over Teotihuacan</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm py-8">
        © 2025 Netsurit x Southbnd
      </footer>
    </div>
  );
} 