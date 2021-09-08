


import {TextField,Typography,Box,Button, makeStyles} from '@material-ui/core';
import { useState } from 'react';
const useStyles=makeStyles(
    {
        container:
        {
            display:'flex',
            flexDirection:'column',
            '& > *':
            {
                marginTop:15
            }
        },
    

    button:
    {
        background:"#445A6F",
        color:"white"
    }
}
)


const NewTransaction=({addNew})=>
{
     const[category,seTcategory] = useState('');
     const[amount,seTamount]     = useState();
    const classes=useStyles();

    
const addTransaction=()=>
{
       const transaction={
           id: Math.floor(Math.random()*1000),
           text:category,
           amount:amount
           
       }
       addNew(transaction);
}
 return(
    <Box className={classes.container}>
    <Typography variant="h5">New Transaction</Typography>
   <TextField  onChange={(e)=>seTcategory(e.target.value)} label="Name of Transaction"/>
   <TextField  onChange={(e)=>seTamount(parseInt(e.target.value))} label="Total Amount (Enter -ve for expenses)"/>  
    <Button  className={classes.button} onClick={addTransaction}>Add New Transaction</Button>
   </Box>
)
 }


export default NewTransaction;