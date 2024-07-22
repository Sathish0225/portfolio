import React, { useState } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../Resume.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Link } from 'react-router-dom';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {
  const [wid, setwid] = useState(window.innerWidth);

  const handleResize = () => {
    setwid(window.innerWidth);
  }

  window.addEventListener("load", handleResize);
  window.addEventListener("resize", handleResize);

  return (
    <div className='ResumePage'>

      <Link to={pdf} target='_blank' rel="noopener" download="Sathishkumar's Resume">
        <button className='downloadCV' type='button'>
          <h3><BsDownload />&nbsp; Download CV</h3>
        </button>
      </Link>

      <Document file={pdf} className="resumeview">
        <Page pageNumber={1} scale={wid > 786 ? 1.7 : 0.6} />
      </Document>

      <Link to={pdf} target='_blank' rel="noopener" download="Sathishkumar's Resume">
        <button className='downloadCV' type='button'>
          <h3><BsDownload />&nbsp; Download CV</h3>
        </button>
      </Link>

    </div>
  )
}

export default Resume
