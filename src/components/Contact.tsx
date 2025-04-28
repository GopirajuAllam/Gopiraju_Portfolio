import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import profileImage from '../assets/profile.jpg';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

// Initialize EmailJS
emailjs.init("jP-zrMJC2tPPk5Vus"); // Replace with your actual public key

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const result = await emailjs.send(
        'service_c0gmjms', // Replace with your EmailJS service ID
        'template_1pmzfy8', // Replace with your EmailJS template ID
        {
          name: formData.name,
          from_name: formData.name,
          from_email: formData.email,
          to_name: 'Gopiraju Allam',
          reply_to: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        }
      );
      
      if (result.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setError('There was an error sending your message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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

        {isSubmitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            Thank you for your message! I will get in touch with you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
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
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;