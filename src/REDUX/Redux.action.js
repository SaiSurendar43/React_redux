
const INCR = 'INCR'
 const DECR = 'DECR'

const increaction = ()=>
{
       return {
           type:INCR
       }
}

const decraction= ()=>
{
     return{
        type:DECR
     }
}

export{increaction,decraction,INCR,DECR}
