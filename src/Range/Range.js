import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {increaction,decraction} from '../REDUX/Redux.action'
import { useDispatch, useSelector } from 'react-redux'

function YourComponent() {

   const dispatch = useDispatch();
   const item = useSelector((state)=>{
              return state.item
            
   })

//   const item =
// //   {
// //        name:"apple",
// //        Qty:"20",
// //        price:"500",
// //        total:'3400'

// //   }


  const handleIncrement = () => {
     dispatch(increaction())
  };

  const handleDecrement = () => {
     dispatch(decraction())
  };

  return (
    <Box sx={{ marginTop: '40px', marginLeft: '30px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>QTY</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              <Button size='small' onClick={handleIncrement} variant="contained">
                Add
              </Button>
              <TableCell>{item.Qty}</TableCell>
              
              <Button size='small' onClick={handleDecrement} variant="contained">
                Minus
              </Button>
            </TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.Qty * item.price}</TableCell>
          </TableRow>
          {/* Add more rows as needed */}
        </TableBody>
      </Table>
    </Box>
  );
}

export default YourComponent;
