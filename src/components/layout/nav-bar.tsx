"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
  {
    name: "Services",
    href: "#services",
    submenu: [
      { name: "Technical SEO", href: "#technical-seo" },
      { name: "Content Strategy", href: "#content-strategy" },
      { name: "Link Building", href: "#link-building" },
    ],
  },
  { name: "Process", href: "#process" },
  { name: "Framework", href: "#framework" },
  { name: "Results", href: "#results" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleSubmenu = (name: string) => {
    if (activeSubmenu === name) {
      setActiveSubmenu(null)
    } else {
      setActiveSubmenu(name)
    }
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only handle internal links
    if (href.startsWith("#")) {
      e.preventDefault()
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        // Close mobile menu if open
        if (mobileMenuOpen) {
          setMobileMenuOpen(false)
        }

        // Scroll to the element with smooth behavior
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Offset for the fixed header
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5"
          }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="relative h-10 w-10 mr-3">
                <div className="absolute inset-1 bg-black rounded-md flex items-center justify-center">
                  <Image
                    src="/logo.png" 
                    alt="ContentGrowth Logo"
                    className="w-6 h-6 object-contain"
                    height={24} 
                    width={24}  
                  />
                </div>
              </div>
              <div className="text-white font-bold text-xl">
                Contntr<span className="text-[#00B9D6]">Growth</span>
              </div>
            </div>
            

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <a
                    href={link.href}
                    className="px-4 py-2 text-gray-300 hover:text-white transition-colors flex items-center"
                    onClick={(e) => {
                      if (link.submenu) {
                        e.preventDefault()
                        toggleSubmenu(link.name)
                      } else {
                        handleNavClick(e, link.href)
                      }
                    }}
                  >
                    {link.name}
                    {link.submenu && (
                      <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </a>

                  {/* Submenu */}
                  {link.submenu && (
                    <div className="absolute left-0 mt-1 w-48 origin-top-left rounded-md bg-[#111] shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1">
                        {link.submenu.map((sublink) => (
                          <a
                            key={sublink.name}
                            href={sublink.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#00B9D6]/10 hover:text-[#00B9D6]"
                            onClick={(e) => handleNavClick(e, sublink.href)}
                          >
                            {sublink.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="#calendar"
                className="bg-[#00B9D6] hover:bg-[#00B9D6]/90 text-black font-medium px-5 py-2 rounded-md transition-all duration-200 flex items-center group"
                onClick={(e) => handleNavClick(e, "#calendar")}
              >
                Get Started
                <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md md:hidden pt-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto px-6 py-6">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      className=" px-4 py-3 text-lg text-gray-300 hover:text-white border-b border-gray-800 flex items-center justify-between"
                      onClick={(e) => {
                        if (link.submenu) {
                          e.preventDefault()
                          toggleSubmenu(link.name)
                        } else {
                          handleNavClick(e, link.href)
                        }
                      }}
                    >
                      {link.name}
                      {link.submenu && (
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${activeSubmenu === link.name ? "rotate-180" : ""}`}
                        />
                      )}
                    </Link>

                    {/* Mobile Submenu */}
                    {link.submenu && activeSubmenu === link.name && (
                      <motion.div
                        className="pl-4 bg-[#111]/50"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.submenu.map((sublink) => (
                          <a
                            key={sublink.name}
                            href={sublink.href}
                            className="block px-4 py-3 text-gray-400 hover:text-[#00B9D6] border-b border-gray-800/50"
                            onClick={(e) => {
                              handleNavClick(e, sublink.href)
                              setMobileMenuOpen(false)
                            }}
                          >
                            {sublink.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}

                <a
                  href="#calendar"
                  className="mt-4 bg-[#00B9D6] hover:bg-[#00B9D6]/90 text-black font-medium px-5 py-3 rounded-md transition-all duration-200 flex items-center justify-center"
                  onClick={(e) => {
                    handleNavClick(e, "#calendar")
                    setMobileMenuOpen(false)
                  }}
                >
                  Get Started
                  <ChevronRight className="ml-1" />
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

