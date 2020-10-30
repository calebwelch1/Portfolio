import React, { Component } from 'react';
import Modal from 'react-modal';
import PDFRender from './PDFRender';
import './PDFViewer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

export default class PDFViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPDFModalOpen: false,
      currentPDF: '',
    };
    this.openPDFModal = this.openPDFModal.bind(this);
    this.closePDFModal = this.closePDFModal.bind(this);
    this.callFunctionAndOpenModal = this.callFunctionAndOpenModal.bind(this);
  }

  openPDFModal() {
    this.setState({ isPDFModalOpen: true });
  }

  closePDFModal() {
    this.setState({ isPDFModalOpen: false });
  }

  callFunctionAndOpenModal() {
    this.props.handleViewPDF().then((url) => {
      this.setState({ currentPDF: url });
      this.openPDFModal();
    });
  }

  render() {
    return (
      <>
        <button
          type="button"
          className={this.props.btnStyle ? this.props.btnStyle:"btn btn-sm btn-light"}
          onClick={this.callFunctionAndOpenModal}
        >
          {this.props.children}
        </button>
        <Modal className="pdf-modal" isOpen={this.state.isPDFModalOpen}>
          <div className="modal-header">
          <button
              className="close-modal-button"
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={this.closePDFModal}
            >
              <FontAwesomeIcon className="close-modal-button" icon={faTimes} />
            </button>
          </div>
          <PDFRender
            closeModal={this.closePDFModal}
            url={{url:this.state.currentPDF}}
          />
        </Modal>
      </>
    );
  }
}
