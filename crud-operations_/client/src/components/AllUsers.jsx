import { useEffect, useState } from "react";

import { Table, TableBody, TableHead, TableRow, TableCell, styled, Button } from "@mui/material";

import { getUsers, deleteUser } from "../service/api";

import {Link} from "react-router-dom";

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;

`

const THead = styled(TableRow)`
    background: #000000;
    & >th{
        color: #ffffff;
        font-size: 20px;
    }    
`;

const TBody = styled(TableRow)`
    &>td{
        font-size: 20px;
    }
`


const AllUsers = ()=>{

    const[users, setUsers] = useState([]);
    useEffect(()=>{
        getAllUsers();
    }, []);

    const getAllUsers =async ()=>{
       let response = await getUsers();
       setUsers(response.data);
       
    }

    const deleteUserDetails = async(name)=>{
        await deleteUser(name);
        getAllUsers();
    }

    return(
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {
                    users.map(user=>(
                        <TBody key={user._id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.UserName}</TableCell>
                            <TableCell>{user.Email}</TableCell>
                            <TableCell>{user.Phone}</TableCell>
                            <TableCell></TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight: 10}} component={Link} to={`/edit/${user.name}`}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={()=>deleteUserDetails(user.name)}>Delete</Button>
                            </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>
        </StyledTable>
    );
}

export default AllUsers;