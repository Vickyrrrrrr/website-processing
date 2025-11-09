import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  year: string;
  branch: string;
  interests: string[];
  experience: string;
  ideas: string;
  commitment: string;
  otherThoughts: string;
}

const CommunityForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    year: '',
    branch: '',
    interests: [],
    experience: '',
    ideas: '',
    commitment: '',
    otherThoughts: ''
  });

  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you can add logic to send the form data to a backend or email
    console.log('Form submitted:', formData);
    
    // For now, just show a success message
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        year: '',
        branch: '',
        interests: [],
        experience: '',
        ideas: '',
        commitment: '',
        otherThoughts: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {submitted ? (
        <div className="bg-green-50 border-2 border-green-500 text-green-800 px-8 py-6 rounded-xl text-center">
          <div className="text-4xl mb-3">✅</div>
          <h3 className="text-2xl font-bold mb-2">You're In!</h3>
          <p className="text-lg">Thanks for joining our creative community. We'll be in touch soon with next steps.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-900">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-green-500 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-900">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-green-500 transition-colors"
                placeholder="you@email.com"
              />
            </div>
          </div>

          {/* Year & Department Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="year" className="block text-sm font-semibold mb-2 text-gray-900">
                Year *
              </label>
              <select
                id="year"
                name="year"
                required
                value={formData.year}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-green-500 transition-colors"
              >
                <option value="">Select year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
                <option value="Postgraduate">Postgraduate</option>
              </select>
            </div>

            <div>
              <label htmlFor="branch" className="block text-sm font-semibold mb-2 text-gray-900">
                Department *
              </label>
              <input
                type="text"
                id="branch"
                name="branch"
                required
                value={formData.branch}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-green-500 transition-colors"
                placeholder="e.g., Computer Science"
              />
            </div>
          </div>

          {/* Interests */}
          <div>
            <label className="block text-sm font-semibold mb-3 text-gray-900">
              Your Interests *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {interestOptions.map(interest => (
                <label key={interest} className="flex items-center space-x-2 cursor-pointer bg-gray-50 px-3 py-2 rounded-lg hover:bg-green-50 transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(interest)}
                    onChange={() => handleCheckboxChange(interest)}
                    className="w-4 h-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <span className="text-sm font-medium">{interest}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Experience & Commitment Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="experience" className="block text-sm font-semibold mb-2 text-gray-900">
                Experience Level
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-green-500 transition-colors"
              >
                <option value="">Select level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Experienced">Experienced</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label htmlFor="commitment" className="block text-sm font-semibold mb-2 text-gray-900">
                Availability
              </label>
              <select
                id="commitment"
                name="commitment"
                value={formData.commitment}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-green-500 transition-colors"
              >
                <option value="">Select option</option>
                <option value="Stay informed">Just stay informed</option>
                <option value="Casual">Casual (1-2 hrs/week)</option>
                <option value="Active">Active (3-5 hrs/week)</option>
                <option value="Very involved">Very involved (5+ hrs/week)</option>
              </select>
            </div>
          </div>

          {/* Ideas */}
          <div>
            <label htmlFor="ideas" className="block text-sm font-semibold mb-2 text-gray-900">
              Your Ideas & Suggestions
            </label>
            <textarea
              id="ideas"
              name="ideas"
              rows={4}
              value={formData.ideas}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-green-500 transition-colors resize-none"
              placeholder="What would you like to see in this community?"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold py-4 px-6 rounded-lg hover:from-green-700 hover:to-emerald-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg text-lg"
            >
              Join the Community
            </button>
            <p className="text-center text-sm text-gray-500 mt-4">
              Free forever. No credit card required.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default CommunityForm;
''