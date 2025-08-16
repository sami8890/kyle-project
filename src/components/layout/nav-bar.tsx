"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

// Define types
interface NavLink {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
}

interface NavbarData {
  logoText: string;
  logoHighlight: string;
  logoImage?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  links: NavLink[];
  ctaButton: {
    text: string;
    href: string;
  };
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [navbarData, setNavbarData] = useState<NavbarData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch navbar data from Sanity
    const fetchNavbarData = async () => {
      try {
        const data: NavbarData = await client.fetch(`*[_type == "navbar"][0]{
          logoText,
          logoHighlight,
          logoImage,
          links[]{
            label,
            href,
            submenu[]{
              label,
              href
            }
          },
          ctaButton {
            text,
            href
          }
        }`);
        setNavbarData(data);
      } catch (error) {
        console.error("Error fetching navbar data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNavbarData();

    // Scroll listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        });
        setMobileMenuOpen(false);
      }
    }
  };

  if (loading) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md py-3 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="h-10 w-40 bg-gray-800 rounded-md animate-pulse"></div>
            <div className="hidden md:flex space-x-4">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-16 bg-gray-800 rounded-md animate-pulse"
                ></div>
              ))}
            </div>
            <div className="hidden md:block h-10 w-32 bg-indigo-600 rounded-md animate-pulse"></div>
          </div>
        </div>
      </header>
    );
  }

  if (!navbarData) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md py-3 shadow-lg">
        <div className="container mx-auto px-6 text-center">
          <p className="text-red-500">Navbar configuration missing</p>
        </div>
      </header>
    );
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              {navbarData.logoImage ? (
                <div className="relative h-10 w-10 mr-3">
                  <div className="absolute inset-1 bg-black rounded-md flex items-center justify-center">
                    <Image
                      src={urlFor(navbarData.logoImage)}
                      alt={navbarData.logoImage.alt || "Logo"}
                      className="w-6 h-6 object-contain"
                      height={24}
                      width={24} 
                      unoptimized={true}
                      loader={({ src }) => src}
                    />
                  </div>
                </div>
              ) : (
                <div className="bg-gray-800 rounded-md w-10 h-10 mr-3 flex items-center justify-center">
                  <span className="text-white font-bold">CG</span>
                </div>
              )}
              <div className="text-white font-bold text-xl">
                {navbarData.logoText}
                <span className="text-[#00B9D6]">
                  {navbarData.logoHighlight}
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navbarData.links.map((link) => (
                <div key={link.label} className="relative group">
                  <a
                    href={link.href}
                    className="px-4 py-2 text-gray-300 hover:text-white transition-colors flex items-center"
                    onClick={(e) => {
                      if (link.submenu) {
                        e.preventDefault();
                        toggleSubmenu(link.label);
                      } else {
                        handleNavClick(e, link.href);
                      }
                    }}
                  >
                    {link.label}
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
                            key={sublink.label}
                            href={sublink.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#00B9D6]/10 hover:text-[#00B9D6]"
                            onClick={(e) => handleNavClick(e, sublink.href)}
                          >
                            {sublink.label}
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
                href={navbarData.ctaButton.href}
                target={
                  navbarData.ctaButton.href.startsWith("http")
                    ? "_blank"
                    : "_self"
                }
                className="bg-[#00B9D6] hover:bg-[#00B9D6]/90 text-black font-medium px-5 py-2 rounded-md transition-all duration-200 flex items-center group"
              >
                {navbarData.ctaButton.text}
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
                {navbarData.links.map((link) => (
                  <div key={link.label}>
                    <a
                      href={link.href}
                      className="px-4 py-3 text-lg text-gray-300 hover:text-white border-b border-gray-800 flex items-center justify-between"
                      onClick={(e) => {
                        if (link.submenu) {
                          e.preventDefault();
                          toggleSubmenu(link.label);
                        } else {
                          handleNavClick(e, link.href);
                        }
                      }}
                    >
                      {link.label}
                      {link.submenu && (
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            activeSubmenu === link.label ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </a>

                    {/* Mobile Submenu */}
                    {link.submenu && activeSubmenu === link.label && (
                      <motion.div
                        className="pl-4 bg-[#111]/50"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.submenu.map((sublink) => (
                          <a
                            key={sublink.label}
                            href={sublink.href}
                            className="block px-4 py-3 text-gray-400 hover:text-[#00B9D6] border-b border-gray-800/50"
                            onClick={(e) => {
                              handleNavClick(e, sublink.href);
                              setMobileMenuOpen(false);
                            }}
                          >
                            {sublink.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}

                <a
                  href={navbarData.ctaButton.href}
                  target={
                    navbarData.ctaButton.href.startsWith("http")
                      ? "_blank"
                      : "_self"
                  }
                  className="mt-4 bg-[#00B9D6] hover:bg-[#00B9D6]/90 text-black font-medium px-5 py-3 rounded-md transition-all duration-200 flex items-center justify-center"
                  onClick={(e) => {
                    if (navbarData.ctaButton.href.startsWith("#")) {
                      handleNavClick(e, navbarData.ctaButton.href);
                    }
                    setMobileMenuOpen(false);
                  }}
                >
                  {navbarData.ctaButton.text}
                  <ChevronRight className="ml-1" />
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Helper function to generate image URLs
function urlFor(source?: { asset: { _ref: string } }): string {
  if (!source) return "";
  return `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${source.asset._ref
    .replace("image-", "")
    .replace("-jpg", ".jpg")
    .replace("-png", ".png")
    .replace("-webp", ".webp")}`;
}
