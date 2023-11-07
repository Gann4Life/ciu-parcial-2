import { useEffect, useState } from "react";
import NavigationBar from "./components/core/NavigationBar";
import ProjectList from "./components/pages/ProjectList";
import ProjectView from "./components/pages/ProjectView";

function App() {

	const [getProjectView, setProjectView] = useState(-1);

	const templateData = () => {
		return {
			projects: [
				{
					id: 0,
					author: "jorge",
					title: "My First Project",
					description: "very long description",
					link_1: "https://gann4life.github.io",
					link_2: "https://github.com/gann4life",
					category: "REACT",
					image_url: "./img/circle x1024.png",
					start_date: "2021-01-01",
					end_date: "now",
					work_in_progress: true
				},
				{
					id: 1,
					author: "jorge",
					title: "My Second Project",
					description: "very long description AAAA",
					link_1: "",
					link_2: "",
					category: "",
					image_url: "img/circle x1024.png",
					start_date: "",
					end_date: "",
					work_in_progress: false
				},
				{
					id: 2,
					author: "jorge",
					title: "My Third Project",
					description: "very long description",
					link_1: "",
					link_2: "",
					category: "",
					image_url: "img/circle x1024.png",
					start_date: "",
					end_date: "",
					work_in_progress: false
				}
			]   
		}
	}

	useEffect(() => {
		setProjectView(-1);
	}, [])

    return (
		<div>
			<NavigationBar />

			{getProjectView === -1
				? <ProjectList
					projectList={templateData().projects}
					setProjectView={setProjectView}
				/>
				: <ProjectView
					project={templateData().projects[getProjectView]}
				/>
			 }			
		</div>
  );
}

export default App;
