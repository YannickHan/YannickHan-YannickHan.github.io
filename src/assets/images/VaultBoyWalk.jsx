import React from 'react';

function VaultBoyWalk({ className = 'h-60 w-auto' }) {
  return (
    <svg
      viewBox="0 0 220 310"
      className={`${className} drop-shadow-[0_0_8px_rgba(20,254,23,0.85)]`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* =========================================================
          1. JAMBE ARRIÈRE (DROITE - CHAUSSURE TOURNÉE À DROITE)
      ========================================================= */}
      <g>
        {/* Pantalon jambe arrière */}
        <path
          d="M 113 174 C 112 198, 114 224, 118 258 L 140 258 C 143 224, 144 198, 143 174 Z"
          fill="#14fe17"
          stroke="#081408"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* Plis du genou et du pantalon arrière */}
        <path
          d="M 116 214 Q 125 217 135 213"
          fill="none"
          stroke="#081408"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 121 221 Q 130 223 139 220"
          fill="none"
          stroke="#081408"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Revers bas du pantalon arrière */}
        <path
          d="M 117 251 L 141 251"
          fill="none"
          stroke="#081408"
          strokeWidth="3"
        />
        {/* Chaussure arrière tournée vers la droite (talon à gauche, bout à droite) */}
        <path
          d="M 118 258 L 140 258 L 150 260 C 158 263, 161 268, 158 271 C 153 275, 139 272, 133 266 L 127 266 L 126 269 L 117 269 Z"
          fill="#14fe17"
          stroke="#081408"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* Couture semelle et bout de chaussure */}
        <path
          d="M 157 267 C 148 269, 137 266, 131 262"
          fill="none"
          stroke="#081408"
          strokeWidth="2.2"
        />
        <path
          d="M 148 260 Q 144 264 145 268"
          fill="none"
          stroke="#081408"
          strokeWidth="2"
        />
      </g>

      {/* =========================================================
          2. BRAS ARRIÈRE (GAUCHE)
      ========================================================= */}
      <g>
        <path
          d="M 88 104 C 74 118, 62 138, 56 156 L 73 163 C 80 148, 90 132, 98 118 Z"
          fill="#14fe17"
          stroke="#081408"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M 73 134 Q 80 138 86 136"
          fill="none"
          stroke="#081408"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 58 152 L 73 159"
          fill="none"
          stroke="#081408"
          strokeWidth="2.8"
        />
        <path
          d="M 57 156 C 50 161, 47 170, 50 177 C 52 181, 56 181, 57 177 C 58 182, 62 183, 64 178 C 66 182, 70 181, 70 175 C 72 176, 75 173, 74 168 C 74 164, 72 161, 71 161 Z"
          fill="#14fe17"
          stroke="#081408"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />
        <path
          d="M 56 168 L 57 177 M 62 169 L 64 178 M 68 168 L 70 175"
          fill="none"
          stroke="#081408"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* =========================================================
          3. JAMBE AVANT (GAUCHE - LÉGÈREMENT PLUS À GAUCHE)
      ========================================================= */}
      <g>
        <path
          d="M 84 174 C 83 198, 84 226, 88 258 L 110 258 C 113 228, 115 198, 114 174 Z"
          fill="#14fe17"
          stroke="#081408"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M 86 214 Q 96 217 105 213"
          fill="none"
          stroke="#081408"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 92 221 Q 101 223 110 220"
          fill="none"
          stroke="#081408"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 87 251 L 111 251"
          fill="none"
          stroke="#081408"
          strokeWidth="3"
        />
        <path
          d="M 88 258 L 110 258 L 111 269 L 102 269 L 101 266 L 95 266 C 89 272, 75 275, 70 271 C 67 268, 70 263, 78 260 Z"
          fill="#14fe17"
          stroke="#081408"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M 71 267 C 80 269, 91 266, 97 262"
          fill="none"
          stroke="#081408"
          strokeWidth="2.2"
        />
        <path
          d="M 80 260 Q 84 264 83 268"
          fill="none"
          stroke="#081408"
          strokeWidth="2"
        />
      </g>

      {/* =========================================================
          4. TORSE & COMBINAISON VAULT-TEC (ÉPAULE DROITE LISSÉE)
      ========================================================= */}
      <g>
        <path
          d="M 88 100 C 102 97, 120 99, 130 105 C 138 128, 138 156, 134 176 C 116 182, 94 180, 84 173 C 83 150, 84 124, 88 100 Z"
          fill="#14fe17"
          stroke="#081408"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Col roulé */}
        <path
          d="M 93 96 C 97 108, 116 110, 124 99 L 127 106 C 117 118, 95 116, 90 103 Z"
          fill="#14fe17"
          stroke="#081408"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />

        {/* Fermeture éclair centrale */}
        <path
          d="M 103 114 L 101 178"
          fill="none"
          stroke="#081408"
          strokeWidth="3.2"
        />
        <path
          d="M 109 114 L 107 178"
          fill="none"
          stroke="#081408"
          strokeWidth="2.2"
        />

        {/* Lignes pectorales */}
        <path
          d="M 86 138 C 92 141, 98 141, 102 140"
          fill="none"
          stroke="#081408"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M 109 140 C 118 141, 128 139, 135 135"
          fill="none"
          stroke="#081408"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* Ceinture / taille */}
        <path
          d="M 84 166 C 98 172, 120 172, 135 167"
          fill="none"
          stroke="#081408"
          strokeWidth="3"
        />
      </g>

      {/* =========================================================
          5. BRAS AVANT (DROIT - ALIGNÉ AVEC L'ÉPAULE)
      ========================================================= */}
      <g>
        <path
          d="M 124 102 C 142 118, 152 140, 156 164 L 138 167 C 134 148, 126 132, 118 119 Z"
          fill="#14fe17"
          stroke="#081408"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M 134 139 Q 141 141 147 137"
          fill="none"
          stroke="#081408"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 138 161 L 155 159"
          fill="none"
          stroke="#081408"
          strokeWidth="2.8"
        />
        <path
          d="M 139 166 C 135 170, 133 177, 136 181 C 138 183, 141 180, 142 176 L 143 185 C 144 189, 148 189, 149 184 L 151 186 C 153 189, 156 188, 156 183 L 158 183 C 160 185, 162 182, 160 176 C 159 171, 157 166, 155 164 Z"
          fill="#14fe17"
          stroke="#081408"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />
        <path
          d="M 148 175 L 149 184 M 154 174 L 156 183"
          fill="none"
          stroke="#081408"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* =========================================================
          6. TÊTE & VISAGE
      ========================================================= */}
      <g>
        <path
          d="M 85 45 C 82 58, 82 76, 90 88 C 98 98, 116 99, 126 88 C 131 82, 133 74, 133 65 C 133 50, 122 38, 105 38 C 95 38, 88 41, 85 45 Z"
          fill="#14fe17"
          stroke="#081408"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M 84 48 C 77 44, 78 34, 86 35 C 83 27, 94 20, 104 25 C 113 17, 132 20, 138 33 C 145 40, 143 56, 135 63 C 134 55, 129 48, 122 46 C 116 49, 108 46, 104 41 C 98 46, 90 48, 84 48 Z"
          fill="#14fe17"
          stroke="#081408"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M 105 26 C 114 27, 124 31, 130 39"
          fill="none"
          stroke="#081408"
          strokeWidth="2.3"
          strokeLinecap="round"
        />
        <path
          d="M 129 63 C 137 61, 139 74, 130 76"
          fill="#14fe17"
          stroke="#081408"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 131 67 C 134 67, 134 72, 131 72"
          fill="none"
          stroke="#081408"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 88 53 Q 93 49 98 52"
          fill="none"
          stroke="#081408"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M 106 54 Q 112 50 118 54"
          fill="none"
          stroke="#081408"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <ellipse cx="92" cy="60" rx="2.3" ry="3.2" fill="#081408" />
        <ellipse cx="111" cy="61" rx="2.4" ry="3.3" fill="#081408" />
        <path
          d="M 98 61 L 92 71 C 91 73, 94 75, 98 74"
          fill="none"
          stroke="#081408"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 88 78 C 95 87, 110 87, 118 78"
          fill="none"
          stroke="#081408"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M 86 76 C 85 78, 86 81, 89 81"
          fill="none"
          stroke="#081408"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M 118 75 C 120 77, 119 80, 116 81"
          fill="none"
          stroke="#081408"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M 99 90 Q 104 92 109 90"
          fill="none"
          stroke="#081408"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export default VaultBoyWalk;