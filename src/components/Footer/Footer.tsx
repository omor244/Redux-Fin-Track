import { Link } from 'react-router';
import {
    Facebook,
    Linkedin,
    Github,
    Mail,
    Phone,
    ArrowUp,
    Heart,
    ShieldCheck,
    ArrowRight
} from 'lucide-react';
import Logo from '../Logo/Logo';
 // Ensure this path is correct

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-50 border-t border-slate-200">
            {/* --- Main Content --- */}
            <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Column 1: Brand Identity */}
                    <div className="space-y-6">
                        <Logo />
                        <p className="text-slate-500 text-sm leading-relaxed font-medium max-w-xs">
                            Master your money with the world’s most intuitive financial management platform. Secure, smart, and data-driven.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: <Facebook size={18} />, href: "https://www.facebook.com/sk.omer.1257" },
                                { icon: <Github size={18} />, href: "https://github.com/omor244" },
                                { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/omor-dev" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Product Links */}
                    <div>
                        <h4 className="text-slate-900 font-black text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                            <span className="w-6 h-[2px] bg-primary"></span>
                            Product
                        </h4>
                        <ul className="space-y-4">
                            {['Features', 'Pricing', 'Dashboard', 'Security'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={`/${item.toLowerCase()}`}
                                        className="text-slate-500 hover:text-primary text-sm font-semibold transition-colors flex items-center group"
                                    >
                                        <ArrowRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact/Support */}
                    <div>
                        <h4 className="text-slate-900 font-black text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                            <span className="w-6 h-[2px] bg-emerald-500"></span>
                            Support
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="mailto:omoronfire90909@gmail.com" className="text-slate-500 hover:text-primary text-sm font-semibold flex items-center gap-3 transition-colors">
                                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                                        <Mail size={14} />
                                    </div>
                                    omoronfire90909@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:01792918325" className="text-slate-500 hover:text-primary text-sm font-semibold flex items-center gap-3 transition-colors">
                                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                                        <Phone size={14} />
                                    </div>
                                    +880 17929 18325
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter/Trust */}
                    <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest mb-4">
                            <ShieldCheck size={16} /> 100% Secure
                        </div>
                        <p className="text-slate-500 text-[13px] font-medium leading-relaxed mb-6">
                            Your data is protected by bank-grade AES-256 encryption.
                        </p>
                        <Link
                            to="/register"
                            className="w-full py-3 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-primary transition-all text-center block"
                        >
                            Get Started Free
                        </Link>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-400 text-sm font-medium flex items-center gap-1">
                        Made with <Heart size={14} className="text-red-500 fill-red-500" /> by <span className="text-slate-900 font-bold">FinTrack</span> © {currentYear}
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-slate-400 hover:text-primary text-xs font-black uppercase tracking-[0.2em] transition-all"
                    >
                        Back to Top
                        <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                            <ArrowUp size={14} />
                        </div>
                    </button>
                </div>
            </div>

            {/* --- Bottom Utility Bar --- */}
            <div className="bg-slate-900 py-4 px-6 text-center">
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[10px] font-bold text-slate-500 uppercase tracking-[0.1em]">
                    <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    <Link to="/cookies" className="hover:text-white transition-colors">Cookie Settings</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;