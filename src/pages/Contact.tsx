import { Mail, Phone, Loader2 } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const InputField = ({
    name,
    type = "text",
    label,
    placeholder,
    required = true
  }: {
    name: string;
    type?: string;
    label: string;
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
          placeholder={placeholder}
          required={required}
          className="block w-full px-4 py-3 rounded-lg border bg-white/5 border-white/10 text-gray-300 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Have questions or want to collaborate? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-slate-800 backdrop-blur-xl shadow-lg rounded-xl p-8 sm:p-10 border border-white/10">
              <form
                action="https://formsubmit.co/partnerships@influenz.co.in"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-8"
                autoComplete="off"
              >
                <InputField
                  name="name"
                  label="Name"
                  placeholder="Your name"
                  required
                />

                <InputField
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="you@example.com"
                  required
                />

                <InputField
                  name="subject"
                  label="Subject"
                  placeholder="What's this about?"
                  required
                />

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      placeholder="Your message"
                      required
                      className="block w-full px-4 py-3 rounded-lg border bg-white/5 border-white/10 text-gray-300 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  {error && (
                    <div className="text-red-500 text-sm text-center">{error}</div>
                  )}
                  {success && (
                    <div className="text-green-500 text-sm text-center">
                      Message sent successfully! We'll get back to you soon.
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin mr-2 h-5 w-5" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-slate-800 backdrop-blur-xl shadow-lg rounded-xl p-8 sm:p-10 space-y-10 border border-white/10">
              <h3 className="text-2xl font-semibold text-white">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gray-300 mb-1">
                      Email
                    </h4>
                    <a
                      href={`mailto:partnerships@influenz.co.in`}
                      className="text-base text-indigo-400 hover:text-indigo-300"
                    >
                      partnerships@influenz.co.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gray-300 mb-1">
                      Phone
                    </h4>
                    <a
                      href="tel:+919058522239"
                      className="text-base text-indigo-400 hover:text-indigo-300"
                    >
                      9058522239
                    </a>
                    <br />
                    <a
                      href="tel:+916239183525"
                      className="text-base text-indigo-400 hover:text-indigo-300"
                    >
                      6239183525
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <h4 className="text-base font-medium text-gray-300 mb-4">
                  Office Hours
                </h4>
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
