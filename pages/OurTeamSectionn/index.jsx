
  import { useEffect } from 'react';
  import axios from 'axios';
  import Link from 'next/link';
  import Header from "../Header/index";
  import Footer from "../Footer/index";
  
  export default function OurTeamSectionn() {
  
    useEffect(() => {
      getData();
    }, [])
   
    async function getData() {
      
      axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/a47c203b-87f1-406f-b7db-31f46325a3f8/template2/OurTeamSectionn/index.html").then(res=>{
        console.log("res=> ",res);
        document.getElementById("OurTeamSectionnID").innerHTML = res.data;
        
        //* css
        axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/a47c203b-87f1-406f-b7db-31f46325a3f8/template2/OurTeamSectionn/style.css").then(CssRes=>{
          console.log("CssRes", CssRes);
          let createCssElement = document.createElement("style");
          // createCssElement.nodeValue = CssRes.data;
          createCssElement.appendChild(document.createTextNode(CssRes.data));
          
          document.getElementById("OurTeamSectionnID").appendChild(createCssElement)
          axios.get("https://nqhkpgaezalnpxtizxzv.supabase.co/storage/v1/object/public/projects/a47c203b-87f1-406f-b7db-31f46325a3f8/template2/OurTeamSectionn/script.js").then(JsRes=>{
            console.log("JsRes", JsRes);
            eval(JsRes.data)
          })
        })
      })
  
    }
    
  
    return (
      <div>
        <>
          <Header />
        </>
        
        <div id='OurTeamSectionnID'></div>

        <>
          <Footer />
        </>
      </div>
    )
  }