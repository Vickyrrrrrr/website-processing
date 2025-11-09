"use client"

export default function Footer() {
    return (
        <footer className="relative z-40 bg-[#050816] text-white border-t border-[#915EFF]/10">
            <div className="container mx-auto px-4">
                <div className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {/* Brand Section */}
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-2xl">🎬</span>
                                <span className="font-bold text-xl">Create</span>
                            </div>
                            <p className="text-[#aaa6c3] max-w-md">
                                Transform your creative ideas into reality. Join the University of Lucknow's premier community for filmmakers, photographers, and storytellers.
                            </p>
                        </div>

                        {/* Community Links */}
                        <div>
                            <h5 className="font-bold text-sm uppercase tracking-wide mb-4 text-[#915EFF]">Community</h5>
                            <div className="flex flex-col gap-3">
                                <a href="#features" className="text-[#aaa6c3] hover:text-[#915EFF] transition-colors">
                                    Features
                                </a>
                                <a href="#form" className="text-[#aaa6c3] hover:text-[#915EFF] transition-colors">
                                    Join Us
                                </a>
                                <a href="#faq" className="text-[#aaa6c3] hover:text-[#915EFF] transition-colors">
                                    FAQ
                                </a>
                            </div>
                        </div>

                        {/* Contact */}
                        <div>
                            <h5 className="font-bold text-sm uppercase tracking-wide mb-4 text-[#915EFF]">Connect</h5>
                            <div className="flex flex-col gap-3">
                                <p className="text-[#aaa6c3]">
                                    University of Lucknow
                                </p>
                                <p className="text-[#aaa6c3] text-sm">
                                    Student Initiative
                                </p>
                                <a 
                                    href="https://github.com/Vickyrrrrrr" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-[#aaa6c3] hover:text-[#915EFF] transition-colors group"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm font-medium">@Vickyrrrrrr</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#915EFF]/20 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                            <p className="text-[#aaa6c3] text-sm">
                                © 2025 Creative Community. All rights reserved.
                            </p>
                            <span className="hidden md:inline text-[#915EFF]/30">•</span>
                            <p className="text-[#aaa6c3] text-sm">
                                Created by <a href="https://github.com/Vickyrrrrrr" target="_blank" rel="noopener noreferrer" className="text-[#915EFF] hover:underline font-semibold">Vicky</a>
                            </p>
                        </div>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-[#aaa6c3] hover:text-[#915EFF] transition-colors">
                                Privacy
                            </a>
                            <a href="#" className="text-[#aaa6c3] hover:text-[#915EFF] transition-colors">
                                Terms
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}