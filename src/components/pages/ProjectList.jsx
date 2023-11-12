import { Container } from "react-bootstrap"
import ProjectCard from "../core/ProjectCard"
import FilterDropdown from "../core/FilterDropdown"
import { useState } from "react"

const ProjectList = ({ projectList, setView }) => {

    // const [filterTags, setFilterTags] = useState([])
    const [filterTag, setFilterTag] = useState("all")

    function applyFilter(tag) {
        setFilterTag(tag);
    }

    function uniqueTags() {
        let tags = ["all"]
        projectList.forEach(project => {
            project.highlighted_technologies.forEach(tag => {
                if (!tags.includes(tag)) {
                    tags.push(tag)
                }
            })
        })
        return tags
    }

    const filteredProjectList = () => {
        const filteredProjectList = projectList.filter(project => project.highlighted_technologies.includes(filterTag))
        return filteredProjectList
    }

    const mapProjectList = (projects) => {
        return projects.map((project, key) => <ProjectCard
            key={key}
            project={project}
            setView={() => setView(key)}
        />)
    }

    return (
        <Container className="bg-body-tertiary">

            <h1 className="text-center">My Projects</h1>

            <hr />
            <div className="d-flex justify-content-end">
                <FilterDropdown
                    tags={uniqueTags()}               
                    setFilterTag={setFilterTag}                         
                />
            </div>
            <hr />

            <div className="">
                {filterTag === "all"
                    ? mapProjectList(projectList)
                    : mapProjectList(filteredProjectList())}
            </div>

        </Container>
    )
}

export default ProjectList