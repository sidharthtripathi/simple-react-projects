import { useEffect, useState } from "react"

export default function Quote() {
    function fetchQuote(){
       fetch('https://api.quotable.io/random')
       .then((res)=>res.json())
        .then(data=>{
            setStatus(true);
            setData({author:data.author,content:data.content})
        })
        
    }
     
     function handleNext(){
        setStatus(false)
        fetchQuote();
        
     }
     
    const [data,setData] = useState({author:'null',content:'null'})
    const [gotData,setStatus] = useState(false);
    useEffect(fetchQuote,[])
    return (
        <div>
        <blockquote>
            <p>{data.content}</p>
            <footer>{data.author}</footer>
        </blockquote>
        {gotData ? <button onClick={handleNext}>Next</button> : 'waiting..'}
        </div>
    )
}