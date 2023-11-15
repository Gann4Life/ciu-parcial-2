import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const NewPost = ({ editableProject, projectIndex, editOrAddProject }) => {

    const apply = (event) => {
        event.preventDefault();
        const newProjectData = {
            index: projectIndex ? projectIndex : -1,
            project_title: event.target.title.value,
            description: event.target.description.value,
            highlighted_technologies: [],
        }
        editOrAddProject(newProjectData);
        alert("Project added! Go check it out")
    }

    return (
        <Container className="bg-white">
            <h1 className="text-center">New post page</h1>

            <form action="" method="post" onSubmit={apply}>
                <div className="row">
                    <div className="row">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="" />
                    </div>
                    <div className="row">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="row">
                        <label htmlFor="image">Image URL</label>
                        <input type="text" name="image" id=""/>
                    </div>
                </div>
                <Button variant="primary" type="submit">Send</Button>
            </form>
        </Container>
    )
    
}

export default NewPost;