"use client"
import {useParams} from 'next/navigation'


export default function ProfileIdPosts()
{
    const params = useParams()
    console.log(params);
    return <div>my id profile's Post page </div>
}