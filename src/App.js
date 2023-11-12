import { useEffect, useState } from "react";
import NavigationBar from "./components/core/NavigationBar";
import ProjectList from "./components/pages/ProjectList";
import ProjectView from "./components/pages/ProjectView";
import FetchProjects, { username } from "./components/coders-rank/data";

function App() {

	const [getProjectView, setProjectView] = useState(-1)
	const [projects, setProjects] = useState([])
	
	const projectListView = () => setProjectView(-1);

	const loadProjects = async () => {
		setProjects(await FetchProjects())
		console.log(projects);
	}

	useEffect(() => {
		loadProjects();
	}, [])

    return (
		<div className="bg-body-secondary">
			<NavigationBar />
	
			{getProjectView === -1 ?
				<ProjectList
					projectList={projects}
					setView={setProjectView}
				/>
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
