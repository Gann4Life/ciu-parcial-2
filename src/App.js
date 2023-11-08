import { useEffect, useState } from "react";
import NavigationBar from "./components/core/NavigationBar";
import ProjectList from "./components/pages/ProjectList";
import ProjectView from "./components/pages/ProjectView";
import Data from "./data";
import FetchProjects, { username } from "./components/coders-rank/data";

function App() {

	const [getProjectView, setProjectView] = useState(-1);
	const [projects, setProjects] = useState([]);
	
	const projectListView = () => setProjectView(-1);

	const loadProjects = async () => {
		console.log(await FetchProjects())
		setProjects(await FetchProjects())
	}

	useEffect(() => {
		// setProjectView(-1);
		loadProjects();
	}, [])

    return (
		<div>
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
			
			{/* {Data.projects.map((key, project) => {
				if (key !== getProjectView) return;
				return <ProjectView project={project}/>
			})} */}
		</div>
  );
}

export default App;
