import { motion } from "framer-motion";
import { Check, X, Crown, Building2, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { plans } from "../data/features";


const Pricing = () => {
    
    const user = null; 

   

    return (
        <section className="py-24 bg-[#FCFCFD] px-6 relative overflow-hidden">
            {/* Ambient Background blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* --- Header --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] uppercase bg-white border border-slate-200 text-slate-500 rounded-full shadow-sm">
                        Pricing Plans
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
                        Invest in Your <span className="text-primary">Financial Clarity</span>
                    </h2>
                    <p className="mt-6 text-slate-500 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                        No hidden fees. No surprises. Just the tools you need to master your money.
                    </p>
                </motion.div>

                {/* --- Pricing Cards --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col p-8 rounded-[2.5rem] transition-all duration-300 ${plan.highlight
                                    ? "bg-slate-900 text-white shadow-2xl md:scale-105 z-20 border-4 border-primary/20"
                                    : "bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1"
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1 rounded-full text-[10px] font-black tracking-widest uppercase shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <div className={`w-12 h-12 ${plan.bg} ${plan.color} rounded-2xl flex items-center justify-center mb-6`}>
                                    {plan.icon}
                                </div>
                                <h3 className={`text-xl font-black tracking-tight ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-sm mt-2 font-medium ${plan.highlight ? "text-slate-400" : "text-slate-500"}`}>
                                    {plan.description}
                                </p>
                                <div className="flex items-baseline gap-1 mt-6">
                                    <span className={`text-5xl font-black tracking-tighter ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                                        {plan.price !== "Custom" && "$"}
                                        {plan.price}
                                    </span>
                                    {plan.price !== "Custom" && (
                                        <span className={plan.highlight ? "text-slate-500" : "text-slate-400"}>/month</span>
                                    )}
                                </div>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center gap-3 text-sm font-medium">
                                        {feature.included ? (
                                            <Check size={18} className="text-primary shrink-0" />
                                        ) : (
                                            <X size={18} className="text-slate-300 shrink-0" />
                                        )}
                                        <span className={
                                            !feature.included ? "text-slate-300 line-through" :
                                                plan.highlight ? "text-slate-300" : "text-slate-600"
                                        }>
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to={plan.price === "Custom" ? "/contact" : "/register"}
                                className={`flex items-center justify-center gap-2 w-full h-14 rounded-2xl font-black transition-all group ${plan.highlight
                                        ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                                        : "bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white"
                                    }`}
                            >
                                {plan.buttonText}
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <p className="text-center mt-12 text-slate-400 text-sm font-medium">
                    All plans include 256-bit SSL encryption and daily backups.
                    <button className="text-primary hover:underline ml-1">Need a custom plan?</button>
                </p>
            </div>
        </section>
    );
};

export default Pricing;