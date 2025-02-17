import React, { useState } from 'react';
import ProjectBox from '../Components/ProjectBox';
import SmallWorkoutsImage from '../images/small-workouts.jpg';
import TodoAppImage from '../images/todo-list-app.png';
import SudokuImage from '../images/sudoku-solver.png';
import OldPortfolioImage from '../images/portfolio-old.png';
import iSecure360Image from '../images/iSecure360.png';
import iSecureVMSImage from '../images/iSecureVMS.png';
import ShareEaseImage from '../images/shareease.png';
import VehicleRegistrationSystemImage from '../images/vehicle-registration-system.png';
import iDataLabelPrinterImage from '../images/iDataLabelPrinter.png';
import codeEditorIoImage from '../images/code-editor-io.png';

const Projects = () => {
    const [visibleProjects, setVisibleProjects] = useState(6);
    const projects = [
        { projectPhoto: iSecure360Image, projectName: "iSecure360" },
        { projectPhoto: iSecureVMSImage, projectName: "iSecureVMS" },
        { projectPhoto: VehicleRegistrationSystemImage, projectName: "Vehicle Registration System" },
        { projectPhoto: VehicleRegistrationSystemImage, projectName: "LPR And Annoucement System" },
        { projectPhoto: codeEditorIoImage, projectName: "Code Editor io" },
        { projectPhoto: iDataLabelPrinterImage, projectName: "IData Label Printer" },
        { projectPhoto: ShareEaseImage, projectName: "ShareEase" },
        { projectPhoto: TodoAppImage, projectName: "Todo App" },
        { projectPhoto: SudokuImage, projectName: "Sudoku Solver" },
        { projectPhoto: OldPortfolioImage, projectName: "Old Portfolio" },
        { projectPhoto: SmallWorkoutsImage, projectName: "Small Workouts" }
    ];

    const showMoreProjects = () => {
        setVisibleProjects(prevVisibleProjects => prevVisibleProjects + 3);
    };

    const hideProjects = () => {
        if (visibleProjects > 6) {
            setVisibleProjects(prevVisibleProjects => prevVisibleProjects - 3);
        }
    };

    return (
        <div>
            <h1 className="projectHeading">My Recent <b>Projects</b></h1>
            <p className="projectSubHeading">Here are a few projects I've worked on recently.</p>
            <div className="project">
                {projects.slice(0, visibleProjects).map((project, index) => (
                    <ProjectBox key={index} projectPhoto={project.projectPhoto} projectName={project.projectName} />
                ))}
            </div>
            <div className="projectBtnDiv">
                {visibleProjects < projects.length && (
                    <button className="projectShowMoreBtn" onClick={showMoreProjects}>Show More</button>
                )}

                {visibleProjects > 6 && (
                    <button className="projectShowLessBtn" onClick={hideProjects}>Show Less</button>
                )}
            </div>
        </div>
    )
}

export default Projects
