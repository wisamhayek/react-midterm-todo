import React, { useEffect } from "react";
export default function NotFound() {

  useEffect(()=>{
    document.title ='Page Not Found';
},[])

  return (
      <div>Not Found Page</div>
  )
}
