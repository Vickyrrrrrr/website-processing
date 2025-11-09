"use client"

export default function HeaderDesktop() {
    return (
        <header
            className={`w-full bg-white px-4 h-20 border-b border-gray-200`}
        >
            <div className="container mx-auto h-full">
                <div className="flex h-full justify-between items-center">
                    <div className="flex gap-12 h-full items-center">
                        <div>
                            <a href="/" className="flex items-center gap-3">
                                <span className="text-2xl">🎬</span>
                                <span className="font-bold text-xl text-gray-900">
                                    Create
                                </span>
                            </a>
                        </div>
                        <nav className="flex gap-8 text-base h-full items-center">
                            <a
                                href="#features"
                                className="text-gray-600 hover:text-green-600 transition-colors font-medium"
                            >Features</a>
                            <a 
                                href="#form" 
                                className="text-gray-600 hover:text-green-600 transition-colors font-medium"
                            >Join Us</a>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <a 
                            href="#form" 
                            className="px-6 py-2.5 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-600 transition-all duration-300"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}