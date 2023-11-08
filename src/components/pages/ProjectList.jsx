import { Container } from "react-bootstrap"
import ProjectCard from "../core/ProjectCard"

const ProjectList = ({ projectList, setView }) => {
    return (
        <Container>
            <h1 className="text-center">My Projects</h1>
            {projectList.map((project, key) => <ProjectCard
                key={key}
                project={project}
                setView={() => setView(key)}
            />)}
        </Container>
    )
}

export default ProjectList