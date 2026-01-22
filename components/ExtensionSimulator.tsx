
import React from 'react';
import { FadeIn } from './ui/FadeIn';

export const ExtensionSimulator: React.FC = () => {
  // Contenido HTML original de la extensión proporcionado por el usuario (sin recortes)
  const extensionCode = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Ultra V40 Workspace</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0" rel="stylesheet" />
    <style>
        :root { 
            --bg: transparent; --card: #0f0f0fb6; 
            --accent: #f97316; --border: rgba(255,255,255,0.08); 
            --font-main: 'Inter', sans-serif;
            --right-action-width: 120px;
            --col-cam: #FF65C3; 
            --col-sol: #ED0000;
            --col-nul: #FFFF00;
            --col-adj: #AF9CFF;
            --col-txt: #22c55e;
            --col-prec: #ffc765;
            --neon-def: lab(57.13% 69.13 67.12);
            --col-lum: #38bdf8;
        }
        body { 
            background: transparent; color: #fff; font-family: 'Inter', sans-serif; margin: 0; padding: 10px; 
            overflow: hidden; height: 100vh; display: flex; flex-direction: column; box-sizing: border-box; 
            user-select: none; cursor: default;
        }
        
        /* Estilos originales preservados */
        .top-row { display: flex; gap: 6px; margin-bottom: 8px; flex-shrink: 0; height: 32px; }
        .search-wrap { flex: 1.0; background: rgba(255,255,255,0.04); border: 1px solid var(--border); border-radius: 8px; display: flex; align-items: center; padding: 0 8px; }
        .search-wrap input { background: transparent; border: none; color: #fff; font-size: 10px; outline: none; width: 100%; height: 100%; font-weight: 600; }
        .engine-select { background: rgba(255,255,255,0.04); border: 1px solid var(--border); color: #d1d5db; font-weight: 900; font-size: 9px; padding: 0 8px; border-radius: 8px; cursor: pointer; outline: none; }
        .top-action-row { display: flex; gap: 6px; margin-bottom: 8px; height: 36px; }
        .top-action-row button { height: 36px; border-radius: 10px; border: none; cursor: pointer; font-weight: 900; font-size: 9px; transition: 0.2s; flex: 1; }
        #btnOptimize { background: linear-gradient(90deg, #ffb300, #fff, #ffb300); background-size: 200% 100%; animation: moveGrad 3s linear infinite; color: #2c2c2c; box-shadow: 0 0 15px rgba(249, 115, 22, 0.2); }
        @keyframes moveGrad { 0% { background-position: 0% 0%; } 100% { background-position: 200% 0%; } }
        .btn-render { background: linear-gradient(180deg, #93dfff, #0ec8e9); color: #272727; }
        .btn-render-all { background: linear-gradient(180deg, #ffe554, #f59e0b); color: #272727; }
        .tabs-container { display: flex; gap: 4px; margin-bottom: 8px; flex-shrink: 0; height: 28px; }
        .tab-btn { flex: 1; background: rgba(255,255,255,0.05); border: none; border-radius: 6px; font-size: 9px; font-weight: 900; color: #666; cursor: pointer; transition: 0.3s; }
        .tab-btn.active { background: rgba(56,189,248,0.15); color: #fff; border-bottom: 2px solid #38bdf8; }
        .main-container { flex: 1; display: flex; gap: 8px; overflow: hidden; min-height: 0; }
        .left-panel { flex: 1; background: rgba(18,18,22,0.85); border: 1px solid var(--border); border-radius: 14px; display: flex; flex-direction: column; overflow: hidden; }
        .motion-view { display: flex; padding: 15px; gap: 20px; }
        .premium-graph { width: 140px; height: 140px; flex-shrink: 0; background: radial-gradient(circle at center, #1a1a1a 0%, #030303 100%); border: 1px solid rgba(56,189,248,0.18); border-radius: 12px; box-shadow: inset 0 0 30px #000; }
        #curveCanvas { width: 100%; height: 100%; }
        .sliders-flex { flex: 1; display: flex; flex-direction: column; gap: 25px; }
        .slider-group { position: relative; width: 100%; }
        .hud-text-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
        .tech-label { font-size: 8px; letter-spacing: 2.5px; color: #666; font-weight: 900; text-transform: uppercase; }
        .cyber-number { font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 900; color: #38bdf8; text-shadow: 0 0 10px rgba(56, 189, 248, 0.5); }
        .unit { font-size: 9px; color: #005f99; margin-left: 2px; }
        input[type=range] { -webkit-appearance: none; width: 100%; background: transparent; cursor: pointer; }
        input[type=range]::-webkit-slider-runnable-track { width: 100%; height: 6px; border-radius: 4px; background: linear-gradient(90deg, #38bdf8, #ff4fd8); }
        input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; height: 18px; width: 18px; border-radius: 50%; background: #fff; border: 2px solid #38bdf8; margin-top: -6px; box-shadow: 0 0 14px rgba(56,189,248,0.8); }
        .curve-presets { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 10px; }
        .curve-btn { aspect-ratio: 1/1; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.18); border-radius: 10px; cursor: pointer; transition: 0.2s; display: flex; items-center: center; justify-content: center; overflow: hidden; }
        .curve-btn:hover { border-color: #ff4fd8; box-shadow: 0 0 15px rgba(255,79,216,0.3); }
        .sidebar { width: 120px; flex-shrink: 0; background: rgba(18,18,22,0.85); border-left: 1px solid var(--border); padding: 5px; display: flex; flex-direction: column; gap: 4px; overflow-y: auto; border-radius: 0 14px 14px 0; }
        .sidebar::-webkit-scrollbar { display: none; }
        .neon-box { aspect-ratio: 1/1; background: rgba(10,10,14,0.85); border: 1px solid var(--col, #38bdf8); border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.2s; font-size: 10px; font-weight: 900; color: var(--col, #38bdf8); text-shadow: 0 0 6px var(--col, #38bdf8); position: relative; overflow: hidden; }
        .neon-box:hover { background: var(--col); color: #000; box-shadow: 0 0 15px var(--col); }
        .n-adj { --col: #AF9CFF; } .n-sol { --col: #ED0000; } .n-nul { --col: #FFFF00; } .n-cam { --col: #FF65C3; } .n-txt { --col: #22c55e; } .n-lum { --col: #38bdf8; } .fx-pink { --col: #ff4fd8; }
        .anchor-section { background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 12px; padding: 6px; }
        .anchor-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; aspect-ratio: 1/1; }
        .anchor-btn { background: #111; border: 1px solid #333; border-radius: 4px; cursor: pointer; position: relative; }
        .anchor-btn:hover { background: var(--accent); }
        .anchor-btn::after { content: ''; width: 4px; height: 4px; background: #555; border-radius: 50%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }
        .made-by { margin-top: auto; padding: 10px 0; text-align: center; font-size: 8px; color: #555; text-decoration: none; }
        .made-by span { color: #ff4fd8; font-weight: 700; }
    </style>
</head>
<body>
    <div class="top-row">
        <div class="search-wrap"><input type="text" placeholder="SEARCH ASSETS..."></div>
        <select class="engine-select">
            <option>GOOGLE</option>
            <option>YOUTUBE</option>
            <option>SHUTTERSTOCK</option>
        </select>
    </div>

    <div class="top-action-row">
        <button id="btnOptimize"><span>OPTIMIZE</span></button>
        <button class="btn-render"><span>RENDER IMG</span></button>
        <button class="btn-render-all"><span>RENDER VID</span></button>
    </div>

    <div class="tabs-container">
        <button class="tab-btn">PRESETS</button>
        <button class="tab-btn active">CURVES</button>
        <button class="tab-btn">PERF</button>
    </div>
    
    <div class="main-container">
        <div class="left-panel">
            <div class="motion-view">
                <div class="graph-column">
                    <div class="premium-graph">
                        <canvas id="curveCanvas"></canvas>
                    </div>
                    <div class="curve-presets">
                        <div class="curve-btn"><div style="width:100%;height:100%;background:#38bdf820"></div></div>
                        <div class="curve-btn"><div style="width:100%;height:100%;background:#ff4fd820"></div></div>
                        <div class="curve-btn"><div style="width:100%;height:100%;background:#38bdf820"></div></div>
                    </div>
                </div>

                <div class="sliders-flex">
                    <div class="slider-group">
                        <div class="hud-text-row">
                            <label class="tech-label">IN ENGINE</label>
                            <div><span class="cyber-number" id="valIn">33.3</span><span class="unit">%</span></div>
                        </div>
                        <input type="range" min="0" max="100" value="33.3" oninput="document.getElementById('valIn').innerText = parseFloat(this.value).toFixed(1)">
                    </div>
                    <div class="slider-group">
                        <div class="hud-text-row">
                            <label class="tech-label">OUT ENGINE</label>
                            <div><span class="cyber-number" id="valOut">66.7</span><span class="unit">%</span></div>
                        </div>
                        <input type="range" min="0" max="100" value="66.7" oninput="document.getElementById('valOut').innerText = parseFloat(this.value).toFixed(1)">
                    </div>
                </div>
            </div>
        </div>

        <div class="sidebar">
            <div class="anchor-section">
                <div class="anchor-grid">
                    <div class="anchor-btn"></div><div class="anchor-btn"></div><div class="anchor-btn"></div>
                    <div class="anchor-btn"></div><div class="anchor-btn"></div><div class="anchor-btn"></div>
                    <div class="anchor-btn"></div><div class="anchor-btn"></div><div class="anchor-btn"></div>
                </div>
            </div>
            <div class="neon-box n-adj">ADJ</div>
            <div class="neon-box n-sol">SOL</div>
            <div class="neon-box n-nul">NUL</div>
            <div class="neon-box n-cam">CAM</div>
            <div class="neon-box n-txt">TXT</div>
            <div class="neon-box n-lum">LUM</div>
            <div class="neon-box fx-pink">BLUR</div>
            <div class="neon-box fx-pink">HUE</div>
            <a href="#" class="made-by">Made by <span>ClashiVFX</span></a>
        </div>
    </div>

    <script>
        const canvas = document.getElementById('curveCanvas');
        const ctx = canvas.getContext('2d');
        function draw() {
            ctx.clearRect(0,0,300,150);
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(20, 130);
            ctx.bezierCurveTo(60, 130, 90, 20, 130, 20);
            ctx.stroke();
        }
        draw();
    </script>
</body>
</html>
`;

  return (
    <div className="w-full max-w-6xl mx-auto my-32 px-4">
      <FadeIn>
        <div className="text-center mb-12">
           <div className="inline-block px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
             Live Workspace Preview
           </div>
           <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
             Tu flujo de trabajo, <span className="text-shimmer">evolucionado</span>
           </h2>
           <p className="text-gray-500 max-w-2xl mx-auto text-lg">
             Prueba la interfaz real de la extensión. Todo el poder de After Effects optimizado en un solo panel táctico.
           </p>
        </div>
        
        <div className="relative h-[650px] w-full">
            <iframe 
              srcDoc={extensionCode}
              title="Ultra V40 Extension Simulator"
              className="w-full h-full border-none bg-transparent"
              sandbox="allow-scripts"
              allowTransparency={true}
            />
        </div>
      </FadeIn>
    </div>
  );
};
