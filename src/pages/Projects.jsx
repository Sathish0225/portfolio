import React from 'react';
import ProjectBox from '../Components/ProjectBox';
import TodoAppImage from '../images/todo-list-app.png';
import SudokuImage from '../images/sudoku-solver.png';
import OldPortfolioImage from '../images/portfolio-old.png';
import iSecure360Image from '../images/iSecure360.png';
import iSecureVMSImage from '../images/iSecureVMS.png';
import ShareEaseImage from '../images/shareease.png';

const Projects = () => {
    return (
        <div>
            <h1 className="projectHeading">My <b>Projects</b></h1>
            <div className="project">
                <ProjectBox projectPhoto={iSecure360Image} projectName={"iSecure360"} />
                <ProjectBox projectPhoto={iSecureVMSImage} projectName={"iSecureVMS"} />
                <ProjectBox projectPhoto={ShareEaseImage} projectName={"ShareEase"} />
                <ProjectBox projectPhoto={TodoAppImage} projectName={"Todo App"} />
                <ProjectBox projectPhoto={SudokuImage} projectName={"Sudoku Solver"} />
                <ProjectBox projectPhoto={OldPortfolioImage} projectName={"Old Portfolio"} />
            </div>
        </div>
    )
}

export default Projects
