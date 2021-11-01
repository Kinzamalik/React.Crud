import React,{useEffect, useState} from 'react';
import {Table} from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const [APIData,setAPIData] = useState([]);
useEffect(()=>{

    axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((response) => {
                setAPIData(response.data);
            })
}, [])


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
                    {APIData.map((data)=>{
                        return(

                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                            </Table.Row>
                        )
                    })}
                   
                </Table.Body>
            </Table>
        </div>              
    )
}