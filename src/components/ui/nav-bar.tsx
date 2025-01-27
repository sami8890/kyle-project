"use client"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import gsap from "gsap"

interface NavItem {
  label: string
  href: string
  subItems?: { label: string; href: string }[]
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10
      setIsScrolled(scrolled)

      if (navRef.current) {
        gsap.to(navRef.current, {
          backgroundColor: scrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(8, 145, 178, 0.2)" : "1px solid rgba(8, 145, 178, 0)",
          duration: 0.3,
          ease: "power2.out",
        })
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(logoRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        linksRef.current ? Array.from(linksRef.current.children) : [],
        {
          y: -30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.4",
      )
      .from(
        ctaRef.current,
        {
          y: -30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4",
      )
  }, [])

  const handleDropdownHover = (e: React.MouseEvent<HTMLDivElement>, entering: boolean) => {
    const dropdown = e.currentTarget.querySelector(".dropdown-menu")
    const arrow = e.currentTarget.querySelector(".dropdown-arrow")

    if (dropdown && arrow) {
      gsap.to(dropdown, {
        opacity: entering ? 1 : 0,
        y: entering ? 0 : -10,
        duration: 0.3,
        ease: "power2.out",
      })
      gsap.to(arrow, {
        rotation: entering ? 180 : 0,
        duration: 0.3,
        ease: "power2.out",
      })
    }
  }

  const handleBookCall = () => {
    window.open("https://www.cal.com/contntr/call", "_blank", "noopener,noreferrer")
  }

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? "backdrop-blur-md" : ""
        }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div ref={logoRef} className="flex-shrink-0">
            <Link
              href="/"
              className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 truncate max-w-[160px] sm:max-w-[200px] md:max-w-none"
              aria-label="Contntr Growth Collective"
            >
              Contntr Growth Collective
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div ref={linksRef} className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={(e) => handleDropdownHover(e, true)}
                onMouseLeave={(e) => handleDropdownHover(e, false)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center text-sm font-medium transition-colors duration-300 ${pathname === item.href ? "text-cyan-300" : "text-gray-400 hover:text-cyan-300"
                    }`}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                  {item.subItems && <ChevronDown className="dropdown-arrow ml-1 w-4 h-4" aria-hidden="true" />}
                </Link>

                {/* Dropdown Menu */}
                {item.subItems && (
                  <div className="dropdown-menu absolute left-0 top-full mt-2 w-48 opacity-0 translate-y-[-10px] z-50">
                    <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-xl py-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-300 hover:bg-gray-800/50 transition-colors duration-150"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-200 ml-2" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px] sm:w-[350px] bg-gray-900 border-l border-gray-800 overflow-y-auto text-white"
              >
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      <Link
                        href={item.href}
                        className={`text-lg font-medium transition-colors duration-200 ${pathname === item.href ? "text-cyan-300" : "text-gray-400 hover:text-cyan-300"
                          }`}
                      >
                        {item.label}
                      </Link>
                      {item.subItems && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="block text-sm text-gray-500 hover:text-cyan-300 transition-colors duration-150"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <Button
                    className="mt-4 w-full bg-cyan-500 hover:bg-cyan-400 text-black font-medium transition-colors duration-200"
                    onClick={handleBookCall}
                  >
                    Book a Call
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop CTA Button */}
          <div ref={ctaRef} className="hidden md:block">
            <Button
              className="px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-medium rounded-lg transition-colors duration-200"
              onClick={handleBookCall}
            >
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

