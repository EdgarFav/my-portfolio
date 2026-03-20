import React from 'react'

const ProjectTag = ({ tag, onClick, isSelected }) => {
    const buttonStyle = isSelected
        ? "text-white bg-gradient-to-r from-purple-600/30 to-cyan-600/30 border-purple-500/50 shadow-[0_0_15px_rgba(139,92,246,0.15)]"
        : "text-[#ADB7BE] border-white/10 bg-white/5 hover:border-purple-500/30 hover:text-white hover:bg-white/10"
    return (
        <button
            onClick={() => onClick(tag)}
            className={`${buttonStyle} rounded-full border px-6 py-2.5 text-sm md:text-base font-medium cursor-pointer transition-all duration-300`}>
            {tag}
        </button>

    )
}

export default ProjectTag