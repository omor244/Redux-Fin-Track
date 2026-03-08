
import {  FaWallet, FaChartLine } from "react-icons/fa";
import { Link } from 'react-router';
import { Button } from "@/components/ui/button"; // shadcn
import { Badge } from "@/components/ui/badge";   // shadcn

const Hero = () => {
    
    return (
        <section className="relative   flex  items-center   pt-20 pb-16">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4  bg-primary/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* --- Left Side: Content --- */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                            <div className="h-[2px] w-8 bg-primary rounded-full" />
                            <p className="text-primary uppercase px-4 py-2  rounded-full   text-xs font-black">
                                Built for Financial Professionals
                            </p>


                        </div>
            
                        
                       
                       
                        <h1 className="text-5xl lg:text-8xl font-black text-foreground leading-[1] tracking-tighter mb-8">
                            Take Control of <span className="text-primary"> Financial Future</span>  with FinTrack.
                        </h1>

                        <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed font-medium">
                            Track every penny, set intelligent budgets, and watch your savings grow with our AI-driven financial management ecosystem.
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <Button
                                asChild
                                size="lg"
                                className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 rounded-full font-bold text-base group"
                            >
                                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2">
                                    <Link to="/register" className="flex items-center gap-2 font-bold text-slate-700 hover:text-black transition-colors group">
                                        <FaWallet className="text-primary group-hover:scale-110 transition-transform" /> Get Started Free
                                    </Link>
                                    <span className="text-slate-300 hidden sm:block">|</span>
                                  
                                </div>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="h-14 px-8 rounded-full font-bold text-base border-2 hover:bg-secondary transition-all"
                            >
                                <Link to="/dashboard" className="flex items-center gap-2 font-bold text-slate-700 hover:text-primary transition-colors group">
                                    <FaChartLine className="text-primary group-hover:scale-110 transition-transform" /> View Analytics
                                </Link>
                            </Button>
                        </div>

                        {/* Status/Security Text */}
                        <p className="mt-8 text-sm text-muted-foreground/60 font-medium italic">
                            🛡️ AES-256 Bank-Grade Security & Analytics 2026
                        </p>
                    </div>

                    {/* --- Right Side: Visual Image --- */}
                    <div className="flex-1 relative w-full lg:max-w-none max-w-2xl">
                        <div className="relative group">
                            {/* The Main Image Overlay/Shadow */}
                            <div className="absolute inset-0 bg-primary/20 rounded-[2rem] blur-2xl group-hover:bg-primary/30 transition-all duration-500 -z-10" />

                            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
                                <img
                                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop"
                                    alt="Professional Financial Team"
                                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 aspect-[4/3]"
                                />
                                {/* Dark overlay for image text readability if needed */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                            </div>

                            {/* Floating Stats Card (From your Banner info) */}
                            <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-card/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/10 animate-in slide-in-from-left duration-1000">
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary/20 p-3 rounded-xl text-primary">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Savings Growth</p>
                                        <p className="text-2xl font-black text-foreground">+24.8%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;