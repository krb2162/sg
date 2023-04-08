import React from 'react';
interface Name {
	name: string;
}
function ProjectsPage(props: Name) {
  return <h1>Projects, {props.name}</h1>;
}

export default ProjectsPage;
