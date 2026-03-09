import { motion } from "framer-motion";
import { ShieldCheck,  CheckCircle2 } from "lucide-react";
import { stats } from "../data/features";



const MetricsSection = () => {
    return (
        <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
            {/* --- Advanced Background Decor --- */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-600 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* --- Left Content: Security Narrative --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
                            <ShieldCheck size={16} /> Trusted by Industry Leaders
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                            We take your <span className="text-primary">Financial Security</span> seriously.
                        </h2>

                        <p className="text-slate-400 text-lg leading-relaxed font-medium max-w-xl">
                            FinTrack uses the same encryption standards as global banks. Your data is encrypted at rest and in transit. We never sell your data to third parties.
                        </p>

                        {/* Security Badges */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            {[
                                { text: "SOC2 Type II Compliant", color: "text-emerald-400", bg: "bg-emerald-400/10" },
                                { text: "256-bit AES Encryption", color: "text-blue-400", bg: "bg-blue-400/10" }
                            ].map((badge, i) => (
                                <div key={i} className={`${badge.bg} ${badge.color} px-5 py-3 rounded-2xl border border-white/5 flex items-center gap-3 shadow-2xl`}>
                                    <CheckCircle2 size={18} />
                                    <span className="text-sm font-bold tracking-wide">{badge.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* --- Right Content: Stats Grid --- */}
                    <div className="grid grid-cols-2 gap-4 md:gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: stat.delay, duration: 0.5 }}
                                whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                                className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 transition-all duration-300 group relative"
                            >
                                {/* Glowing Accent on Hover */}
                                <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />

                                <div className="text-primary mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                    {stat.icon}
                                </div>

                                <div className="text-3xl md:text-4xl font-black mb-2 tracking-tighter">
                                    {stat.value}
                                </div>

                                <div className="text-slate-500 font-black text-[10px] uppercase tracking-widest">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MetricsSection;