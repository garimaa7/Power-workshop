import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { findUser } from "../services";

const UserDetails=(props)=>{
    const params = useParams();
    const [user, setUser] = useState()
    useEffect(()=>{
        findUser(params.username).then(data=>{
            setUser(data);
        })
    },[])

    return (
        <>
        <h1>Name: {user?.name}</h1>
        <h1>Username: {user?.login}</h1>
        <h1>Location: {user?.location}</h1>
        <h1>Followers: {user?.followers}</h1>
        <h1>following: {user?.following}</h1>
        <h1>Public Repository: {user?.public_repos}</h1>
        </>
    )
}
export default UserDetails;

