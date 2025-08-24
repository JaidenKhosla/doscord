"use client"

import { useQuery } from "convex/react"
import { api } from "../../convex/_generated/api"

export default function Test(){

    const tasks = useQuery(api.tasks.get);

    return <div>
        {tasks?.map(({_id, text})=><p>{text}</p>)}
    </div>
}