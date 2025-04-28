import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import profileImage from '../assets/profile.jpg';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

// Initialize EmailJS
emailjs.init("jP-zrMJC2tPPk5Vus");

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      console.log('Sending email with data:', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString(),
      });

      const result = await emailjs.send(
        'service_c0gmjms',
        'template_1pmzfy8',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        }
      );
      
      console.log('EmailJS Response:', result);
      
      if (result.status === 200) {
        setIsSubmitted(true);
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' });
        }, 3000);
      } else {
        throw new Error(`Failed to send message: Status ${result.status}`);
      }
    } catch (error) {
      console.error('Detailed error:', error);
      setError('There was an error sending your message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
          <div className="w-64 h-64 rounded-full overflow-hidden">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600">
              Feel free to send me a message and I'll get back to you as soon as possible.
            </p>
          </div>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="mb-6 transform transition-all duration-500 ease-in-out">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
              <CheckCircle className="text-green-500" size={24} />
              <div>
                <h4 className="text-green-800 font-medium">Message Sent Successfully!</h4>
                <p className="text-green-600 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex items-center gap-2">
              <div className="flex-1">{error}</div>
              <button 
                onClick={() => setError('')}
                className="text-red-700 hover:text-red-900"
              >
                ×
              </button>
            </div>
          )}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2"
            disabled={isLoading || isSubmitted}
          >
            {isLoading ? 'Sending...' : isSubmitted ? 'Message Sent' : 'Send Message'}
            <Send size={18} className={isLoading ? 'animate-pulse' : ''} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;