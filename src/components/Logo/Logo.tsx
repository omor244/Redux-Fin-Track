import React from 'react';
import { Link } from 'react-router';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
    showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, showText = true, ...props }) => {
    return (
        <Link to={"/"}>
        <svg
            viewBox="0 0 200 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            {/* --- Icon: The Growth Bolt --- */}
            <g id="LogoIcon">
                {/* Outer Glow / Shadow for Glassmorphism effect */}
                <path
                    d="M12 25L28 10L24 22H38L22 38L26 26H12Z"
                    fill="currentColor"
                    className="text-primary/20 blur-[2px]"
                />
                {/* Main Bolt Body */}
                <path
                    d="M10 24L26 9L22 21H36L20 37L24 25H10Z"
                    fill="currentColor"
                    className="text-primary"
                />
            </g>

            {/* --- Text: FinTrack --- */}
            {showText && (
                <g id="LogoText">
                    <text
                        x="50"
                        y="32"
                        fill="currentColor"
                        className="text-foreground font-sans font-black text-[28px] tracking-tighter"
                    >
                        Fin
                            <tspan className="text-[#195353]">Track</tspan>
                    </text>

                    {/* Subtle Decorative Element */}
                    <rect
                        x="50"
                        y="38"
                        width="20"
                        height="2"
                        rx="1"
                        fill="currentColor"
                        className="text-primary/40"
                    />
                </g>
            )}
        </svg>
        
        </Link>
    );
};

export default Logo;