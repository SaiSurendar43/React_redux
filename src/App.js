import React from 'react'
import Range from './Range/Range'
import { Box } from '@mui/material'
import { store } from './Store/Store'
import { Provider } from 'react-redux'




const App = () => {
  return (
   <Box>
    <Provider store={store}>
     <Range/>
     </Provider>
   </Box> 
  )
}
export default App