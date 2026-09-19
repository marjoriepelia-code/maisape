/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ApartmentsSection } from './components/ApartmentsSection';
import { FormsSection } from './components/FormsSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { FinancingCalculator } from './components/FinancingCalculator';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { InterestModal } from './components/InterestModal';
import { FloatingCta } from './components/FloatingCta';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApartmentId, setSelectedApartmentId] = useState<string | null>(null);

  const handleOpenModal = (apartmentId?: string) => {
    setSelectedApartmentId(apartmentId || null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedApartmentId(null);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Navigation */}
      <Navbar onOpenInterestModal={handleOpenModal} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenInterestModal={handleOpenModal} />

        {/* Featured Apartments & Properties */}
        <ApartmentsSection onOpenModal={handleOpenModal} />

        {/* The 3 Dedicated Google Forms Section */}
        <FormsSection onOpenModal={handleOpenModal} />

        {/* Condominium Amenities */}
        <AmenitiesSection onOpenModal={() => handleOpenModal()} />

        {/* Interactive Financing Simulator */}
        <FinancingCalculator onOpenModal={handleOpenModal} />

        {/* Neighborhood & Location */}
        <LocationSection onOpenModal={() => handleOpenModal()} />

        {/* FAQ */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Floating CTA */}
      <FloatingCta onOpenModal={handleOpenModal} />

      {/* "Tenho Interesse" Selector & Preview Modal */}
      <InterestModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedApartmentId={selectedApartmentId}
      />
    </div>
  );
}

