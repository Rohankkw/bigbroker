import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaTimes, FaBed, FaRuler, FaChevronLeft, FaChevronRight, FaPhone, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import type { Property } from "@/data/mockData";

interface PropertyDetailsModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PropertyDetailsModal({ property, isOpen, onClose }: PropertyDetailsModalProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleNextPhoto = () => {
    if (property?.photos) {
      setCurrentPhotoIndex((prev) => (prev + 1) % property.photos.length);
    }
  };

  const handlePrevPhoto = () => {
    if (property?.photos) {
      setCurrentPhotoIndex((prev) => (prev - 1 + property.photos.length) % property.photos.length);
    }
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentPhotoIndex(index);
  };

  const getCurrentPhoto = () => property?.photos[currentPhotoIndex] || property?.imageUrl || "";

  return (
    <AnimatePresence>
      {isOpen && property && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card-dark border border-border-dark rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto w-full"
          >
            {/* Hero Image with Carousel */}
            <div className="relative aspect-video overflow-hidden group">
              {/* Main Image */}
              <motion.img
                key={currentPhotoIndex}
                src={getCurrentPhoto()}
                alt={property.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-brand-gold text-brand-dark hover:scale-110 transition"
              >
                <FaTimes size={20} />
              </button>

              {/* Left Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevPhoto();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition opacity-0 group-hover:opacity-100"
              >
                <FaChevronLeft size={24} />
              </button>

              {/* Right Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextPhoto();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition opacity-0 group-hover:opacity-100"
              >
                <FaChevronRight size={24} />
              </button>

              {/* Photo Counter */}
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/60 text-white text-sm font-mono">
                {currentPhotoIndex + 1}/{property.photos.length}
              </div>

              {/* Header */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="font-display text-4xl font-bold text-white mb-2">{property.title}</h1>
                    <div className="flex items-center gap-2 text-white/90">
                      <FaMapMarkerAlt className="text-brand-gold" /> {property.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-brand-gold">{property.priceLabel}</div>
                    <div className="text-sm text-white/70 mt-1">{property.pricePerSqft}/sq.ft</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="px-6 py-4 border-b border-border-dark overflow-x-auto">
              <div className="flex gap-1.5 min-w-max">
                {property.photos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleThumbnailClick(idx);
                    }}
                    className={`flex-shrink-0 w-[60px] h-[45px] rounded overflow-hidden border-2 transition ${
                      idx === currentPhotoIndex ? "border-brand-gold" : "border-border-dark hover:border-foreground/40"
                    }`}
                  >
                    <img src={photo} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Key Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 pb-8 border-b border-border-dark">
                <DetailCard icon={<FaBed className="text-brand-gold" />} label={property.bhk} value="Configuration" />
                <DetailCard icon={<FaRuler className="text-brand-gold" />} label={property.area} value="Carpet Area" />
                <DetailCard icon={<FaRuler className="text-brand-gold" />} label={property.builtUpArea} value="Built-up Area" />
                <DetailCard icon={<FaRuler className="text-brand-gold" />} label={property.floor} value="Floor" />
              </div>

          {/* Property Overview */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-brand-gold">📋</span> Property Details
              </h3>
              <div className="space-y-3">
                <DetailRow label="Property Type" value={property.type} />
                <DetailRow label="Transaction Type" value={property.transaction} />
                <DetailRow label="Age of Building" value={property.ageOfBuilding} />
                <DetailRow label="Furnishing Status" value={property.furnishing} />
                <DetailRow label="Facing" value={property.facing} />
                <DetailRow label="Possession" value={property.possession} />
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-brand-gold">🏢</span> Building Details
              </h3>
              <div className="space-y-3">
                <DetailRow label="Total Floors" value={property.totalFloors} />
                <DetailRow label="Apartment Per Floor" value={property.apartmentPerFloor} />
                <DetailRow label="Status" value={property.status} />
                <DetailRow label="Maintenance (Monthly)" value={property.maintenance} />
                <DetailRow label="Under Construction" value={property.underConstruction ? "Yes" : "No"} />
                <DetailRow label="RERA Registered" value={property.reraRegistered ? "Yes" : "No"} />
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="mb-8 pb-8 border-b border-border-dark">
            <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-brand-gold">✨</span> Amenities & Features
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {property.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="text-brand-gold">•</span> {amenity}
                </div>
              ))}
            </div>
          </div>

              {/* Parking & Utilities */}
              <div className="grid md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-border-dark">
                <div>
                  <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                    <span className="text-brand-gold">🅿️</span> Parking & Utilities
                  </h3>
                  <div className="space-y-3">
                    <DetailRow label="Parking Spaces" value={property.parking} />
                    <DetailRow label="Water Supply" value={property.waterSupply} />
                    <DetailRow label="Electricity Backup" value={property.electricityBackup} />
                    <DetailRow label="Security" value={property.security} />
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                    <span className="text-brand-gold">📈</span> Investment Details
                  </h3>
                  <div className="space-y-3">
                    <DetailRow label="Expected Appreciation" value={property.appreciation} />
                    <DetailRow label="Rental Yield (Annual)" value={property.rentalYield} />
                    <DetailRow label="Market Value" value={property.marketValue} />
                    <DetailRow label="Best For" value={property.bestFor} />
                  </div>
                </div>
              </div>

          {/* Description */}
          {property.description && (
            <div className="mb-8 pb-8 border-b border-border-dark">
              <h3 className="font-display font-bold text-lg mb-4">📝 Description</h3>
              <p className="text-foreground/80 leading-relaxed">{property.description}</p>
            </div>
          )}

          {/* Contact Section */}
          <div className="mb-8 pb-8 border-b border-border-dark">
            <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-brand-gold">📞</span> Contact Agent
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 rounded-lg bg-brand-gold text-brand-dark font-semibold hover:scale-105 transition">
                <FaPhone size={16} /> Call Agent
              </button>
              <button className="flex items-center justify-center gap-2 py-3 rounded-lg bg-green-600 text-white font-semibold hover:scale-105 transition">
                <FaWhatsapp size={16} /> WhatsApp
              </button>
            </div>
          </div>

          {/* Map Section */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-brand-gold">📍</span> Location & Nearby
            </h3>
            
            {/* Static Map Image */}
            <div className="mb-6 rounded-lg overflow-hidden border border-border-dark bg-background-dark flex items-center justify-center">
              <img
                src={`https://static-maps.yandex.ru/1.x/?ll=${property.longitude},${property.latitude}&size=600,250&z=15&pt=${property.longitude},${property.latitude},pm2rdm&style=dark`}
                alt="Property Location Map"
                className="w-full h-[250px] object-cover"
              />
            </div>

            {/* POI Pills */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <POIPill icon="🏫" label="School" distance="~800m" />
              <POIPill icon="🏥" label="Hospital" distance="~1.2km" />
              <POIPill icon="🚉" label="Station" distance="~1.5km" />
              <POIPill icon="🛒" label="Market" distance="~600m" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
      )}
    </AnimatePresence>
  );
}

function DetailCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-background-dark border border-border-dark rounded-lg p-3 text-center">
      <div className="text-2xl mb-2 flex justify-center">{icon}</div>
      <div className="font-display font-bold text-foreground">{label}</div>
      <div className="text-xs text-foreground/60 mt-1">{value}</div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2">
      <span className="text-foreground/70 text-sm">{label}:</span>
      <span className="font-semibold text-foreground">{value}</span>
    </div>
  );
}

function POIPill({ icon, label, distance }: { icon: string; label: string; distance: string }) {
  return (
    <div className="bg-background-dark border border-border-dark rounded-full px-4 py-2 flex flex-col items-center justify-center text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <div className="font-semibold text-xs text-foreground">{label}</div>
      <div className="text-xs text-brand-gold mt-0.5">{distance}</div>
    </div>
  );
}
