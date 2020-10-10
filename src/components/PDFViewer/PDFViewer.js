import React, { Component } from 'react';
import Modal from 'react-modal';
import { Document, Page } from 'react-pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearchPlus,
  faSearchMinus,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import './PDFViewer.css';

export default class PDFViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
      pdf: './sample.pdf',
      pageScale: 1.0,
    };
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
    console.log(this.props);
  };

  goToPrevPage = () => {
    if (this.state.pageNumber === 1) {
      return;
    } else {
      this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
    }
  };

  goToNextPage = () => {
    if (this.state.pageNumber === this.state.numPages) {
      return;
    } else {
      this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));
    }
  };

  changeZoom = (offset) => {
    // on the zoom out, don't allow any more zoomouts if the scale is less than .6
    if (offset < 0) {
      if (this.state.pageScale > 0.6) {
        this.setState((state) => ({ pageScale: state.pageScale + offset }));
      } else {
        console.log("That's already really small!");
        return;
      }
    }

    // Zoom in more only if the current scale is less than 1.8
    if (offset > 0) {
      if (this.state.pageScale < 1.8) {
        this.setState((state) => ({ pageScale: state.pageScale + offset }));
      } else {
        console.log("That's already really big!");
        return;
      }
    }
  };

  zoomOut = () => {
    let offset = this.state.pageScale * 0.1;
    this.changeZoom(-offset);
  };

  zoomIn = () => {
    let offset = this.state.pageScale * 0.1;
    this.changeZoom(offset);
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <>
      {/* Just putting a button here for now so I can open and close modal... Get rid of this once table is working again and button is implemented */}
      <button className="btn btn-primary btn-sm" onClick={this.props.openPDFModal}>
      View
    </button>


      <Modal className="pdf-modal" isOpen={this.props.isPDFModalOpen}>
        <div className="pdf-view-container">
          <nav className="top-bar-pdf p-1">
            <div className="py-1">
              <button
                className="zoom-buttons btn btn-secondary btn-sm m-1"
                type="button"
                onClick={this.zoomOut}
              >
                <FontAwesomeIcon icon={faSearchMinus} />
              </button>
              <button
                className="zoom-buttons btn btn-secondary btn-sm m-1"
                type="button"
                onClick={this.zoomIn}
              >
                <FontAwesomeIcon icon={faSearchPlus} />
              </button>
              {/* <p>Zoom {this.state.pageScale * 100} % </p> */}
              <button
                className="btn btn-primary pdf-page-btn m-1"
                onClick={this.goToPrevPage}
              >
                Prev
              </button>
              <button
                className="btn btn-primary pdf-page-btn m-1"
                onClick={this.goToNextPage}
              >
                Next
              </button>
              <button
                type="button"
                className="close mr-2"
                data-dismiss="modal"
                aria-label="Close"
                onClick={this.props.closePDFModal}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </nav>
          <div className="modal-body">
            <p className="px-2">
              You are currently viewing <strong>{this.state.pdf}</strong>
            </p>
            <div className="mx-5 pdf-div d-flex justify-content-center">
              <Document
                className="PDFDocument"
                file={this.state.pdf}
                // eventually the file will be passed as props
                // file={this.props.pdf}
                onLoadSuccess={this.onDocumentLoadSuccess}
              >
                <Page
                  className="PDF-page"
                  pageNumber={pageNumber}
                  scale={this.state.pageScale}
                />
              </Document>
            </div>
            <p className="pdf-page-info">
              Page {pageNumber} of {numPages}
            </p>
          </div>
        </div>
      </Modal>
      </>
    );
  }
}
