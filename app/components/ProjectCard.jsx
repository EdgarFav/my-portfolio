import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const ProjectCard = ({ imgUrl, title, description, githubUrl, previewUrl, stack, highlights }) => {
    const stackItems = stack ? stack.split(',').map(item => item.trim()).filter(Boolean) : []

    return (
        <div className='group rounded-2xl overflow-hidden border border-white/5 bg-gradient-to-b from-[#1a1a2e]/80 to-[#16162a]/90 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.08)] hover:-translate-y-1'>
            {/* Image Section */}
            <div className='h-52 md:h-72 relative overflow-hidden'>
                <div
                    className='w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110'
                    style={{ backgroundImage: `url(${imgUrl})` }}
                />
                {/* Gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent opacity-60' />

                {/* Hover overlay with links */}
                <div className='absolute inset-0 bg-[#0f0f23]/85 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500'>
                    {githubUrl && (
                        <Link href={githubUrl} target="_blank"
                            className='h-14 w-14 rounded-full border-2 border-purple-400/50 bg-purple-500/10 flex items-center justify-center hover:bg-purple-500/30 hover:border-purple-400 hover:scale-110 transition-all duration-300'>
                            <CodeBracketIcon className='w-7 h-7 text-purple-300' />
                        </Link>
                    )}
                    <Link href={previewUrl} target="_blank"
                        className='h-14 w-14 rounded-full border-2 border-cyan-400/50 bg-cyan-500/10 flex items-center justify-center hover:bg-cyan-500/30 hover:border-cyan-400 hover:scale-110 transition-all duration-300'>
                        <EyeIcon className='w-7 h-7 text-cyan-300' />
                    </Link>
                </div>
            </div>

            {/* Content Section */}
            <div className='p-5 md:p-6 space-y-4'>
                {/* Title with accent */}
                <div className='flex items-start gap-3'>
                    <div className='w-1 h-6 mt-0.5 rounded-full bg-gradient-to-b from-purple-500 to-cyan-500 flex-shrink-0' />
                    <h5 className='text-lg md:text-xl font-bold text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-500'>
                        {title}
                    </h5>
                </div>

                {/* Description */}
                <p className='text-[#9ca3af] text-sm md:text-[15px] leading-relaxed pl-4 border-l border-white/5 whitespace-pre-line'>
                    {description}
                </p>

                {/* Highlights */}
                {highlights && highlights.length > 0 && (
                    <div className='flex flex-wrap gap-2 pl-4'>
                        {highlights.map((highlight, index) => (
                            <span key={index}
                                className='inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1'>
                                <span className='w-1 h-1 rounded-full bg-emerald-400' />
                                {highlight}
                            </span>
                        ))}
                    </div>
                )}

                {/* Divider */}
                <div className='h-px bg-gradient-to-r from-transparent via-white/10 to-transparent' />

                {/* Tech Stack as badges */}
                <div>
                    <div className='flex items-center gap-2 mb-3'>
                        <svg className='w-4 h-4 text-purple-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
                        </svg>
                        <span className='text-xs font-semibold text-purple-400 uppercase tracking-wider'>Tech Stack</span>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                        {stackItems.map((tech, index) => (
                            <span key={index}
                                className='text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 text-[#c4b5fd] border border-white/5 hover:bg-purple-500/15 hover:border-purple-500/30 hover:text-purple-300 transition-all duration-300 cursor-default'>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action buttons */}
                <div className='flex gap-3 pt-1'>
                    {githubUrl && (
                        <Link href={githubUrl} target="_blank"
                            className='flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 text-sm font-medium text-[#ADB7BE] hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300'>
                            <CodeBracketIcon className='w-4 h-4' />
                            Código
                        </Link>
                    )}
                    <Link href={previewUrl} target="_blank"
                        className={`${githubUrl ? 'flex-1' : 'w-full'} flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/20 text-sm font-medium text-purple-300 hover:from-purple-600/30 hover:to-cyan-600/30 hover:border-purple-500/40 hover:text-white transition-all duration-300`}>
                        <EyeIcon className='w-4 h-4' />
                        Demo
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard