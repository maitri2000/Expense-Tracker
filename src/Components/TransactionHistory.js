
import { useState } from "react";

import { Typography,Box,Divider ,makeStyles,List} from "@material-ui/core";
import SingleTransaction from './SingleTransaction';
const useStyles=makeStyles({
    header:
    {
        marginTop:15,
        marginLeft:10,
        marginBottom:10
    }
})

const Transactions=({transactions ,deleteTransaction})=>
{
    

    const classes=useStyles();
    return(
        
            <Box className={classes.header}>
            <Typography  variant="h5">Transaction History</Typography>
            <Divider/>
            <List>
                {
                  transactions.map(singleTransaction => {
                  return <SingleTransaction key={singleTransaction.id} singleItem={singleTransaction} deleteTransaction={deleteTransaction}/>
                   })
                }
            </List>
            </Box>
        
    )
}

export default Transactions;