import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-slate-900 overflow-hidden flex items-center justify-center">
      
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Optional: Overlaying a subtle grid layer (Uses a transparent SVG pattern) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>

      {/* Your Attractive Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-4 max-w-4xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 mb-6 tracking-wider uppercase border border-indigo-500/20">
          🚀 Introducing MockMind AI
        </span>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 leading-tight mb-6">
          Welcome to the World of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Interviews</span>
        </h1>

        <p className="max-w-xl text-base sm:text-xl text-slate-400 font-normal tracking-wide leading-relaxed mb-10">
          Elevate your preparation, build ultimate confidence, and let’s crack your dream interview together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-600/30 transition-all duration-200 transform hover:-translate-y-0.5"
          onClick={()=>{
            navigate('/signup')
          }}>
            Start Free Mock Session
          </button>
          <button className="px-8 py-3.5 bg-slate-800/80 hover:bg-slate-800 text-slate-300 font-semibold rounded-xl border border-slate-700/60 transition-all duration-200">
            See How It Works
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home