import React from 'react'

const ProjectTag = ({ tag, onClick, isSelected }) => {
    const buttonStyle = isSelected
        ? "text-white border-purple-500"
        : "text-[#ADB7BE] border-slate-600 hover:border-white"
    return (
        <button
            onClick={() => onClick(tag)}
            className={`${buttonStyle} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}>
            {tag}
        </button>

    )
}

export default ProjectTag