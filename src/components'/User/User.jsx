import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userId} = useParams()
    return (
        <div className="bg-gray-500 text-black text-2xl p-4">User: {userId}</div>
    )
}

export default User 