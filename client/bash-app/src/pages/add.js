import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const Add = () => {
    const { store, actions } = useContext(Context);

    const [formValue, setFormValue] = useState({
        id:"",name: "", path: ""
    })

    const inputHandelChange = e => {
        //"[e.target.name]" is the name of form inputs
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        actions.addNewComputer(formValue);
    }



    return (
        <div className="container">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Computer Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter new computer name"
                        name="name"
                        onChange={inputHandelChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Computer Path</Form.Label>
                    <Form.Control type="text" placeholder="Enter new computer path"
                        name="path"
                        onChange={inputHandelChange} />
                </Form.Group>

                    <Button variant="primary" onClick={handleSubmit}>
                        confirm
                    </Button>
            </Form>

        </div>
    )
}