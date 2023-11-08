import { Button, Container } from "react-bootstrap"
import Image from "react-bootstrap/Image"

const ProjectView = ({ project, goBack }) => {
    return (
        <Container className="text-center">
            <h1>{project.project_title} {project.is_current ? "(WIP)" : ""}</h1>
            <Image className="h-1 project-banner" src={project.image}></Image>
            <hr />
            <p>{ project.description }</p>

            <div className="text-muted">
                <p>{ project.start_date }</p>
            </div>

            <div className="d-flex justify-content">
                <Button
                    className="m-5 container-fluid"
                    variant="primary"
                    href={project.link_to_project}
                >Link 1</Button>
                <Button
                    className="m-5 container-fluid"
                    variant="primary"
                    href={project.link_to_source_code}
                >Link 2</Button>
            </div>

            <div className="d-flex justify-content-end">
                <Button variant="secondary" onClick={goBack}>Back</Button>
                <div className="mx-4"></div>
            </div>
        </Container>
    )
}

export default ProjectView