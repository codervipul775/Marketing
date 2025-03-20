import { Mail, Phone, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );
      setSuccess(true);
      form.current?.reset();
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-24 px-4">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="text-lg text-gray-500">We'd love to hear from you.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 bg-white shadow-lg rounded-xl p-8 border">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border rounded" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 border rounded" />
            <input type="text" name="subject" placeholder="Subject" required className="w-full p-3 border rounded" />
            <textarea name="message" rows={4} placeholder="Your Message" required className="w-full p-3 border rounded" />
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">Message sent successfully!</p>}
            <button type="submit" disabled={isLoading} className="w-full p-3 bg-indigo-600 text-white rounded">
              {isLoading ? <Loader2 className="animate-spin h-5 w-5" /> : "Send Message"}
            </button>
          </form>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-8 border">
          <h3 className="text-2xl font-semibold">Contact Information</h3>
          <div className="mt-6">
            <p className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-indigo-600" />
              <a href="mailto:partnerships@influenz.co.in" className="text-indigo-600">partnerships@influenz.co.in</a>
            </p>
            <p className="flex items-center space-x-2 mt-4">
              <Phone className="h-5 w-5 text-indigo-600" />
              <a href="tel:+919058522239" className="text-indigo-600">+91 90585 22239</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
