

import {Box,Typography,makeStyles} from '@material-ui/core';

const useStyle=makeStyles(
    {
        balance:{
            fontSize:20,
            marginBottom:20
        }
    }
)

const Balance=({transactions})=>
{
    
    console.log(transactions);
    const arr=transactions.map(transaction => transaction.amount);
    
    console.log(arr);
     const bal=arr.reduce((acc,val)=>acc+val,0);
    
    
    const classes=useStyle();

    return(
        <Box className={classes.balance}>
            TOTAL BALANCE : Rs {bal}
        </Box>
    )
}

export default Balance;