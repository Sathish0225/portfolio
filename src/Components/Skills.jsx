import React from 'react';
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiPhp, SiExpress, SiMongodb, SiPostman, SiVercel, SiCsharp, SiMysql, SiMicrosoftsqlserver, SiPostgresql } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

const Skills = ({ skill }) => {
  const icon = {
    'C++': <CgCPlusPlus />,
    'C#': <SiCsharp />,
    Postman: <SiPostman />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    Php: <SiPhp />,
    Flutter: <RiFlutterFill />,
    MongoDb: <SiMongodb />,
    MySql: <SiMysql />,
    SqlServer: <SiMicrosoftsqlserver />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Figma: <FaFigma />,
    Bootstrap: <FaBootstrap />,
    Vercel: <SiVercel />,
    Python: <FaPython />,
    Vscode: <VscVscode />,
    Postgresql: <SiPostgresql />
  }

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills