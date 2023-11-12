import { Container } from "react-bootstrap"

const NewPost = ({ editableProject, projectIndex, editProject }) => {
    return (
        <Container className="bg-white">
            <h1 className="text-center">New post page</h1>

            <form action="" method="post">
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

            </form>
        </Container>
    )
    
}

export default NewPost;