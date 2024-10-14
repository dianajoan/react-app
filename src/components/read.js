import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Read = ({ data, handleDelete }) => {
    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {data.map((item) => (
                    <Table.Row key={item.id}>
                        <Table.Cell>{item.firstName}</Table.Cell>
                        <Table.Cell>{item.lastName}</Table.Cell>
                        <Table.Cell>
                            <Button as={Link} to={`/update/${item.id}`} primary>Update</Button>
                            <Button onClick={() => handleDelete(item.id)} color="red">Delete</Button>
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
};

export default Read;
