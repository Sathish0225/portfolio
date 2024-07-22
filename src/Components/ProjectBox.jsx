import React from 'react';
import { FaGithub, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    TodoAppDesc: "Stay organized and boost your productivity with our intuitive to-do list app. Effortlessly manage tasks, set deadlines, and prioritize your work to achieve your goals efficiently. Whether for personal use or team collaboration, our app simplifies task management for everyone.",
    TodoAppGithub: "https://github.com/Sathish0225/todo-list-app",
    TodoAppWebsite: "https://todo-list-app-three-theta.vercel.app/",
    TodoAppTech: "NodeJS, ReactJS, HTML, CSS",

    SudokuSolverDesc: "Ever solved a sudoku puzzle. It's tricky right? Don't worry! With this app you can get any valid sudoku puzzle solved within seconds. Just enter the sudoku config and hit submit.",
    SudokuSolverGithub: "https://github.com/Sathish0225/sudoku-solver",
    SudokuSolverWebsite: "https://sudoku-solver-gilt-eight.vercel.app/",
    SudokuSolverTech: "ReactJS, HTML, CSS",

    OldPortfolioDesc: "Showcase your skills and achievements with a sleek and professional portfolio website. Highlight your best work, share your story, and connect with potential clients or employers. Perfect for creatives, professionals, and job seekers looking to make a lasting impression.",
    OldPortfolioGithub: "https://github.com/Sathish0225/portfolio-website",
    OldPortfolioWebsite: "",
    OldPortfolioTech: "ReactJS, HTML, CSS, TailwindCSS",

    iSecure360Desc: "iSecure360 is a state-of-the-art security management platform that streamlines patrol monitoring, incident management, and visitor tracking. It replaces manual logbooks with real-time insights, automated workflows, and customizable reports, empowering organizations to enhance safety and efficiency.",
    iSecure360Github: "",
    iSecure360Website: "",
    iSecure360Tech: "Laravel PHP, Bootstrap, domPdf, MySQL & Flutter Mobile App",

    iSecureVMSDesc: "iSecureVMS is a premier visitor management system enhancing safety and efficiency with features like pre-registration, digital signing, and real-time notifications. It offers seamless setup and comprehensive visitor monitoring for offices and facilities.",
    iSecureVMSGithub: "",
    iSecureVMSWebsite: "",
    iSecureVMSTech: "Laravel PHP, Bootstrap, domPdf, MySQL & Flutter Mobile App",

    ShareEaseDesc: "ShareEase is an intuitive and secure file sharing platform designed to facilitate easy and efficient exchange of files between users. It offers a user-friendly interface for uploading, managing, and sharing files of various types and sizes.",
    ShareEaseGithub: "https://github.com/Sathish0225/shareease",
    ShareEaseWebsite: "https://shareease.vercel.app/",
    ShareEaseTech: "NodeJS, Express, ReactJS, Bootstrap, MongoDB & Socket.IO",
  }

  let show = '';
  if (desc[projectName.replace(/\s+/g, '') + 'Github'] === "") {
    show = "none";
  }

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName.replace(/\s+/g, '') + 'Desc']}
        <br />
        {
          (desc[projectName.replace(/\s+/g, '') + 'Github'] !== '' && desc[projectName.replace(/\s+/g, '') + 'Github'] !== null) &&
          <Link style={{ display: show }} to={desc[projectName.replace(/\s+/g, '') + 'Github']} target='_blank' rel="noopener">
            <button className='projectbtn'><FaGithub /> Github</button>
          </Link>
        }

        {
          (desc[projectName.replace(/\s+/g, '') + 'Website'] !== '' && desc[projectName.replace(/\s+/g, '') + 'Website'] !== null) &&
          <Link to={desc[projectName.replace(/\s+/g, '') + 'Website']} target='_blank' rel="noopener">
            <button className='projectbtn'><FaEye /> Demo</button>
          </Link>
        }
        <br />
        <br />
      </div>

      {(desc[projectName.replace(/\s+/g, '') + 'Tech'] !== '' && desc[projectName.replace(/\s+/g, '') + 'Tech'] !== null) &&
        <div className="projectBoxFooter">
          <b>Technologies:</b> {desc[projectName.replace(/\s+/g, '') + 'Tech']}
        </div>}
    </div>
  )
}

export default ProjectBox