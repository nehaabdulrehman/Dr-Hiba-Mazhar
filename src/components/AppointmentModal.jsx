import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, HeartHandshake } from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    treatment: 'General Consultation',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1C2925]/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#F8F6F1] border border-white/80 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#E8F0EA] text-[#1C2925] hover:bg-[#1F5C4F] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-10 text-center flex flex-col items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-16 h-16 rounded-full bg-[#1F5C4F] text-white flex items-center justify-center mb-4 shadow-lg"
                >
                  <CheckCircle2 className="w-10 h-10" />
                </motion.div>
                <h3 className="font-serif text-2xl font-bold text-[#1C2925] mb-2">
                  Appointment Requested!
                </h3>
                <p className="text-sm text-[#66736D] max-w-xs">
                  Thank you for reaching out to Dr. Hiba Mazhar. Our clinic coordinator will contact you shortly to confirm your slot.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#1F5C4F] text-white flex items-center justify-center shadow-md">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#1C2925]">
                      Book Your Consultation
                    </h3>
                    <p className="text-xs text-[#66736D]">
                      Personalized & gentle homeopathic care with Dr. Hiba Mazhar
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1C2925] uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#66736D] absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Johnson"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#8FAF9A]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F5C4F]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1C2925] uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#66736D] absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#8FAF9A]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F5C4F]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1C2925] uppercase tracking-wider mb-1">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-[#66736D] absolute left-3.5 top-3.5" />
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#8FAF9A]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F5C4F]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1C2925] uppercase tracking-wider mb-1">
                      Treatment Area / Care Type
                    </label>
                    <select
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#8FAF9A]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F5C4F]"
                    >
                      <option value="General Consultation">General Homeopathic Consultation</option>
                      <option value="Chronic Conditions">Chronic Illness & Immunity Care</option>
                      <option value="Women's Wellness">Women's Wellness & Hormonal Balance</option>
                      <option value="Pediatric Care">Pediatric Gentle Homeopathy</option>
                      <option value="Skin & Allergy">Skin Health & Allergy Relief</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1C2925] uppercase tracking-wider mb-1">
                      Brief Note (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Share any specific symptoms or health goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#8FAF9A]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F5C4F]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#1F5C4F] hover:bg-[#17483E] text-white text-sm font-semibold shadow-lg shadow-[#1F5C4F]/25 hover:shadow-xl transition-all duration-200"
                  >
                    Confirm Appointment Request →
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
