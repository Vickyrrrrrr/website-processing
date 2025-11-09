"use client"

export default function Footer() {
    return (
        <footer className="relative z-40 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <div className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {/* Brand Section */}
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-2xl">🎬</span>
                                <span className="font-bold text-xl">Create</span>
                            </div>
                            <p className="text-gray-400 max-w-md">
                                Transform your creative ideas into reality. Join the University of Lucknow's premier community for filmmakers, photographers, and storytellers.
                            </p>
                        </div>

                        {/* Community Links */}
                        <div>
                            <h5 className="font-bold text-sm uppercase tracking-wide mb-4">Community</h5>
                            <div className="flex flex-col gap-3">
                                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                                    Features
                                </a>
                                <a href="#form" className="text-gray-400 hover:text-white transition-colors">
                                    Join Us
                                </a>
                                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                                    FAQ
                                </a>
                            </div>
                        </div>

                        {/* Contact */}
                        <div>
                            <h5 className="font-bold text-sm uppercase tracking-wide mb-4">Connect</h5>
                            <div className="flex flex-col gap-3">
                                <p className="text-gray-400">
                                    University of Lucknow
                                </p>
                                <p className="text-gray-400 text-sm">
                                    Student Initiative
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © 2025 Creative Community. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Privacy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                Terms
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}