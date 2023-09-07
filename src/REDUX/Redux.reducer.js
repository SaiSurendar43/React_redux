import {INCR,DECR} from '../REDUX/Redux.action'

const initialstate =
{
    name:"apple",
    Qty:"20",
    price:"500",
    total:'3400'
}


const itemreducer =(state = initialstate,action)=>
{
    switch(action.type)
    {
         case INCR:
            return {...state,Qty:state.Qty+1}
        
        case DECR:
             return {...state,Qty:state.Qty-1}
        default:

             return state
    }


}

export {itemreducer}