import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const Model = ({ show, handleClose, modalData, setModalData, userApplication, edited }) => {
    console.log(modalData)


    return (
        <div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}

            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form.Group className="mb-3">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control className="form-control" id="compName" name="compName" 
                        onChange={(e) => {
                            setModalData(modalData => {
                                return { ...modalData, compName: e.target.value }
                            })
                        }} value={modalData?.compName} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Job Role</Form.Label>
                        <Form.Control className="form-control" id="jobRole" name="jobRole"  onChange={(e) => {
                            setModalData(modalData => {
                                return { ...modalData, jobRole: e.target.value }
                            })
                        }}value={modalData?.jobRole} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Select Status</Form.Label>
                        <Form.Select o onChange={(e) => {
                            setModalData(modalData => {
                                return { ...modalData, jobStatus: e.target.value }
                            })
                        }} value={modalData?.jobStatus}>
                            <option hidden={true} >Select Status</option>
                            <option disabled="disabled" default={true}> Select Status</option>
                            <option>Applied</option>
                            <option>Rejected</option>
                            <option>Interviewed</option>
                            <option>Technical</option>
                            <option>Offer</option>
                        </Form.Select>
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={edited}>Done</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Model