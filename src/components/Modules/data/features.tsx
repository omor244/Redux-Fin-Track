
import { Bell, PieChart, Target, TrendingUp, Zap, Lock as LockIcon, EyeOff, Server, Key, Lock } from "lucide-react";
import { FaChartPie, FaRocket, FaUserPlus } from "react-icons/fa";
import {  Crown, Building2 } from "lucide-react";
import {  Users, Globe, Landmark } from "lucide-react";

const user = null

 export const features = [
    {
        title: "Expense Tracking",
        desc: "Record and categorize all income and expenses with real-time insights.",
        icon: <TrendingUp className="w-6 h-6" />,
        color: "bg-blue-500",
        delay: 0.1,
    },
    {
        title: "Smart Analytics",
        desc: "Visualize your financial data with high-end interactive charts and reports.",
        icon: <PieChart className="w-6 h-6" />,
        color: "bg-purple-500",
        delay: 0.2,
    },
    {
        title: "Savings Goals",
        desc: "Set and track targets. Monitor progress toward major financial milestones.",
        icon: <Target className="w-6 h-6" />,
        color: "bg-emerald-500",
        delay: 0.3,
    },
    {
        title: "Smart Notifications",
        desc: "Get reminders for bills, budget limits, and personalized financial alerts.",
        icon: <Bell className="w-6 h-6" />,
        color: "bg-amber-500",
        delay: 0.4,
    },
    {
        title: "Bank-Level Security",
        desc: "Your data is encrypted with AES-256 industry-standard security measures.",
        icon: <LockIcon className="w-6 h-6" />,
        color: "bg-rose-500",
        delay: 0.5,
    },
    {
        title: "AI Financial Insights",
        desc: "Personalized recommendations based on your unique spending behavior.",
        icon: <Zap className="w-6 h-6" />,
        color: "bg-indigo-500",
        delay: 0.6,
    },
];


export const steps = [
    {
        id: 1,
        title: "Create Account",
        description: "Sign up in seconds and securely connect your profile to start your financial journey.",
        icon: <FaUserPlus />,
        color: "from-blue-500 to-cyan-400",
        shadow: "shadow-blue-200",
    },
    {
        id: 2,
        title: "Log Transactions",
        description: "Add your daily expenses and income. Our smart AI categorizes them automatically.",
        icon: <FaChartPie />,
        color: "from-indigo-500 to-purple-500",
        shadow: "shadow-indigo-200",
    },
    {
        id: 3,
        title: "Grow Your Wealth",
        description: "Analyze your spending habits and hit your savings goals with data-driven insights.",
        icon: <FaRocket />,
        color: "from-emerald-500 to-teal-400",
        shadow: "shadow-emerald-200",
    },
];


export const plans = [
    {
        name: "Starter",
        price: "0",
        description: "Perfect for individuals just starting their journey.",
        icon: <Zap size={24} />,
        features: [
            { text: "Expense tracking", included: true },
            { text: "Basic financial charts", included: true },
            { text: "Manual data entry", included: true },
            { text: "Advanced AI Insights", included: false },
        ],
        buttonText: user ? "Current Plan" : "Get Started",
        highlight: false,
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        name: "Professional",
        price: "4.99",
        description: "Advanced tools for serious wealth builders.",
        icon: <Crown size={24} />,
        features: [
            { text: "All Starter features", included: true },
            { text: "Savings & Budget goals", included: true },
            { text: "Smart Bill reminders", included: true },
            { text: "Priority Email support", included: true },
        ],
        buttonText: "Go Pro Now",
        highlight: true,
        color: "text-black",
        bg: "bg-primary/20",
    },
    {
        name: "Business",
        price: "Custom",
        description: "Tailored solutions for teams and businesses.",
        icon: <Building2 size={24} />,
        features: [
            { text: "Multi-user access", included: true },
            { text: "Advanced API Access", included: true },
            { text: "24/7 Dedicated Manager", included: true },
            { text: "Custom Report Builder", included: true },
        ],
        buttonText: "Contact Sales",
        highlight: false,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
    },
];




 export const stats = [
    { label: "Active Users", value: "10K+", icon: <Users size={28} />, delay: 0.2 },
    { label: "Transactions", value: "$2M+", icon: <TrendingUp size={28} />, delay: 0.3 },
    { label: "Countries", value: "50+", icon: <Globe size={28} />, delay: 0.4 },
    { label: "Partner Banks", value: "100+", icon: <Landmark size={28} />, delay: 0.5 },
];


export const securityFeatures = [
    {
        title: "Bank-Grade Encryption",
        description: "All financial data is encrypted using AES-256 bit protocols, the global standard for banking institutions.",
        icon: <Lock className="text-orange-600" />,
    },
    {
        title: "Zero-Knowledge Privacy",
        description: "We never sell your data. Your financial records are private, ensuring you remain in total control.",
        icon: <EyeOff className="text-emerald-500" />,
    },
    {
        title: "Hardened Infrastructure",
        description: "Hosted in SOC2 Type II compliant data centers with 24/7 monitoring and physical security layers.",
        icon: <Server className="text-blue-500" />,
    },
    {
        title: "Multi-Factor Auth",
        description: "Secure your account with 2FA, adding an essential layer of protection beyond just a password.",
        icon: <Key className="text-amber-500" />,
    }
];