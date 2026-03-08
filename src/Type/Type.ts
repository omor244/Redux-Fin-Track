import { LucideIcon } from 'lucide-react';

export interface NavItem {
    label: string;
    path: string;
    icon?: LucideIcon;
    adminOnly?: boolean;
}