"use client"

import { type ReactNode, useEffect, useState } from "react"

import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

export default function HeaderMobile() {

    const [showMenu, setShowMenu] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [animateIn, setAnimateIn] = useState(false)

    useEffect(() => {
        if (menuOpen)
            setShowMenu(true)
        else {
            setAnimateIn(false)

            const to = setTimeout(() => setShowMenu(false), 300);
            return () => clearTimeout(to)
        }
    }, [menuOpen])

    useEffect(() => {
        if (showMenu) {
            requestAnimationFrame(() => {
                setAnimateIn(true)
            })
        }
    }, [showMenu])

    return (
        <>
            <header
                className="sticky top-0 w-full bg-white px-4 h-16 border-b border-gray-200 z-50"
            >
                <div className="h-full">
                    <div className="flex justify-between items-center h-full">
                        <div className="flex items-center gap-2">
                            <span className="text-xl">🎬</span>
                            <span className="font-bold text-lg text-gray-900">
                                Create
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <a 
                                href="#form" 
                                className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white text-sm font-semibold rounded-lg"
                            >
                                Join
                            </a>
                            <button
                                onClick={() => setMenuOpen(true)}
                                className="cursor-pointer p-2"
                            >
                                <GiHamburgerMenu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            {showMenu && (
                <>
                    <div 
                        className="fixed inset-0 bg-black/50 z-40"
                        onClick={() => setMenuOpen(false)}
                    />
                    <div className={`z-50 fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${animateIn  ? "translate-x-0" : "translate-x-full"} p-6`}>
                        <div className="flex justify-between items-center mb-8">
                            <span className="font-bold text-lg">Menu</span>
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="cursor-pointer p-2"
                            >
                                <IoCloseSharp className="w-6 h-6" />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-6">
                            <TopLink url="/" active={true}>Home</TopLink>
                            <TopLink url="#features">Features</TopLink>
                            <TopLink url="#form">Join Us</TopLink>
                            <div className="pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-500">University of Lucknow</p>
                            </div>
                        </nav>
                    </div>
                </>
            )}
        </>
    )
}

function TopLink({
    url,
    active = false,
    children
} : {
    url: string
    active?: boolean
    children: ReactNode
}) {
    return (
        <a
            href={url}
            className={`text-lg ${active ? "font-bold text-green-600" : "text-gray-700 hover:text-green-600"} transition-colors`}
        >
            {children}
        </a>
    )
}