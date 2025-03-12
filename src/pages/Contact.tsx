import React, { useState } from 'react';
import { Mail, Phone, AlertCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const InputField = ({ 
    name, 
    type = 'text', 
    label, 
    error,
    placeholder,
    required,
    ...props 
  }: { 
    name: keyof ContactFormData; 
    type?: string; 
    label: string; 
    error?: string;
    placeholder?: string;
    required?: boolean;
  }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      <div className="mt-1 relative">
        <input
          type={type}
          name={name}
          id={name}
          value={formData[name]}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          className={`
            block w-full px-4 py-3 rounded-lg border bg-white/5 ${error 
              ? 'border-red-500 text-red-400 placeholder-red-300 focus:ring-red-500 focus:border-red-500' 
              : 'border-white/10 text-gray-300 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500'
            } shadow-sm
          `}
          {...props}
        />
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <AlertCircle className="h-5 w-5 text-red-400" />
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-indigo-300 mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Have questions or want to collaborate? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-slate-800 backdrop-blur-xl shadow-lg rounded-xl p-8 sm:p-10 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <InputField
                  name="name"
                  label="Name"
                  error={errors.name}
                  placeholder="Your name"
                  required
                />

                <InputField
                  name="email"
                  type="email"
                  label="Email"
                  error={errors.email}
                  placeholder="you@example.com"
                  required
                />

                <InputField
                  name="subject"
                  label="Subject"
                  error={errors.subject}
                  placeholder="What's this about?"
                  required
                />

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`
                        block w-full px-4 py-3 rounded-lg border bg-white/5 ${errors.message 
                          ? 'border-red-500 text-red-400 placeholder-red-300 focus:ring-red-500 focus:border-red-500' 
                          : 'border-white/10 text-gray-300 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500'
                        } shadow-sm
                      `}
                      placeholder="Your message"
                      required
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white
                      ${isSubmitting 
                        ? 'bg-indigo-400/50 cursor-not-allowed' 
                        : 'bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-indigo-500'
                      }
                    `}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="rounded-md bg-green-900/50 border border-green-500/50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-green-400">
                          Message sent successfully!
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="rounded-md bg-red-900/50 border border-red-500/50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <AlertCircle className="h-5 w-5 text-red-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-red-400">
                          Failed to send message. Please try again.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-slate-800 backdrop-blur-xl shadow-lg rounded-xl p-8 sm:p-10 space-y-10 border border-white/10">
              <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gray-300 mb-1">Email</h4>
                    <a href="mailto:contact@company.com" className="text-base text-indigo-400 hover:text-indigo-300">
                      contact@company.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gray-300 mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-base text-indigo-400 hover:text-indigo-300">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <h4 className="text-base font-medium text-gray-300 mb-4">Office Hours</h4>
                <div className="space-y-3 text-base text-gray-400">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
