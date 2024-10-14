import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react';

const Update = ({ match, data, updateRecord }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        const record = data.find(item => item.id === parseInt(match.params.id));
        if (record) {
            setFirstName(record.firstName);
            setLastName(record.lastName);
        }
    }, [match.params.id, data]);

    const handleSubmit = () => {
        updateRecord({ id: parseInt(match.params.id), firstName, lastName });
    };

    return (
        <Form className="update-form">
            <Form.Field>
                <label>First Name</label>
                <input 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                />
            </Form.Field>
            <Button type="submit" onClick={handleSubmit}>Update</Button>
        </Form>
    );
};

export default Update;
