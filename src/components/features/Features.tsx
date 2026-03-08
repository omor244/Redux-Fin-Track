import { motion } from "framer-motion";
import {
    TrendingUp,
    ShieldCheck,
    PieChart,
    Bell,
    Zap,
    Smartphone,
    ArrowUpRight
} from "lucide-react";

const Features = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="py-24 bg-white px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* --- Header --- */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div className="max-w-2xl">
                        <span className="text-primary font-black text-xs tracking-[0.4em] uppercase mb-4 block">
                            The FinTrack Advantage
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                            Everything you need to <br />
                            <span className="text-primary">master your money.</span>
                        </h2>
                    </div>
                    <p className="text-slate-500 text-lg font-medium max-w-sm leading-relaxed">
                        Powerful tools designed to give you total control over every dollar you earn and spend with professional precision.
                    </p>
                </motion.div>

                {/* --- Bento Grid Layout --- */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6"
                >

                    {/* Feature 1: Visual Analytics (Large) */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-4 bg-slate-50 rounded-[3rem] p-10 border border-slate-100 hover:shadow-2xl transition-all duration-500 group overflow-hidden relative"
                    >
                        <div className="relative z-10 max-w-xs">
                            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                <PieChart size={30} />
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Visual Analytics</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">
                                Deep dive into your spending habits with interactive charts. See exactly where your money goes every month.
                            </p>
                        </div>

                        {/* Abstract Chart UI Element */}
                        <div className="absolute bottom-0 right-0 w-80 h-48 bg-white rounded-tl-[2rem] border-t border-l border-slate-200 shadow-[-20px_-20px_50px_rgba(0,0,0,0.03)] p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                            <div className="flex items-end gap-3 h-full">
                                <motion.div animate={{ height: ["40%", "70%", "40%"] }} transition={{ repeat: Infinity, duration: 3 }} className="w-full bg-primary/20 rounded-t-lg" />
                                <motion.div animate={{ height: ["60%", "90%", "60%"] }} transition={{ repeat: Infinity, duration: 3, delay: 0.5 }} className="w-full bg-primary/40 rounded-t-lg" />
                                <motion.div animate={{ height: ["50%", "100%", "50%"] }} transition={{ repeat: Infinity, duration: 3, delay: 1 }} className="w-full bg-primary rounded-t-lg" />
                                <motion.div animate={{ height: ["30%", "60%", "30%"] }} transition={{ repeat: Infinity, duration: 3, delay: 1.5 }} className="w-full bg-primary/30 rounded-t-lg" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature 2: Security (Small/Tall) */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2 bg-slate-900 rounded-[3rem] p-10 text-white hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                                <ShieldCheck size={30} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Bank-Grade Security</h3>
                            <p className="text-slate-400 font-medium text-sm leading-relaxed mb-6">
                                Your data is protected by AES-256 encryption and SOC2 standards.
                            </p>
                            <div className="inline-flex items-center gap-2 text-xs font-black text-primary uppercase tracking-widest">
                                Learn More <ArrowUpRight size={14} />
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
                    </motion.div>

                    {/* Feature 3: Real-time (Small) */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2 bg-blue-50 rounded-[3rem] p-10 border border-blue-100 hover:shadow-2xl transition-all duration-500 group"
                    >
                        <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 mb-8 group-hover:-translate-y-2 transition-transform">
                            <Zap size={30} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Real-time Sync</h3>
                        <p className="text-slate-500 font-medium text-sm leading-relaxed">
                            Instantly sync your transactions across mobile, tablet, and desktop.
                        </p>
                    </motion.div>

                    {/* Feature 4: Smart Reminders (Large) */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-4 bg-slate-50 rounded-[3rem] p-10 border border-slate-100 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
                    >
                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center h-full">
                            <div className="flex-1">
                                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-orange-500 mb-8">
                                    <Bell size={30} />
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Smart Reminders</h3>
                                <p className="text-slate-500 font-medium leading-relaxed max-w-xs">
                                    Get intelligent notifications for upcoming dues and budget limits before they happen.
                                </p>
                            </div>

                            {/* Animated Notification Card */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="w-full md:w-72 bg-white rounded-3xl p-6 shadow-xl border border-slate-100 space-y-4"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
                                        <TrendingUp size={20} />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-2.5 bg-slate-200 rounded-full w-24" />
                                        <div className="h-2 bg-slate-100 rounded-full w-32" />
                                    </div>
                                </div>
                                <div className="pt-2 border-t border-slate-50 flex justify-between items-center">
                                    <span className="text-[10px] font-black uppercase text-slate-400">Status</span>
                                    <span className="text-[10px] font-black uppercase text-emerald-500 bg-emerald-50 px-2 py-1 rounded-md">Paid</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default Features;