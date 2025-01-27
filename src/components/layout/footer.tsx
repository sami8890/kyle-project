import React from "react";
import Link from "next/link";
import { Twitter, Linkedin, Instagram, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    services: [
      { label: "SEO Optimization", href: "/services/seo" },
      { label: "Content Strategy", href: "/services/content" },
      { label: "Analytics", href: "/services/analytics" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
    support: [
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  };

  return (
    <footer className="relative bg-black border-t border-gray-800">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="space-y-6">
            <Link
              href="/"
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200"
            >
              The Contntr Growth Collective
            </Link>
            <p className="text-gray-400 text-sm">
              Empowering businesses with data-driven strategies for sustainable
              digital growth.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://twitter.com" icon={Twitter} />
              <SocialLink href="https://linkedin.com" icon={Linkedin} />
              <SocialLink href="https://instagram.com" icon={Instagram} />
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <FooterLink key={link.label} {...link} />
              ))}
            </ul>
          </div>
        </div>

      

        {/* Bottom bar */}
        <div
          className="py-6 border-t border-gray-800 flex flex-col md:flex-row 
                      justify-between items-center gap-4 text-sm text-gray-400"
        >
          <div>
            © {new Date().getFullYear()} The Contnter Growth collective. All
            rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
           
          </div>
        </div>
      </div>
    </footer>
  );
};

// Social media link component
const SocialLink = ({
  href,
  icon: Icon,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-800 border 
             border-gray-800 hover:border-cyan-800 flex items-center justify-center 
             text-gray-400 hover:text-cyan-400 transition-colors duration-200"
  >
    <Icon className="w-5 h-5" />
  </a>
);

// Footer link component
const FooterLink = ({ label, href }: { label: string; href: string }) => (
  <li>
    <Link
      href={href}
      className="text-gray-400 hover:text-cyan-300 transition-colors duration-200 
                text-sm flex items-center group"
    >
      {label}
      <ArrowUpRight
        className="w-4 h-4 opacity-0 group-hover:opacity-100 
                            group-hover:translate-x-1 group-hover:-translate-y-1 
                            transition-all duration-200 ml-1"
      />
    </Link>
  </li>
);

export default Footer;
