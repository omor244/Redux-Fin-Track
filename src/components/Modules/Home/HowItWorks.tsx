import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router"; // or react-router-dom
import {  FaRocket, FaChevronRight } from "react-icons/fa";
import { steps } from '../data/features';



const HowItWorks = () => {
    return (
        <section className="py-24 bg-[#FCFCFD] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* --- Section Header --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="inline-block px-4 py-1.5 mb-4 text-[10px] font-black tracking-[0.3em] uppercase bg-white border border-slate-200 text-slate-500 rounded-full shadow-sm">
                        Process
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
                        How <span className="text-primary">FinTrack</span> Works
                    </h2>
                    <p className="mt-6 text-slate-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                        We’ve simplified personal finance. Master your money in three
                        straightforward steps and reach your goals faster.
                    </p>
                </motion.div>

                {/* --- Steps Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 relative">

                    {/* Decorative Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="relative flex flex-col items-center group"
                        >
                            {/* Icon Container */}
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                className={`w-28 h-28 bg-white rounded-[2.5rem] flex items-center justify-center text-3xl mb-8 shadow-2xl ${step.shadow} border-2 border-white relative transition-all duration-500`}
                            >
                                <div className={`absolute inset-2 bg-gradient-to-br ${step.color} rounded-[2rem] opacity-10 group-hover:opacity-20 transition-opacity`} />
                                <span className={`bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                                    {step.icon}
                                </span>

                                {/* Step Indicator */}
                                <div className="absolute -top-3 -right-3 w-10 h-10 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-xs font-black border-4 border-[#FCFCFD] group-hover:bg-primary transition-colors duration-300">
                                    0{step.id}
                                </div>
                            </motion.div>

                            {/* Content */}
                            <div className="text-center space-y-3">
                                <h3 className="text-2xl font-black text-slate-800 tracking-tight group-hover:text-primary transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </div>

                            {/* Mobile arrow indicator */}
                            {index !== steps.length - 1 && (
                                <div className="md:hidden mt-8 text-slate-300">
                                    <FaChevronRight className="rotate-90" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* --- Final Call to Action --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-24 text-center"
                >
                    <Link
                        to="/register"
                        className="inline-flex items-center gap-3 bg-primary text-black px-10 py-5 rounded-3xl font-black text-lg shadow-2xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-1 transition-all active:scale-95 group"
                    >
                        Start Your Free Journey
                        <FaRocket className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                    <div className="mt-6 flex items-center justify-center gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                        <span>No credit card required</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full" />
                        <span>AES-256 Encryption</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;