import React from "react";

import SinglePagePDFViewer from "./components/pdf/single-page";
import AllPagesPDFViewer from "./components/pdf/all-pages";

/* This is required only if the project file is located
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF1 from "./mangroveBackstory.pdf";
import samplePDF2 from "./qooleyBackstory.pdf";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h4>Single Page</h4>
      <SinglePagePDFViewer pdf={samplePDF1} />

      <hr />

      <h4>All Pages</h4>
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={samplePDF1} />
      </div>

      <hr />
      <h4>Single Page</h4>
      <SinglePagePDFViewer pdf={samplePDF2} />

      <hr />

      <h4>All Pages</h4>
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={samplePDF2} />
      </div>

      <hr />
    </div>
  );
}
