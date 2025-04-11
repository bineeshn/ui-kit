import React from 'react';

export interface IBadge {
    label: string;
    variant?: 'success' | 'error' | 'caution' | 'warning' | 'info' | 'default';
}

const BADGE_VARIENTS: Record<string, string> = {
    success: 'bg-defaults-badgeBg-success border-defaults-badgeBorder-success',
    error: 'bg-defaults-badgeBg-error border-defaults-badgeBorder-error',
    caution: 'bg-defaults-badgeBg-caution border-defaults-badgeBorder-caution',
    warning: 'bg-defaults-badgeBg-warning border-defaults-badgeBorder-warning',
    info: 'bg-defaults-badgeBg-info border-defaults-badgeBorder-info',
    default: 'bg-defaults-badgeBg-default border-defaults-badgeBorder-default',
}

const Badge: React.FC<IBadge> = ({ label, variant = 'default' }) => {
    const variantClass = BADGE_VARIENTS[variant];

    return (
        <div
            className={`inline-flex items-center justify-center whitespace-nowrap rounded border border-defaults-solid px-2 py-0.5 text-sm font-normal leading-[1] text-white ${variantClass}`}
        >
            {label}
        </div>
    );
};

export default Badge;
