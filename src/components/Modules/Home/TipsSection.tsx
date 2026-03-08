import React from 'react';
import { Lightbulb, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useGetTaskQuery } from '../../../Redux/Api/Trip';


const TipsSection = () => {
    // Fetching data via Redux RTK Query
    const { data: trips = [], isLoading } = useGetTaskQuery(undefined);

    // Skeleton Loader for Industry-Level UX
    if (isLoading) {
        return (
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-[350px] bg-slate-100 animate-pulse rounded-[2.5rem]" />
                ))}
            </div>
        );
    }

    return (
        <section className="py-20  overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-4">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <div className="p-2 bg-primary/10 rounded-xl">
                                <Sparkles size={18} className="text-primary" />
                            </div>
                            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-primary">
                                FinTrack Expert Advice
                            </span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black text-foreground tracking-tight">
                            Featured <span className="text-primary">Financial</span> Tips
                        </h2>
                    </motion.div>
                </div>

                {/* Tips Grid with Animation */}
                <motion.div 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: { staggerChildren: 0.15 }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {trips.slice(0, 4).map((tip: any) => (
                        <motion.div 
                            key={tip._id}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0 }
                            }}
                            className="group relative bg-card hover:bg-card/50 p-8 rounded-[2.5rem] border border-border shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer overflow-hidden"
                        >
                            {/* Animated Background Gradient */}
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" />

                            <div className="relative z-10">
                                {/* Category & Icon */}
                                <div className="flex justify-between items-center mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                                        <Lightbulb size={28} />
                                    </div>
                                    <span className="px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full text-[10px] font-black uppercase tracking-widest border border-border">
                                        {tip.category || "General"}
                                    </span>
                                </div>

                                {/* Main Content */}
                                <h3 className="text-2xl font-black text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                                    {tip.title}
                                </h3>
                                <p className="text-muted-foreground font-medium leading-relaxed mb-8 line-clamp-3 text-sm">
                                    {tip.description}
                                </p>

                                {/* Footer Info */}
                                <div className="pt-6 border-t border-border flex items-center justify-between">
                                    <span className="text-[11px] font-black text-muted-foreground/60 uppercase tracking-tighter">
                                        FinTrack Insights 2026
                                    </span>
                                    <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                                        <ArrowRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TipsSection;