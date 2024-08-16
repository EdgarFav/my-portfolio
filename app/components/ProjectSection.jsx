'use client'
import React, { useState } from 'react'
import { PROJECTS_DATA } from '../constants'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const ProjectSection = () => {
    const [tag, setTag] = useState("All")
    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = PROJECTS_DATA.filter((project) =>
        project.tags.includes(tag))
    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag
                    onClick={handleTagChange}
                    tag="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    tag="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    tag="Mobile"
                    isSelected={tag === "Mobile"}
                />
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project) =>
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        githubUrl={project.githubUrl}
                        previewUrl={project.previewUrl} />)}
            </div>
        </>
    )
}

export default ProjectSection