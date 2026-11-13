import React from 'react';

function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#081408] px-3 pt-4 pb-2.5 font-pipboy uppercase tracking-[2px] text-[#14fe17] select-none sm:px-10 sm:pt-5">
            {/* Sous-barre d'état secondaire */}
            <div className="relative z-20 mt-2 flex justify-between bg-[#14fe17]/25 px-3 py-1 text-xs [text-shadow:0_0_4px_#14fe17] sm:text-sm">
                <span>HP 100/100</span>
                <span>PORTFOLIO OS v1.0</span>
                <span>AP 90/90</span>
            </div>
        </footer>
    );
}

export default Footer;