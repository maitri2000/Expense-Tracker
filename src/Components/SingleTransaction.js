
import {Box,makeStyles,Typography,ListItem,ListItemIcon,ListItemText} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles=makeStyles({
    list:
    {
        marginRight:10,
        marginLeft:20


    },
    listhead:
    {
        marginBottom:10,
        

    }
})



const SingleTransaction=({singleItem,deleteTransaction})=>

{
     const classes = useStyles();
     const colour = singleItem.amount>=0?'green':'red';
     const sign= singleItem.amount>=0? '₹':'-₹';
     const amt=sign+Math.abs(singleItem.amount);
    return(
        <>
        <ListItem className={classes.listhead} style={{background:singleItem.amount>=0?'green':'red'}} >
            <DeleteIcon onClick={()=>deleteTransaction(singleItem.id)} className={classes.list}/>
            <ListItemText  primary={singleItem.text}/>
            <ListItemText className={classes.list} primary={amt}/>

        </ListItem>
        
        </>
    )

}

export default SingleTransaction;