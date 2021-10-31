import React from 'react';
import {Table} from 'semantic-ui-react';

export default function Read(){
    return(
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>FirstName</Table.HeaderCell>
                        <Table.HeaderCell>LastName</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Kinza</Table.Cell>
                        <Table.Cell>Malik</Table.Cell>
                        <Table.Cell>yes</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}