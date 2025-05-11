import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

const Contact: React.FC = () => {
  return (
    <>
      <Hero 
        title="Contact Us"
        subtitle="Reach out to discuss your vision or visit our workshop"
        backgroundImage="https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg"
        height="short"
      />
      
      {/* Contact Information */}
      <section className="section py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-primary-50 p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-800 mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Location</h3>
              <p className="text-gray-700 mb-2">123 Craftsman Way</p>
              <p className="text-gray-700 mb-2">Artisan Valley, CA 90210</p>
              <p className="text-gray-700">United States</p>
            </motion.div>
            
            <motion.div
              className="bg-primary-50 p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-800 mb-6">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Phone & Email</h3>
              <p className="text-gray-700 mb-2">
                <a href="tel:+15551234567" className="hover:text-primary-700 transition-colors">
                  (555) 123-4567
                </a>
              </p>
              <p className="text-gray-700">
                <a href="mailto:info@artisanfurnishings.com" className="hover:text-primary-700 transition-colors">
                  info@artisanfurnishings.com
                </a>
              </p>
            </motion.div>
            
            <motion.div
              className="bg-primary-50 p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-800 mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Opening Hours</h3>
              <p className="text-gray-700 mb-2">Monday - Friday: 9am - 6pm</p>
              <p className="text-gray-700 mb-2">Saturday: 10am - 4pm</p>
              <p className="text-gray-700">Sunday: Closed</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map & Contact Form */}
      <section className="section pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div>
              <SectionTitle 
                title="Visit Our Workshop"
                subtitle="See our craftsmanship in person"
                centered={false}
              />
              
              <motion.div
                className="mt-8 bg-gray-200 w-full h-[500px] flex items-center justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center p-6">
                  <MapPin size={40} className="mx-auto mb-4 text-primary-700" />
                  <p className="text-gray-700">
                    An interactive map would be displayed here, showing the location of the workshop.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4">Workshop Tours</h3>
                <p className="text-gray-700 mb-4">
                  We welcome visitors to tour our workshop and see our craftspeople at work. Tours are available by appointment on Tuesdays and Thursdays.
                </p>
                <p className="text-gray-700">
                  To schedule a tour, please call us at <a href="tel:+15551234567" className="text-primary-700 hover:text-primary-800 transition-colors">(555) 123-4567</a> or email <a href="mailto:tours@artisanfurnishings.com" className="text-primary-700 hover:text-primary-800 transition-colors">tours@artisanfurnishings.com</a>.
                </p>
              </motion.div>
            </div>
            
            {/* Contact Form */}
            <div>
              <SectionTitle 
                title="Send Us a Message"
                subtitle="We'll respond within 24 hours"
                centered={false}
              />
              
              <motion.form 
                className="mt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="input w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="input w-full"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone (Optional)</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="input w-full"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="input w-full"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    className="input w-full"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary flex items-center">
                  <Send size={16} className="mr-2" />
                  <span>Send Message</span>
                </button>
              </motion.form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;