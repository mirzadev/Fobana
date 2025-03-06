import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./ConstitutionsBylawsStyles.css";
import Fobana_Logo from "../../Assets/Cover/Fobana_Logo.png";
// install react-pdf-viewer using this:  npm install @react-pdf-viewer/core @react-pdf-viewer/default-layout
// PDF assets
import pdf1 from "../../Assets/Constitutions/Scanned-Constitution-2012.pdf";
import pdf2 from "../../Assets/Constitutions/FOBANA_Operating_Procedure_March_2021_V.01.pdf";

function ConstitutionsBylaws() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Function to handle button clicks
  const handlePdfClick = (pdf) => {
    setSelectedPdf(pdf);
  };

  return (
    <div className="constBylaws-container">
      <div className="Fobana_logo">
        <img id="Fobana-logo" src={Fobana_Logo}></img>
      </div>
      <h1>CONSTITUTIONS AND BYLAWS</h1>
      <div>
        <button onClick={() => handlePdfClick(pdf1)}>
          FOBANA Constitutions & Bylaws (Last Amended: 2012)
        </button>
        <button onClick={() => handlePdfClick(pdf2)}>
          FOBANA Operating Procedure (Updated - March 2021)
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

export default ConstitutionsBylaws;
