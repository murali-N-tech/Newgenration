import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

function Footer() {
  const quickLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About Us' },
    { to: 'admissions', label: 'Admissions' },
    { to: 'contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: '#', icon: <FacebookIcon />, label: 'Facebook' },
    { href: '#', icon: <YoutubeIcon />, label: 'Youtube' },
    { href: '#', icon: <InstagramIcon />, label: 'Instagram' },
  ];

  return (
    <footer className="bg-[#66CDAA] text-gray-900">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: School Info */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">New Generation School</h2>
            <p className="text-gray-800">Nurturing Minds, Shaping Futures.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-gray-700 hover:text-black transition-colors cursor-pointer"
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mt-1 mr-3 shrink-0"><LocationIcon /></span>
                <span>Kothapet, Powerpet, Eluru, Andhra Pradesh, 534002</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 shrink-0"><PhoneIcon /></span>
                <a href="tel:+919848603916" className="hover:text-black transition-colors">+91 98486 03916</a>
              </li>
              <li className="flex items-center">
                <span className="mr-3 shrink-0"><EmailIcon /></span>
                <a href="mailto:newgenerationschooleluru@gmail.com" className="hover:text-black transition-colors">newgenerationschooleluru@gmail.com</a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <a key={social.label} href={social.href} aria-label={social.label} className="text-gray-700 hover:text-black transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
        
        {/* Bottom Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-400 text-center text-gray-700">
          <p>&copy; {new Date().getFullYear()} StackZy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// SVG Icon Components (self-contained for easy copy-paste)
const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const YoutubeIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.887 3.427 0 4.926 0 8.25c0 3.324.887 4.823 4.385 5.066 3.6.245 11.626.246 15.23 0 3.5-.243 4.385-1.742 4.385-5.066 0-3.324-.885-4.823-4.385-5.066zM9.75 11.01V5.49a.75.75 0 011.125-.65l5.25 2.76a.75.75 0 010 1.3l-5.25 2.76a.75.75 0 01-1.125-.65z" clipRule="evenodd" />
    </svg>
);

const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.343 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm-1.161 1.545a3.242 3.242 0 01-2.122.515c-.963.042-1.518.207-1.956.372a3.414 3.414 0 00-1.258.85 3.414 3.414 0 00-.85 1.258c-.165.438-.33.993-.372 1.956a3.242 3.242 0 01-.515 2.122c-.042.963-.058 1.267-.058 3.242s.016 2.279.058 3.242c.042.963.207 1.518.372 1.956a3.414 3.414 0 00.85 1.258 3.414 3.414 0 001.258.85c.438.165.993.33 1.956.372a3.242 3.242 0 012.122.515c.963.042 1.267.058 3.242.058s2.279-.016 3.242-.058a3.242 3.242 0 012.122-.515c.963-.042 1.518-.207 1.956-.372a3.414 3.414 0 001.258-.85 3.414 3.414 0 00.85-1.258c.165-.438.33-.993.372-1.956a3.242 3.242 0 01.515-2.122c.042-.963.058-1.267.058-3.242s-.016-2.279-.058-3.242a3.242 3.242 0 01-.515-2.122c-.042-.963-.207-1.518-.372-1.956a3.414 3.414 0 00-.85-1.258 3.414 3.414 0 00-1.258-.85c-.438-.165-.993-.33-1.956-.372a3.242 3.242 0 01-2.122-.515c-.963-.042-1.267-.058-3.242-.058zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 1.44a3.695 3.695 0 110 7.39 3.695 3.695 0 010-7.39zm6.406-1.185a1.285 1.285 0 100 2.57 1.285 1.285 0 000-2.57z" clipRule="evenodd" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.1.4-.27.666-.478.354-.275.755-.636 1.199-1.085.445-.45.926-.99 1.461-1.604a11.848 11.848 0 002.463-3.843C16.6 9.26 17 7.96 17 6.75 17 4.125 14.875 2 12.25 2S7.5 4.125 7.5 6.75c0 1.21.4 2.51 1.077 3.692.652 1.172 1.458 2.275 2.463 3.843.535.614 1.016 1.154 1.461 1.604.444.449.845.81 1.199 1.085.266.208.48.378.666.478a5.741 5.741 0 00.281.14l.018.008.006.003zM10 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.03 11.03 0 004.28 4.28l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
  </svg>
);

export default Footer;
