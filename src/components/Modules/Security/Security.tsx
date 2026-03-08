import { ShieldCheck, Lock, EyeOff, Server, Key, CheckCircle2 } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion"; // Import framer-motion
import { securityFeatures } from "../data/features";




// Animation Variants
const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const SecurityPage = () => {
    const  user  = {
        name: "omor ",
        email: "omoronfire90909@gmail.com"
    }

    return (
        <div className="bg-[#FAFBFF] min-h-screen overflow-x-hidden">
            {/* --- Hero Section --- */}
            <section className="pt-32 pb-20 px-4 relative">
                {/* Background decorative element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-50/50 blur-[120px] rounded-full -z-10"
                />

                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.div
                        variants={fadeInUp}
                        className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-2xl text-orange-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-sm"
                    >
                        <ShieldCheck size={14} /> Your Security is our priority
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight tracking-tight"
                    >
                        Safe. Secure. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">Private.</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto"
                    >
                        At FinTrack, we employ world-class security measures to ensure your
                        financial journey is protected from every angle.
                    </motion.p>
                </motion.div>
            </section>

            {/* --- Detailed Security Grid --- */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="max-w-7xl mx-auto"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {securityFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                                className="flex flex-col sm:flex-row gap-8 p-10 rounded-[2.5rem] border border-slate-100 bg-white hover:border-orange-100 hover:shadow-2xl hover:shadow-orange-600/5 transition-colors duration-300"
                            >
                                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex-shrink-0 flex items-center justify-center">
                                    {React.cloneElement(feature.icon as React.ReactElement, { size: 32 })}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-slate-800 mb-4">{feature.title}</h3>
                                    <p className="text-slate-500 font-medium leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* --- Compliance Banner --- */}
            <section className="py-16 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto bg-slate-900 text-white rounded-[3rem] p-10 md:p-16 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[80px] -mr-20 -mt-20 rounded-full" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl font-black mb-6">Committed to Compliance</h2>
                            <p className="text-slate-400 font-medium max-w-lg">
                                We stay updated with the latest financial regulations and security
                                protocols to keep your mind at ease.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-6 md:gap-12">
                            <ComplianceItem label="GDPR" sub="Compliant" />
                            <ComplianceItem label="SOC2" sub="Certified" />
                            <ComplianceItem label="SSL" sub="Secure" />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* --- Call to Action --- */}
            <section className="py-32 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-10">Ready to start securely?</h2>
                    <Link
                        to={user ? "/dashboard" : "/register"}
                        className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-500 text-white font-black py-5 px-12 rounded-2xl shadow-xl shadow-orange-600/30 transition-all active:scale-95 group"
                    >
                        {user ? "Go to Dashboard" : "Create Secure Account"}
                        <CheckCircle2 size={18} className="group-hover:rotate-12 transition-transform" />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

// Sub-component for compliance badges
const ComplianceItem = ({ label, sub }: { label: string, sub: string }) => (
    <div className="text-center">
        <div className="text-2xl md:text-3xl font-black uppercase tracking-tighter">{label}</div>
        <div className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">{sub}</div>
    </div>
);

export default SecurityPage;