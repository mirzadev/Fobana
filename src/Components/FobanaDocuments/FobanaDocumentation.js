import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./FobanaDocumentationStyles.css";
import Fobana_Logo from "../../Assets/Cover/Fobana_Logo.png";
// install react-pdf-viewer using this:  npm install @react-pdf-viewer/core @react-pdf-viewer/default-layout
// PDF assets
import Document1 from "../../Assets/FobanaDocuments/Committee_Guidelines.pdf";
import Document2 from "../../Assets/FobanaDocuments/Vision2010-v2012.pdf";
import Document3 from "../../Assets/FobanaDocuments/TradeNameCertificate-2015.pdf";
import Document4 from "../../Assets/FobanaDocuments/Trademark_Official_Notice.pdf";
import Document5 from "../../Assets/FobanaDocuments/Houston_Accord.pdf";
import Document6 from "../../Assets/FobanaDocuments/Modus_Operandi_Unification.pdf";
import Document7 from "../../Assets/FobanaDocuments/Membership_Benefit_Brochure.pdf";

function FobanaDocumentation() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Function to handle button clicks
  const handlePdfClick = (pdf) => {
    setSelectedPdf(pdf);
  };

  return (
    <div className="FobanaDoc_container">
      <div className="Fobana_logo">
        <img id="AD-logo" src={Fobana_Logo}></img>
      </div>
      <h1>FOBANA DOCUMENTS</h1>
      <div>
        <button onClick={() => handlePdfClick(Document1)}>
          Standing Committee Guideline
        </button>
        <button onClick={() => handlePdfClick(Document2)}>
          Vision 2010 - 2012
        </button>
        <button onClick={() => handlePdfClick(Document3)}>
          Trade Name Certificate 2015
        </button>
        <button onClick={() => handlePdfClick(Document4)}>
          Trade Official Notice
        </button>
        <button onClick={() => handlePdfClick(Document5)}>Huston Accord</button>
        <button onClick={() => handlePdfClick(Document6)}>
          Modus Operandi for Unification
        </button>
        <button onClick={() => handlePdfClick(Document7)}>
          Membership Benefit Brochure
        </button>
      </div>
      {selectedPdf && (
        <div>
          <div>
            <h2>Document Preview:</h2>
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

export default FobanaDocumentation;
