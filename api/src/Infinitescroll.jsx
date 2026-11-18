import React, {useEffect, useState, useRef} from "react";

const Infinitescroll = () => {
    const [users,setusers]=useState([]);
    const [skip,setSkip]=useState(0);
    const [hasmore,sethasmore]=useState(true);
    const observerref= useRef(null);

    const fetchusers=()=>{
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then((data)=>{
            console.log(data)
            setusers(prev=>[...prev,data.users])
            setSkip(skip+30);
            sethasmore(skip+30<data.total)
        });
    }

    useEffect(()=>{
        fetchusers();
    },[])

    useEffect(()=>{
        const observer=IntersectionObserver(
            entries=>{
                if(entries[0].isIntersecting()){
                    fetchusers();
                }
            },
            observer.observe()
        )
    },[])

    return(
        <>
            <h1>Infinite Scrolling</h1>
            <ol>
                {users.map((user)=>{
                    return(<li key={user.id}>{user.firstName} {user.lastName}</li>)
                })}
            </ol>
            <div ref={observerref}>Scroll down to get more</div>

        </>
    )
}

export default Infinitescroll