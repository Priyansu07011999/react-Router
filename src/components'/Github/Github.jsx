import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Priyansu07011999')
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // }, [])
    return(
        <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">Github Followers: {data.followers} 
        <img  src= {data.avatar_url} alt="Git profile picture" width={300} />
        </div>
    )
}

export default Github
export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/Priyansu07011999')
    return response.json()
}