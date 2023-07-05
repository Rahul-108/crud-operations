import axios from 'axios';

const URL = 'http://localhost:8000/';

export const addUser = async(data) =>{
    try{
        return await axios.post(`${URL}/add`, data);
    }catch (error) {
        console.log('Error while using addUser API', error);
    }
}

export const getUsers = async()=>{
    try{
        return await axios.get(`${URL}/all`);
    }catch(error){
        console.log('Error while catching getUsers API', error);
    }
    
}


export const getUser = async(name)=>{
    try {
        return await axios.get(`${URL}/${name}`)
    } catch (error) {
        console.log('Error while catching getUser API', error);
    }
}

export const editUser = async(user, name)=>{
    try {
        return await axios.post(`${URL}/${name}`, user)
    } catch (error) {
        console.log('Error while calling editUser API', error);
    }
}

export const deleteUser = async(name)=>{
    try {
        return await axios.delete(`${URL}/${name}`);
    } catch (error) {
        console.log('Error while calling deleteUser API', error);
    }
}