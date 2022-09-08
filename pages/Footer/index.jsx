
  import { useEffect } from 'react';
  import axios from 'axios';
  import Link from 'next/link';
  
  export default function Footer() {
  
    useEffect(() => {
      getData();
    }, [])
   
    async function getData() {
      
      axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/a47c203b-87f1-406f-b7db-31f46325a3f8/template2/Footer/index.html").then(res=>{
        console.log("res=> ",res);
        document.getElementById("FooterID").innerHTML = res.data;
        
        //* css
        axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/a47c203b-87f1-406f-b7db-31f46325a3f8/template2/Footer/style.css").then(CssRes=>{
          console.log("CssRes", CssRes);
          let createCssElement = document.createElement("style");
          // createCssElement.nodeValue = CssRes.data;
          createCssElement.appendChild(document.createTextNode(CssRes.data));
          
          document.getElementById("FooterID").appendChild(createCssElement)
          axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/a47c203b-87f1-406f-b7db-31f46325a3f8/template2/Footer/script.js").then(JsRes=>{
            console.log("JsRes", JsRes);
            eval(JsRes.data)
          })
        })
      })
  
    }
    
  
    return (
      <div id='FooterID'>
      </div>
    )
  }