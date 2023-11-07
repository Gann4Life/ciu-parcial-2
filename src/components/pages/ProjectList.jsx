import { Container } from "react-bootstrap"
import ProjectCard from "../core/ProjectCard"
import { useState } from "react"

const ProjectList = ({ projectList, setProjectView }) => {
    return (
        <Container>
            <h1 className="text-center">My Projects</h1>
            {projectList.map((key, project) => <ProjectCard
                project={project}
                setProjectView={() => setProjectView(key)}
            />)}
        </Container>
    )
}

export default ProjectList