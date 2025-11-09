import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  mobile: string;
  year: string;
  branch: string;
  interests: string[];
  experience: string;
  ideas: string;
  commitment: string;
}

const CommunityForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    year: '',
    branch: '',
    interests: [],
    experience: '',
    ideas: '',
    commitment: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const interestOptions = [
    'Filmmaking',
    'Photography',
    'Videography',
    'Editing',
    'Storytelling',
    'Cinematography',
    'Scriptwriting',
    'Sound Design'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbx7tquuSGR3Xpv5I4HZu8Z5eoC8Kl3DBkLxGB8WX2k6Cge-H6dU1AG0HTr3FAtK_VQR/exec';
      
      // Create a hidden iframe to submit the form
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = 'hidden_iframe';
      document.body.appendChild(iframe);
      
      // Create a form element
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = scriptUrl;
      form.target = 'hidden_iframe';
      
      // Add form fields
      const fields = {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        year: formData.year,
        branch: formData.branch,
        interests: formData.interests.join(', '),
        experience: formData.experience,
        commitment: formData.commitment,
        ideas: formData.ideas
      };
      
      Object.keys(fields).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = fields[key as keyof typeof fields];
        form.appendChild(input);
      });
      
      document.body.appendChild(form);
      form.submit();
      
      // Clean up after 1 second
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
      }, 1000);

      // Show success message
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          mobile: '',
          year: '',
          branch: '',
          interests: [],
          experience: '',
          ideas: '',
          commitment: ''
        });
        setSubmitted(false);
        setIsSubmitting(false);
      }, 3000);
      
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {submitted ? (
        <div className="bg-[#1d1836] border-2 border-[#915EFF] text-white px-8 py-6 rounded-xl text-center shadow-xl shadow-[#211e35]">
          <div className="text-4xl mb-3">✅</div>
          <h3 className="text-2xl font-bold mb-2">You're In!</h3>
          <p className="text-lg text-[#aaa6c3]">Thanks for joining our creative community. We'll be in touch soon with next steps.</p>
        </div>
      ) : (
        <>
          {error && (
            <div className="bg-red-900/20 border-2 border-red-500 text-red-400 px-6 py-4 rounded-lg mb-6">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-white">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#915EFF]/20 bg-[#1d1836] text-white focus:outline-none focus:border-[#915EFF] transition-colors placeholder:text-[#aaa6c3]/50"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#915EFF]/20 bg-[#1d1836] text-white focus:outline-none focus:border-[#915EFF] transition-colors placeholder:text-[#aaa6c3]/50"
                placeholder="you@email.com"
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <label htmlFor="mobile" className="block text-sm font-semibold mb-2 text-white">
              Mobile Number *
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              required
              value={formData.mobile}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-[#915EFF]/20 bg-[#1d1836] text-white focus:outline-none focus:border-[#915EFF] transition-colors placeholder:text-[#aaa6c3]/50"
              placeholder="+91 XXXXX XXXXX"
              pattern="[0-9+\s-]+"
            />
          </div>

          {/* Year & Department Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="year" className="block text-sm font-semibold mb-2 text-white">
                Year *
              </label>
              <select
                id="year"
                name="year"
                required
                value={formData.year}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#915EFF]/20 bg-[#1d1836] text-white focus:outline-none focus:border-[#915EFF] transition-colors"
              >
                <option value="" className="bg-[#1d1836]">Select year</option>
                <option value="1st Year" className="bg-[#1d1836]">1st Year</option>
                <option value="2nd Year" className="bg-[#1d1836]">2nd Year</option>
                <option value="3rd Year" className="bg-[#1d1836]">3rd Year</option>
                <option value="4th Year" className="bg-[#1d1836]">4th Year</option>
                <option value="Postgraduate" className="bg-[#1d1836]">Postgraduate</option>
              </select>
            </div>

            <div>
              <label htmlFor="branch" className="block text-sm font-semibold mb-2 text-white">
                Department *
              </label>
              <input
                type="text"
                id="branch"
                name="branch"
                required
                value={formData.branch}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#915EFF]/20 bg-[#1d1836] text-white focus:outline-none focus:border-[#915EFF] transition-colors placeholder:text-[#aaa6c3]/50"
                placeholder="e.g., Computer Science"
              />
            </div>
          </div>

          {/* Interests */}
          <div>
            <label className="block text-sm font-semibold mb-3 text-white">
              Your Interests *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {interestOptions.map(interest => (
                <label key={interest} className="flex items-center space-x-2 cursor-pointer bg-[#1d1836] px-3 py-2 rounded-lg hover:bg-[#915EFF]/10 hover:border-[#915EFF]/50 border-2 border-transparent transition-all">
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(interest)}
                    onChange={() => handleCheckboxChange(interest)}
                    className="w-4 h-4 text-[#915EFF] focus:ring-[#915EFF] border-[#915EFF]/30 rounded"
                  />
                  <span className="text-sm font-medium text-[#aaa6c3]">{interest}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Experience & Commitment Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="experience" className="block text-sm font-semibold mb-2 text-white">
                Experience Level
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#915EFF]/20 bg-[#1d1836] text-white focus:outline-none focus:border-[#915EFF] transition-colors"
              >
                <option value="" className="bg-[#1d1836]">Select level</option>
                <option value="Beginner" className="bg-[#1d1836]">Beginner</option>
                <option value="Intermediate" className="bg-[#1d1836]">Intermediate</option>
                <option value="Experienced" className="bg-[#1d1836]">Experienced</option>
                <option value="Advanced" className="bg-[#1d1836]">Advanced</option>
              </select>
            </div>

            <div>
              <label htmlFor="commitment" className="block text-sm font-semibold mb-2 text-white">
                Availability
              </label>
              <select
                id="commitment"
                name="commitment"
                value={formData.commitment}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#915EFF]/20 bg-[#1d1836] text-white focus:outline-none focus:border-[#915EFF] transition-colors"
              >
                <option value="" className="bg-[#1d1836]">Select option</option>
                <option value="Stay informed" className="bg-[#1d1836]">Just stay informed</option>
                <option value="Casual" className="bg-[#1d1836]">Casual (1-2 hrs/week)</option>
                <option value="Active" className="bg-[#1d1836]">Active (3-5 hrs/week)</option>
                <option value="Very involved" className="bg-[#1d1836]">Very involved (5+ hrs/week)</option>
              </select>
            </div>
          </div>

          {/* Ideas */}
          <div>
            <label htmlFor="ideas" className="block text-sm font-semibold mb-2 text-white">
              Your Ideas & Suggestions
            </label>
            <textarea
              id="ideas"
              name="ideas"
              rows={4}
              value={formData.ideas}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-[#915EFF]/20 bg-[#1d1836] text-white focus:outline-none focus:border-[#915EFF] transition-colors resize-none placeholder:text-[#aaa6c3]/50"
              placeholder="What would you like to see in this community?"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-[#211e35] text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-white"
              style={{background: isSubmitting ? '#915EFF80' : 'linear-gradient(90.13deg, #915EFF 1.9%, #bf61ff 97.5%)'}}
            >
              {isSubmitting ? 'Submitting...' : 'Join the Community'}
            </button>
          </div>
        </form>
        </>
      )}
    </div>
  );
};

export default CommunityForm;
''