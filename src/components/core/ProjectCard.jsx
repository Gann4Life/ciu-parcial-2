import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";


const ProjectCard = ({ project, setView }) => {

	const typeOne = <Card className="my-3">
						{/* <Card.Img variant="top" src="img/circle x1024.png" /> */}
						<div className="row text-center">
							<Image className="col w-25 m-3 project-thumbnail" src={project.image}></Image>
							<div className="col-sm container-fluid">
								<Card.Body>
									<Card.Title>{project.project_title}</Card.Title>
									<Card.Text>{project.description}</Card.Text>
								</Card.Body>
								{/*<div className="text-muted row">
									{project.highlighted_technologies.map(tech => <p className="col-sm">{tech}</p>)}
					</div>*/}
								<Card.Body className="d-flex justify-content-evenly">
									<Button className="container-fluid" variant="primary" onClick={setView}>
										View
									</Button>
								</Card.Body>
							</div>
						</div>
					</Card>
	
	return (
		typeOne
	);
}

export default ProjectCard;
