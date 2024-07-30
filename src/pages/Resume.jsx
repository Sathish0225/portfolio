import React, { useState } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../Resume.pdf";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Link } from 'react-router-dom';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`,
  import.meta.url,
).toString();

const Resume = () => {
  const [wid, setwid] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }

  const handleResize = () => {
    setwid(window.innerWidth);
  }

  window.addEventListener("load", handleResize);
  window.addEventListener("resize", handleResize);

  const pageBtnStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    padding: "5px 10px",
    backgroundColor: "#431f47",
    color: "#E7E7E7",
    borderRadius: "8px",
  };

  return (
    <div className='ResumePage'>

      <Link to={pdf} target='_blank' rel="noopener" download="Sathishkumar's Resume">
        <button className='downloadCV' type='button'>
          <h3><BsDownload />&nbsp; Download CV</h3>
        </button>
      </Link>

      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Document file={pdf} className="resumeview" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} scale={wid > 786 ? 1.7 : 0.6} />
        </Document>
        <div style={pageBtnStyle}>
          <div className="pageBtn" onClick={() => setPageNumber(pageNumber - 1)} style={{ padding: "10px", marginRight: "10px", cursor: "pointer" }}><FaChevronLeft /></div>
          <div style={{ marginTop: "-5px" }}>{pageNumber} of {numPages}</div>
          <div className="pageBtn" onClick={() => setPageNumber(pageNumber + 1)} style={{ padding: "10px", marginLeft: "10px", cursor: "pointer" }}><FaChevronRight /></div>
        </div>
      </div>

    </div>
  )
}

export default Resume
