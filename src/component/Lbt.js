import React from 'react';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));
  
  export default function GroupSizesColors({setFiltrer}) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <ButtonGroup
          color="secondary"
          aria-label="outlined secondary button group"
        >
          <Button style={{fontSize:"20px"}} onClick={()=>setFiltrer("tous")}>TOUS</Button>
          <Button style={{fontSize:"20px"}} onClick={()=>setFiltrer("absent")}>ABSENT</Button>
          <Button style={{fontSize:"20px"}} onClick={()=>setFiltrer("present")}>PRESENT</Button>
        </ButtonGroup>
      </div>
    );
  }

