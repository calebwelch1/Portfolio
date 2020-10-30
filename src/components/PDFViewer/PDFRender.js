import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearchPlus,
  faSearchMinus,
  faChevronLeft,
  faChevronRight,
  faExclamationTriangle,
  faSyncAlt,
} from '@fortawesome/free-solid-svg-icons';
import './PDFViewer.css';

export default class PDFRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: 0,
      pageNumber: 0,
      pageScale: 0.8,
    };
  }
// pageNumber/numpages set auto to 0, then if pdf loads sets to 1 and X
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
    this.setState({pageNumber:1});
  };

  goToPrevPage = () => {
    if (this.state.pageNumber === 1 || this.state.pageNumber === 0) {
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
      }
    }

    // Zoom in more only if the current scale is less than 1.8
    if (offset > 0) {
      if (this.state.pageScale < 1.6) {
        this.setState((state) => ({ pageScale: state.pageScale + offset }));
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
    return (
      <div className="pdf-view-container">
        <div className="modal-body" style={{ alignContent: 'center' }}>
          <div
            className="row justify-content-center"
            style={{ alignContent: 'center', textAlign: 'center' }}
          >
            {this.props.url.error ? (
              <div className="error-image-div">
                <div className="error-image">
                  <FontAwesomeIcon
                    className=""
                    icon={faExclamationTriangle}
                    size="9x"
                  />
                  <p className="p-4 error-msg">Failed to load PDF...</p>
                </div>
              </div>
            ) : (
              <div className="mx-5 d-flex justify-content-center">
                <Document
                  file={this.props.url}
                  onLoadSuccess={this.onDocumentLoadSuccess}
                  loading={
                    <div className="load-div">
                      <div className="loading-msg">
                        <FontAwesomeIcon icon={faSyncAlt} size="5x" />
                        <p>Page loading...</p>
                      </div>
                    </div>
                  }
                  noData={
                    <div className="load-div">
                      <div className="loading-msg">
                        <FontAwesomeIcon
                          icon={faExclamationTriangle}
                          size="9x"
                        />
                        <p className='my-4'>Failed to load PDF...</p>
                      </div>
                    </div>
                  }
                  error={
                    <div className="load-div">
                      <div className="loading-msg">
                        <FontAwesomeIcon
                          className=""
                          icon={faExclamationTriangle}
                          size="9x"
                        />
                        <p className="p-4 error-msg">Failed to load PDF...</p>
                      </div>
                    </div>
                  }
                >
                  <Page
                    className="PDF-page"
                    pageNumber={this.state.pageNumber}
                    scale={this.state.pageScale}
                  />
                </Document>
              </div>
            )}
          </div>
        </div>
        <div
          style={{ textAlign: 'center', alignContent: 'center' }}
          className="bg-transparent"
        >
          <div
            className="btn-group bg-dark"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-secondary" onClick={this.goToPrevPage}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button type="button" className="btn btn-secondary disabled">
              Page {this.state.pageNumber} / {this.state.numPages}
            </button>
            <button
              type="button"
              className="btn btn-secondary pdf-page-btn m-1"
              onClick={this.goToNextPage}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <button
              className=" btn btn-secondary zoom-button"
              type="button"
              onClick={this.zoomOut}
            >
              <FontAwesomeIcon icon={faSearchMinus} />
            </button>
            <button
              className=" btn btn-secondary zoom-button"
              type="button"
              onClick={this.zoomIn}
            >
              <FontAwesomeIcon icon={faSearchPlus} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
