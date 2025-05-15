import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FilePlus, AlertCircle, FileCheck, Loader, Upload } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { supabase } from '../lib/supabase';
import { useFileInput } from '../components/hooks/use-file-input';
import { cn } from '../lib/utils';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  projectType: string;
  timeframe?: string;
  budget?: string;
  projectDescription: string;
  newsletter: boolean;
};

const RequestQuote: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [submitting, setSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  
  // File upload with custom hook
  const { 
    fileName, 
    error: fileError, 
    fileInputRef, 
    handleFileSelect, 
    clearFile,
    fileSize,
    fileObject
  } = useFileInput({
    maxSize: 500, // 500MB max
    accept: ".pdf,.dwg,.dxf,.dwf,.skp,.3ds,.max,.obj,.stl,.rvt,.rfa,.jpg,.jpeg,.png,.tiff,.bmp,.ai,.psd"
  });
  
  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + ' KB';
    else if (bytes < 1073741824) return (bytes / 1048576).toFixed(2) + ' MB';
    else return (bytes / 1073741824).toFixed(2) + ' GB';
  };
  
  const uploadFileToSupabase = async (quoteId: string): Promise<void> => {
    if (!fileObject) return;
    
    try {
      // Upload file to Supabase Storage
      const fileExt = fileObject.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
      const filePath = `${quoteId}/${fileName}`;
      
      const { error: uploadError } = await supabase.storage
        .from('files')
        .upload(filePath, fileObject);
      
      if (uploadError) {
        throw new Error(`Error uploading file: ${uploadError.message}`);
      }
      
      // Insert file record into quote_files table
      // can't use storage trigger for this operation because of this issue https://github.com/orgs/supabase/discussions/19017#discussioncomment-7934768
      // storage api might change in future again
      const { error: insertError } = await supabase
        .from('quote_files')
        .insert({
          quote_id: quoteId,
          file_name: fileObject.name,
          file_path: filePath,
          file_size: fileObject.size,
          file_type: fileObject.type
        });
      
      if (insertError) {
        throw new Error(`Error inserting file record: ${insertError.message}`);
      }
    } catch (error) {
      console.error('Error handling file upload:', error);
      throw error;
    }
  };
  
  const onSubmit = async (data: FormData) => {
    try {
      setSubmitting(true);
      setFormError(null);
      
      // Insert quote data into Supabase
      const { data: newQuoteId, error: quoteError } = await supabase.rpc(
        "insert_quote",
        {
          _first_name: data.firstName,
          _last_name: data.lastName,
          _email: data.email,
          _phone: data.phone || null,
          _project_type: data.projectType,
          _timeframe: data.timeframe || null,
          _budget: data.budget || null,
          _project_description: data.projectDescription,
          _newsletter: data.newsletter || false
        }
      );
      
      if (quoteError) {
        throw new Error(`Error submitting request: ${quoteError.message}`);
      }
      
      // Upload file if there is one
      if (fileObject && newQuoteId) {
        await uploadFileToSupabase(newQuoteId);
      }
      
      setFormSuccess(true);
      reset();
      clearFile();
      
      // Reset form state after success message
      setTimeout(() => {
        setFormSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setSubmitting(false);
    }
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
              
              {formSuccess && (
                <motion.div 
                  className="mb-8 p-4 bg-green-50 text-green-700 rounded-lg flex items-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <FileCheck size={20} className="mr-2" />
                  <span>Thank you for your request! We'll be in touch shortly to discuss your project.</span>
                </motion.div>
              )}
              
              {formError && (
                <motion.div 
                  className="mb-8 p-4 bg-red-50 text-red-700 rounded-lg flex items-start"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <AlertCircle size={20} className="mr-2 flex-shrink-0 mt-0.5" />
                  <span>{formError}</span>
                </motion.div>
              )}
              
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
                
                {/* New File Upload Component */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Upload Your Plans or Drawings</h3>
                  <p className="text-gray-600 mb-4">
                    You can upload architectural drawings, CAD files, or any other visual references to help us better understand your vision. 
                    (Max file size: 500MB per file)
                  </p>
                  
                  <div 
                    className={cn(
                      "border-2 border-dashed border-gray-300 rounded-lg p-6 transition-colors duration-300 hover:border-primary-700 mb-4 cursor-pointer",
                      fileError && "border-red-500"
                    )}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <div className="text-center">
                      <FilePlus className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                      {fileName ? (
                        <div className="space-y-2">
                          <p className="font-medium">{fileName}</p>
                          <p className="text-sm text-gray-500">{formatFileSize(fileSize)}</p>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              clearFile();
                            }}
                            className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      ) : (
                        <>
                          <p className="text-gray-700 mb-2">Drag and drop your files here, or click to browse</p>
                          <p className="text-sm text-gray-500 mb-4">
                            Supported formats: PDF, DWG, DXF, DWF, SKP, 3DS, MAX, OBJ, STL, RVT, RFA, and image formats
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <input
                    type="file"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    accept=".pdf,.dwg,.dxf,.dwf,.skp,.3ds,.max,.obj,.stl,.rvt,.rfa,.jpg,.jpeg,.png,.tiff,.bmp,.ai,.psd"
                  />
                  
                  {fileError && (
                    <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg flex items-start">
                      <AlertCircle size={20} className="mr-2 flex-shrink-0 mt-0.5" />
                      <span>{fileError}</span>
                    </div>
                  )}
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
                
                <button 
                  type="submit" 
                  className="btn btn-primary flex items-center"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <Loader size={16} className="mr-2 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Submit Quote Request</span>
                  )}
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