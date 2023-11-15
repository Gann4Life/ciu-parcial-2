import { useEffect, useState } from "react";
import NavigationBar from "./components/core/NavigationBar";
import ProjectList from "./components/pages/ProjectList";
import ProjectView from "./components/pages/ProjectView";
import NewPost from "./components/pages/NewPost"
import FetchProjects, { username } from "./components/coders-rank/data";

function App() {

	const [currentPage, setPage] = useState("view")

	const [getProjectView, setProjectView] = useState(-1)
	const [projects, setProjects] = useState([])
	
	const projectListView = () => setProjectView(-1);

	const loadProjects = async () => {
		setProjects(await FetchProjects())
		console.log(projects);
	}

	const newPost = () => {
		setPage("post");
	}

	const editOrAddProject = (data) => {
		//TODO: Make an existing project editable
		setProjects(current => [data, ...current])
	}

	const viewPosts = () => {
		setPage("view");
	}

	const currentView = () => {
		if(currentPage === "view") return <ProjectList
			projectList={projects}
			setView={setProjectView}
		/>

		if (currentPage === "post") return <NewPost editOrAddProject={editOrAddProject} />
	}
	
	useEffect(() => {
		loadProjects();
	}, [])

    return (
		<div className="bg-body-secondary">
			<NavigationBar
				uploadProject={newPost}
				home={viewPosts}
			/>
	
			{getProjectView === -1 ?
				currentView()
				:
				<ProjectView
					project={projects[getProjectView]}
					goBack={projectListView}
				/>
			}
		</div>
  );
}

export default App;
