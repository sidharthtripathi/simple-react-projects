import { useEffect, useState } from "react"
import './gallery.css'
export default function Gallery(){
    const [url,setURL] = useState('')
    function getImg(){
        fetch('https://picsum.photos/200')
        .then(res=>{
            setURL(res.url);
        })
        
    }
    useEffect(getImg,[])
    function handleNext(){
        setURL('')
        getImg()
    }
    function handleClick(e){
        e.target.classList.toggle('zoom');
        
    }
    
return (
    <div>
        {url === '' ? <div className="loader"></div>: <img src = {url} className='' onClick={handleClick}></img>}
        <button onClick={handleNext}>Next</button>
    </div>
)

}