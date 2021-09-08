
import { configure, findByLabelText } from '@testing-library/dom';
import './App.css';
import Balance from './Components/Balance';
import Expense from './Components/ExpenseCard';
import NewTransaction from './Components/NewTransaction';
import Transactions from './Components/TransactionHistory';
import {Typography,makeStyles,Box} from '@material-ui/core';
import { Directions } from '@material-ui/icons';
import { useState } from 'react';
const useStyle=makeStyles({
  header:{
    color:'blue',
    fontSize:35,
    margin :'10px 0'
    
  },
  component:{
      backgroundColor:'white',
      width:800,
      padding:10,
      borderRadius:20,
      display:'flex',
     
      '& > *':
      {
          width:'50%'
      }
  }

})



const App= ()=> {
  const classes=useStyle();
  const [transactions,setTransactions]=useState([ {
    id:1,
    text:"BOOKS",
    amount:-100
},
{
      
    id:2,
    text:"UTENSILS",
    amount:-100
},
{
    id:3,
    text:"BLANKET",
    amount:-100

},
{
    id:4,
    text:"SALARY",
    amount:+3000

}])


    const addNew=(transaction)=>
    {
          const arr=[...transactions,transaction]
           setTransactions(arr);
    }
  const deleteTransaction=(id)=>
     {
            // console.log(id);
            setTransactions(transactions.filter(transaction=>transaction.id!=id));
         
     }
    

  return(
    <div className="App">
       <Typography className={classes.header}>EXPENSE TRACKER</Typography>
       <Box className={classes.component}>
         <Box>
         <Balance transactions={transactions}/>
         <Expense transactions={transactions} />
         <NewTransaction addNew={addNew}/>
         </Box>
         <Box>

         <Transactions transactions={transactions} deleteTransaction={deleteTransaction}/>
         </Box>
         </Box>
    </div >
  );
}

export default App;
