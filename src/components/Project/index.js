import React from 'react'; // Import the Component component from React

 
function Project(props) {
  return (
    <div className="project">
        <div className="project-title">{props.title}</div>
        <div className="project-image">
          <img src={props.image} alt="Project Image"/>
        </div>
        <a href={props.git} className="project-git">Github Repository</a>
        <a href={props.deployed} className="project-Deployed">Deployed</a>
    </div>
  );
}
 
export default Project;