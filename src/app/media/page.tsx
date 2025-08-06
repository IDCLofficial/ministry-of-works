'use client';

import React, { useState } from "react";
import MediaHeroSection from "./MediaHeroSection";
import MediaGalleryGrid from "./MediaGalleryGrid";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import MediaSearchBar from "./MediaSearchBar";

const mediaItems = [
  {
    image: "/images/works2.png",
    title: "Control Post Fly‑Over Under Construction in Owerri",
    isVideo: false,
  },
  {
    image: "/images/works5.png",
    title: "Dual‑Carriageway: Orlu‑Owerri‑Ebeiri‑Umuowa‑Nkume Road Completed",
    isVideo: false,
  },
  {
    image: "/images/comm2.png",
    title: "Commissioner Ralph Nwosu at Project Inspection Tour",
    isVideo: false,
  },
  {
    image: "/images/works1.png",
    title: "Tender Notice: Rehabilitation of 46 km Owerri‑Mbaise‑Umuahia Road",
    isVideo: false,
  },
];

export default function MediaPage() {
  const [search, setSearch] = useState("");

  const filteredItems = mediaItems.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen w-full bg-[#F7F9FA] flex flex-col">
      <MediaHeroSection
        title="See Our Works in Progress"
        subtitle="Explore the gallery of ongoing and completed infrastructure projects under the Ministry of Works & Infrastructural Development, Imo State."
        backgroundImage="/images/gradient.png"
        searchBar={<MediaSearchBar placeholder="Search projects..." onSearch={setSearch} />}
      />
      
      <section className="w-full max-w-7xl mx-auto py-12 px-4">
        <div className="mt-8">
          {filteredItems.length === 0 ? (
            <div className="text-center text-gray-500 text-lg font-semibold py-12">
              No results found
            </div>
          ) : (
            <MediaGalleryGrid items={filteredItems} />
          )}
        </div>
      </section>

      <CTASection
        heading="Support Our State‑wide Infrastructure Renewal"
        subtext="Join us as we enhance road connectivity, ease traffic congestion, and upgrade critical urban infrastructure across Imo State."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />

      <Footer />
    </main>
  );
}
