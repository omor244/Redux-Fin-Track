// import { LucideIcon } from 'lucide-react';

export interface NavItem {
    label: string;
    path: string;
    // icon?: LucideIcon;
    adminOnly?: boolean;
}

 export interface PaymentTabProps {
    active: boolean;
    onClick: () => void;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
}


export interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}


export interface SummaryRowProps {
    label: string;
    value: string | number; // Can be a string like "$10" or a number like 10
}