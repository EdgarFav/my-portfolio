import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClases = active
        ? 'text-white border-b border-purple-500 cursor-pointer'
        : 'text-[#ADB7BE] cursor-pointer'
    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClases}`}>
                {children}
            </p>
        </button>

    )
}

export default TabButton
