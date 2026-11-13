import React, { useState } from 'react';

function Map() {
  const [selectedZone, setSelectedZone] = useState('PARIS');

  return (
    <section className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-3 pt-2 pb-4 font-pipboy text-[#14fe17] select-none sm:px-6">
      
      {/* En-tête de la carte (Localisation actuelle) */}
      <div className="mb-3 flex flex-wrap items-center justify-between border-b border-[#14fe17]/40 pb-2 text-xs tracking-widest uppercase sm:text-sm">
        <span>SECTEUR : FRANCE MÉTROPOLITAINE</span>
        <span className="bg-[#14fe17]/20 px-2 py-0.5 [text-shadow:0_0_6px_#14fe17]">
          48.8566° N, 2.3522° E
        </span>
      </div>

      {/* Zone principale : Carte radar de la France en SVG */}
      <div className="relative my-auto flex flex-1 items-center justify-center overflow-hidden border-2 border-[#14fe17]/50 bg-[#14fe17]/5 p-4 shadow-[inset_0_0_25px_rgba(20,254,23,0.12)]">
        
        {/* Grille radar de fond */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(to right, #14fe17 1px, transparent 1px), linear-gradient(to bottom, #14fe17 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* SVG de la France avec marqueur sur Paris */}
        <svg
          viewBox="0 0 500 500"
          className="relative z-10 h-full max-h-[380px] w-auto drop-shadow-[0_0_10px_rgba(20,254,23,0.65)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cercles concentriques façon sonar Pip-Boy centrés sur Paris */}
          <circle
            cx="265"
            cy="155"
            r="65"
            fill="none"
            stroke="#14fe17"
            strokeOpacity="0.2"
            strokeDasharray="4 4"
          />
          <circle
            cx="265"
            cy="155"
            r="135"
            fill="none"
            stroke="#14fe17"
            strokeOpacity="0.15"
            strokeDasharray="6 6"
          />
          <circle
            cx="265"
            cy="155"
            r="210"
            fill="none"
            stroke="#14fe17"
            strokeOpacity="0.1"
          />

          {/* Silhouette stylisée de la France métropolitaine (Hexagone) */}
          <path
            d="
              M 252 38
              L 285 52
              L 325 78
              L 382 102
              L 426 118
              L 415 156
              L 392 182
              L 404 222
              L 386 254
              L 402 292
              L 425 322
              L 416 358
              L 384 378
              L 345 384
              L 318 408
              L 282 426
              L 246 422
              L 192 406
              L 154 396
              L 148 362
              L 164 316
              L 172 268
              L 142 224
              L 106 196
              L 66 184
              L 62 162
              L 98 144
              L 142 146
              L 156 122
              L 146 98
              L 174 96
              L 198 112
              L 228 92
              L 242 62
              Z
            "
            fill="#14fe17"
            fillOpacity="0.12"
            stroke="#14fe17"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Corse */}
          <path
            d="M 442 386 L 454 398 L 452 428 L 440 438 L 434 416 Z"
            fill="#14fe17"
            fillOpacity="0.12"
            stroke="#14fe17"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Lignes de visée (réticule) convergentes vers Paris */}
          <line
            x1="265"
            y1="20"
            x2="265"
            y2="138"
            stroke="#14fe17"
            strokeWidth="1.2"
            strokeOpacity="0.45"
          />
          <line
            x1="265"
            y1="172"
            x2="265"
            y2="450"
            stroke="#14fe17"
            strokeWidth="1.2"
            strokeOpacity="0.45"
          />
          <line
            x1="40"
            y1="155"
            x2="248"
            y2="155"
            stroke="#14fe17"
            strokeWidth="1.2"
            strokeOpacity="0.45"
          />
          <line
            x1="282"
            y1="155"
            x2="460"
            y2="155"
            stroke="#14fe17"
            strokeWidth="1.2"
            strokeOpacity="0.45"
          />

          {/* =====================================================
              MARQUEUR INTERACTIF : PARIS (ÎLE-DE-FRANCE)
          ===================================================== */}
          <g
            className="cursor-pointer"
            onClick={() => setSelectedZone('PARIS')}
          >
            {/* Onde radar pulsante */}
            <circle
              cx="265"
              cy="155"
              r="18"
              fill="none"
              stroke="#14fe17"
              strokeWidth="2"
              className="origin-[265px_155px] animate-ping"
            />

            {/* Carré de sélection style Pip-Boy autour de Paris */}
            <rect
              x="253"
              y="143"
              width="24"
              height="24"
              fill="#14fe17"
              fillOpacity="0.2"
              stroke="#14fe17"
              strokeWidth="2.5"
            />

            {/* Point central lumineux */}
            <circle cx="265" cy="155" r="5" fill="#14fe17" />

            {/* Étiquette PARIS avec trait de liaison */}
            <polyline
              points="277,145 296,126 368,126"
              fill="none"
              stroke="#14fe17"
              strokeWidth="2"
            />
            <rect
              x="296"
              y="104"
              width="74"
              height="22"
              fill="#081408"
              stroke="#14fe17"
              strokeWidth="1.5"
            />
            <text
              x="333"
              y="119"
              textAnchor="middle"
              fill="#14fe17"
              fontSize="13"
              fontWeight="bold"
              letterSpacing="2"
            >
              PARIS
            </text>
          </g>
        </svg>

        {/* Encart d'information en bas à gauche de la carte */}
        {selectedZone === 'PARIS' && (
          <div className="absolute bottom-3 left-3 z-20 border border-[#14fe17] bg-[#081408]/90 px-3 py-2 text-xs shadow-[0_0_10px_rgba(20,254,23,0.3)] sm:text-sm">
            <div className="font-bold tracking-wider">
              ⌖ BASE OPÉRATIONNELLE : PARIS / ÎLE-DE-FRANCE
            </div>
            <div className="mt-0.5 text-[#14fe17]/80">
              Mobilité : Région Parisienne & Télétravail
            </div>
          </div>
        )}
      </div>

      {/* Barre inférieure (HP / LEVEL / AP) */}
      <footer className="mt-4 grid grid-cols-12 items-center gap-2 text-xs font-bold tracking-wider sm:text-base">
        <div className="col-span-3 bg-[#14fe17]/25 px-2.5 py-1.5 [text-shadow:0_0_4px_#14fe17]">
          HP 100/100
        </div>

        <div className="col-span-6 flex items-center gap-2 bg-[#14fe17]/25 px-3 py-1.5 [text-shadow:0_0_4px_#14fe17]">
          <span className="shrink-0">LEVEL 26</span>
          <div className="h-3.5 flex-1 border-2 border-[#14fe17] p-0.5">
            <div className="h-full w-3/4 bg-[#14fe17] shadow-[0_0_6px_#14fe17]" />
          </div>
        </div>

        <div className="col-span-3 bg-[#14fe17]/25 px-2.5 py-1.5 text-right [text-shadow:0_0_4px_#14fe17]">
          AP 90/90
        </div>
      </footer>
    </section>
  );
}

export default Map;