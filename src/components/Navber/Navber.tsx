
import { Link, useLocation, useNavigate } from 'react-router';
import {
    Menu, LogOut,  Settings, 
    LayoutDashboard
} from 'lucide-react';

import Swal from 'sweetalert2';

// shadcn/ui components




// Your Custom Components/Hooks

import { Button } from '../ui/button';
import type { NavItem } from '../../Type/Type';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Logo from '../Logo/Logo';



const navLinks: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Features', path: '/features' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Security', path: '/security' },
];

const Navbar: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
      
    
    const isAuthenticated = true;
    const role = 'admin';
    const user = {
        displayName: "Omor Faruk",
        photoURL: "",
        email: "omor@fintrack.com"
    };

    const isActive = (path: string) => location.pathname === path;

    const handleLogout = async () => {
        const result = await Swal.fire({
            title: "Sign Out?",
            text: "Are you sure you want to end your session?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "oklch(89.33% 0.1719 115.83)", // Your Lime Green
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout",
            customClass: {
                popup: 'rounded-3xl border border-border bg-card text-card-foreground',
            }
        });

        if (result.isConfirmed) {
            // dispatch(logoutUser());
            navigate('/login');
        }
    };

    return (
        <nav className=" w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-8 lg:px-24">

               
                <div className="flex items-center gap-2">
                    <Logo className="h-10 w-auto" showText={true} />
                </div>

           
                <div className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path) ? 'text-primary' : 'text-muted-foreground'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

              
                <div className="flex items-center gap-4">
                    {!isAuthenticated ? (
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" asChild>
                                <Link to="/login">Sign In</Link>
                            </Button>
                            <Button className="rounded-full px-6 font-bold" asChild>
                                <Link to="/register">Get Started</Link>
                            </Button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3">
                        
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="relative h-10 w-10 rounded-full ring-2 ring-primary/20 ring-offset-2 ring-offset-background transition-all hover:ring-primary/50">
                                        <Avatar className="h-9 w-9">
                                            <AvatarImage src={user.photoURL} alt={user.displayName} />
                                            <AvatarFallback className="bg-primary text-primary-foreground font-bold">
                                                {user.displayName.charAt(0)}
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-64 mt-2 rounded-2xl p-2" align="end">
                                    <DropdownMenuLabel className="font-normal">
                                        <div className="flex flex-col space-y-1 p-2">
                                            <p className="text-sm font-bold leading-none">{user.displayName}</p>
                                            <p className="text-xs leading-none text-muted-foreground uppercase tracking-widest mt-1">
                                                {role} Mode
                                            </p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link to={role === 'admin' ? '/admin/dashboard' : '/dashboard'} className="cursor-pointer py-3">
                                            <LayoutDashboard className="mr-2 h-4 w-4 text-primary" />
                                            <span>Dashboard</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link to="/settings" className="cursor-pointer py-3">
                                            <Settings className="mr-2 h-4 w-4" />
                                            <span>Account Settings</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        onClick={handleLogout}
                                        className="text-destructive focus:bg-destructive focus:text-destructive-foreground cursor-pointer py-3"
                                    >
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <span>Sign Out</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            {/* Mobile Navigation Sheet */}
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon" className="lg:hidden">
                                        <Menu className="h-6 w-6" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                    <div className="flex flex-col gap-4 py-8">
                                        Logo
                                        <div className="mt-8 flex flex-col gap-4">
                                            {navLinks.map((link) => (
                                                <Link
                                                    key={link.path}
                                                    to={link.path}
                                                    className="text-lg font-semibold hover:text-primary"
                                                >
                                                    {link.label}
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="mt-auto pt-8 border-t">
                                            <Button variant="destructive" className="w-full justify-start gap-2" onClick={handleLogout}>
                                                <LogOut className="h-4 w-4" /> Sign Out
                                            </Button>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;