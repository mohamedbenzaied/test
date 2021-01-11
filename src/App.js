import React,{useState} from 'react';
import Lbt from './component/Lbt.js'
import Butt from './component/Butt.js'
import Commencer from './component/commencer.js'
import ListGroup from 'react-bootstrap/ListGroup';

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";




export default function App() {
  const [compteur,setCompteur]=useState(0)
  const nom=["Xavi ","Andrés Iniesta","Lionel Messi","Carles Puyol","Migueli","Víctor Valdés","Carles Rexach","Guillermo Amor","Sergio Busquets","Andoni Zubizarreta"]
  const [begin,setBegin]=useState(false)
  const [present,setpresent]=useState([])
  const [abscent,setabscent]=useState([])
  const [tous,settous]=useState([])
  const[filtrer,setFiltrer]=useState("tous")
  function handlebutton(val) {
    if(val==="present"){
      setpresent([nom[compteur],...present])
    }
    else if (val==="absent"){
      setabscent([nom[compteur],...abscent])
    }
    settous([nom[compteur],...tous])
    return(
      setCompteur(compteur+1)
    )
  }



  return (
    <div style={{backgroundColor:'black',height:'800PX',width:'100%'}} >

     {nom[compteur] ? <Commencer compteur={compteur} nom={nom} begin={begin } handleClick={()=>setBegin(true)} ></Commencer> :null}
      
     {nom[compteur] ? <Butt begin={begin} inc={handlebutton}></Butt>  :null}
    
      <Lbt setFiltrer={setFiltrer} ></Lbt>
      <ListGroup>
      {filtrer==="tous" ? tous.map((p)=><ListGroup.Item action variant="danger"><div style={{color:"black"}}>{p} </div></ListGroup.Item>):null}
      {filtrer==="present" ? present.map((p)=><ListGroup.Item action variant="danger"><div style={{color:"black"}}>{p}</div></ListGroup.Item>):null}
      {filtrer==="absent" ? abscent.map((p)=><ListGroup.Item action variant="danger"><div style={{color:"black"}}>{p}</div></ListGroup.Item>):null}
      </ListGroup>
    </div>
  );
}






