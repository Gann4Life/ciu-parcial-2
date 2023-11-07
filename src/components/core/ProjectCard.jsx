import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";


const ProjectCard = ({ project }) => {

	return (
		<Card className="my-3">
			{/* <Card.Img variant="top" src="img/circle x1024.png" /> */}
			<div className="d-flex">
				<Image className="w-25 m-3" src="img/circle x1024.png"></Image>
				<div className="container-fluid">
					<Card.Body>
						<Card.Title>{project.title}</Card.Title>
						<Card.Text>{project.description}</Card.Text>
					</Card.Body>
					<Card.Body className="d-flex justify-content-evenly">
						<Button variant="primary">DEMO</Button>
						<Button variant="secondary">SOURCE</Button>
					</Card.Body>
				</div>
			</div>
		</Card>
	);
}

export default ProjectCard;
