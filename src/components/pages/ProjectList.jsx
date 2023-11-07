import { Container } from "react-bootstrap"
import ProjectCard from "../core/ProjectCard"
import { useState } from "react"

const ProjectList = ({ projectList }) => {

    const [setViewing, getViewing] = useState(-1);


    return (
        <Container>
            <h1 className="text-center">My Projects</h1>
            { projectList.map(project => <ProjectCard project={project} />) }
        </Container>
    )
}

export default ProjectList