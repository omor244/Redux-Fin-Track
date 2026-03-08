import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {features} from "../data/features" 


const WhyChoose = () => {
    return (
        <section className="py-24 px-6  relative overflow-hidden">
            {/* Subtle background gradient blob */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10" />

            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4 block">
                        Features
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                        Why Choose <span className="text-primary">FinTrack?</span>
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                        We provide the world's most comprehensive tools for financial success,
                        built for the modern professional.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: feature.delay, duration: 0.5 }}
                            whileHover={{ y: -8 }}
                            className="group relative bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                        >
                            {/* Icon Box */}
                            <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-inherit`}>
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                                {feature.title}
                                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-primary" />
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                                {feature.desc}
                            </p>

                            {/* Bottom decorative bar */}
                            <div className="absolute bottom-0 left-8 right-8 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;