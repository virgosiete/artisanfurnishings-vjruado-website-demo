import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

const RequestQuote: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data: any) => {
    console.log(data);
    // In a real application, this would send the data to a server
    alert("Thank you for your request. We'll be in touch shortly to discuss your project.");
  };

  return (
    <>
      <Hero 
        title="Request a Quote"
        subtitle="Tell us about your project and we'll help bring your vision to life"
        backgroundImage="https://images.pexels.com/photos/6207818/pexels-photo-6207818.jpeg"
        height="short"
      />
      
      <section className="section py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <SectionTitle 
                title="Custom Quote Request"
                subtitle="Share your vision with us"
                centered={false}
              />
              
              <motion.form 
                className="mt-8"
                onSubmit={handleSubmit(onSubmit)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name *</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className={`input w-full ${errors.firstName ? 'border-red-500' : ''}`}
                      {...register('firstName', { required: true })}
                    />
                    {errors.firstName && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className={`input w-full ${errors.lastName ? 'border-red-500' : ''}`}
                      {...register('lastName', { required: true })}
                    />
                    {errors.lastName && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      className={`input w-full ${errors.email ? 'border-red-500' : ''}`}
                      {...register('email', { 
                        required: true, 
                        pattern: /^\S+@\S+$/i 
                      })}
                    />
                    {errors.email?.type === 'required' && <span className="text-red-500 text-sm mt-1">This field is required</span>}
                    {errors.email?.type === 'pattern' && <span className="text-red-500 text-sm mt-1">Please enter a valid email</span>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="input w-full"
                      {...register('phone')}
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                
                <div className="mb-6">
                  <label htmlFor="projectType" className="block text-gray-700 mb-2">Type of Furniture *</label>
                  <select 
                    id="projectType" 
                    className={`input w-full ${errors.projectType ? 'border-red-500' : ''}`}
                    {...register('projectType', { required: true })}
                  >
                    <option value="">Select an option</option>
                    <option value="dining">Dining Table/Chairs</option>
                    <option value="living">Living Room Furniture</option>
                    <option value="bedroom">Bedroom Furniture</option>
                    <option value="office">Office Furniture</option>
                    <option value="storage">Storage/Shelving</option>
                    <option value="custom">Custom Piece</option>
                    <option value="multiple">Multiple Pieces</option>
                  </select>
                  {errors.projectType && <span className="text-red-500 text-sm mt-1">Please select an option</span>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="timeframe" className="block text-gray-700 mb-2">Timeframe</label>
                  <select 
                    id="timeframe" 
                    className="input w-full"
                    {...register('timeframe')}
                  >
                    <option value="">Select an option</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6-12months">6-12 months</option>
                    <option value="12+months">Over 12 months</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="budget" className="block text-gray-700 mb-2">Estimated Budget</label>
                  <select 
                    id="budget" 
                    className="input w-full"
                    {...register('budget')}
                  >
                    <option value="">Select an option</option>
                    <option value="under5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="over50k">Over $50,000</option>
                  </select>
                </div>
                
                <div className="mb-8">
                  <label htmlFor="projectDescription" className="block text-gray-700 mb-2">Project Description *</label>
                  <textarea 
                    id="projectDescription" 
                    rows={6} 
                    className={`input w-full ${errors.projectDescription ? 'border-red-500' : ''}`}
                    placeholder="Please describe your vision for this piece, including any specific requirements, dimensions, materials, or design elements you have in mind."
                    {...register('projectDescription', { required: true })}
                  ></textarea>
                  {errors.projectDescription && <span className="text-red-500 text-sm mt-1">Please provide a description of your project</span>}
                </div>
                
                <div className="mb-8">
                  <label className="flex items-start">
                    <input 
                      type="checkbox" 
                      className="mt-1 mr-3"
                      {...register('newsletter')}
                    />
                    <span className="text-gray-700 text-sm">
                      I would like to receive occasional updates about new collections, design insights, and exclusive offers.
                    </span>
                  </label>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Submit Quote Request
                </button>
              </motion.form>
            </div>
            
            {/* Sidebar */}
            <div>
              <motion.div
                className="bg-primary-50 p-8 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-4">Our Process</h3>
                
                <div className="mb-6">
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary-800 font-medium">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Initial Consultation</h4>
                      <p className="text-sm text-gray-600">
                        We'll review your request and schedule a call or meeting to discuss your vision in detail.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary-800 font-medium">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Design Proposal</h4>
                      <p className="text-sm text-gray-600">
                        We'll create detailed design concepts and provide a comprehensive quote for your approval.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary-800 font-medium">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Crafting Process</h4>
                      <p className="text-sm text-gray-600">
                        Once approved, our artisans begin the meticulous process of creating your custom piece.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary-800 font-medium">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Delivery & Installation</h4>
                      <p className="text-sm text-gray-600">
                        We carefully deliver and install your finished piece in your space.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="bg-gray-100 p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-4">Have Questions?</h3>
                <p className="text-gray-700 mb-6">
                  If you'd like to speak with us before submitting a quote request, please don't hesitate to reach out.
                </p>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <span className="font-medium">Phone:</span> (555) 123-4567
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Email:</span> quotes@artisanfurnishings.com
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestQuote;