import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./AnnualReportStyle.css";
import Fobana_Logo from "../../Assets/Cover/Fobana_Logo.png";
// install react-pdf-viewer using this:  npm install @react-pdf-viewer/core @react-pdf-viewer/default-layout
// PDF assets
import pdf1 from "../../Assets/AnnualReport/annual_report_2020_combined.pdf";

function AnnualReportView() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Function to handle button clicks
  const handlePdfClick = (pdf) => {
    setSelectedPdf(pdf);
  };

  return (
    <div className="annualReport-container">
      <div className="Fobana_logo">
        <img id="Fobana-logo" src={Fobana_Logo}></img>
      </div>
      <h1>ANNUAL REPORT 2019 - 2020</h1>
      <div>
        <button onClick={() => handlePdfClick(pdf1)}>
          Annual Report - 2019 - 2020
        </button>
      </div>

      {selectedPdf && (
        <div>
          <div>
            <h2>PDF Preview:</h2>
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
            >
              <Viewer fileUrl={selectedPdf} />
            </Worker>
          </div>
          <div>
            <a href={selectedPdf} download>
              <button>Download PDF</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default AnnualReportView;
