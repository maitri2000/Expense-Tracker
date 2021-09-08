

import {Typography,Card,Box,CardContent, makeStyles} from '@material-ui/core'

const useStyles=makeStyles({
 
    container:
    {
       display : 'flex',
    
    '& > *':
    {
        padding:10,
        flex:1
    }
   },

   income:{ color:'green'},

   expense:{color:'red'}
   
}
)

const Expense=({transactions})=>
    {
        
        
        const amt=transactions.map(transaction => transaction.amount);
        const inc=amt.filter(samt=>samt>0);
        const exp=amt.filter(samt=>samt<0);
        const expsum=exp.reduce((acc,val)=>acc+val,0)*-1;
        const incsum=inc.reduce((acc,val)=>acc+val,0);

        console.log(inc);
        console.log(incsum);
        const classes=useStyles();
        return(
            <Box className={classes.container}>
             <Card >
                 <CardContent>
                  <Typography>Income</Typography>
                  <Typography className={classes.income}>Rs {incsum} </Typography>
        
                 </CardContent>
                 </Card>

                 <Card>
                 <CardContent>
                  <Typography>Expense</Typography>
                  <Typography className={classes.expense}>Rs {expsum}</Typography>

                 </CardContent>
                 </Card>

            </Box>
            )

    };

    export default Expense;