import React from 'react';

export default function Butt({inc,begin}) {
  
  

  return (
    <div style={{textAlign:"center"}}>
      <button disabled={! begin} type="button" className="btn btn-success" style={{padding:'40px 40px',margin:"80px",FontSizes:"24px"}} onClick={()=>inc("present")}
>
        Present
      </button>
       <button disabled={! begin} type="button" className="btn btn-warning" style={{padding:'40px 40px',margin:"80px"}} onClick={()=>inc("excusé")}
>
        Excusé
      </button>
      <button disabled={! begin} type="button" className="btn btn-danger" style={{padding:'40px 40px',margin:"80px"}} onClick={()=>inc("absent")}
>
        Absent
      </button>
     
    </div>
  );
}