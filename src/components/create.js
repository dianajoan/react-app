import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

const Create = ({ addRecord }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [agree, setAgree] = useState(false);

    const handleSubmit = () => {
        if (agree && firstName && lastName) {
            addRecord({ firstName, lastName });
            setFirstName('');
            setLastName('');
            setAgree(false);
        } else {
            alert('Please fill out all fields and agree to the terms!');
        }
    };

    return (
        <Form className="create-form">
            <Form.Field>
                <label>First Name</label>
                <input 
                    placeholder="First Name" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input 
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </Form.Field>
            <Form.Field>
                <Checkbox 
                    label="I agree to the Terms and Conditions" 
                    checked={agree}
                    onChange={() => setAgree(!agree)}
                />
            </Form.Field>
            <Button type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
    );
};

export default Create;
