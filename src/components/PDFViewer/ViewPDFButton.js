// This button will be added to the filter table on the customer dashboard

// Needs to call a function that will generate and fetch a presigned url for the pdf the user clicks
// Needs to trigger the modal to open

// The handleViewPDF function will have the generate and fetch the presigned url for the pdf set the, and will then call the openPDFModal function

import React from 'react';

export default function ViewPDFButton(props) {
  return (
    <button className="btn btn-primary btn-sm" onClick={props.handleViewPDF}>
      View
    </button>
  );
}
