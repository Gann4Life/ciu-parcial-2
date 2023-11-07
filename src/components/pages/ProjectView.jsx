import { Button, Container } from "react-bootstrap"
import Image from "react-bootstrap/Image"

const ProjectView = ({ project }) => {
    return (
        <Container className="text-center">
            <h1>{project.title} {project.work_in_progress ? "(WIP)" : ""}NYA</h1>
            <Image className="h-1 project-banner" src={project.image_url}></Image>
            <hr />
            <p>{ project.description }</p>

            <div className="text-muted">
                <p>{ project.start_date } - { project.end_date }</p>
            </div>

            <div className="d-flex justify-content">
                <Button className="m-5 container-fluid" variant="primary">Link 1</Button>
                <Button className="m-5 container-fluid" variant="primary">Link 2</Button>
            </div>

            <div className="d-flex justify-content-end">
                <Button variant="secondary">Back</Button>
                <div className="mx-4"></div>
            </div>
        </Container>
    )
}

export default ProjectView