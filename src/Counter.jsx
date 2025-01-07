import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './redux/counterSlice'

function Counter() {
  const[amount,setAmount]=useState(0)
  const{count} = useSelector(state=>state.counterReducer)
  const dispatch = useDispatch()

  const handleIncrementAmount=()=>{
      if(amount){
// dispatch
dispatch(incrementByAmount(+amount))
      }else{
        alert("please enter a valid number")
      }
  }
  return (
    <div  style={{backgroundColor:"black", width:"100%", height:"1000px"}} >
        
            <center>
                <h1 style={{ color:"white"}}>Counter App</h1>
                <div style={{width:"900px", height:"500px", border:"1px solid white"}}>
                  <center><h1 style={{fontSize:"150px", color:"white"}}>{count}</h1></center>
                  <button onClick={()=>dispatch(decrement())} className='btn btn-warning m-5'>DECREMENT</button>
                  <button onClick={()=>dispatch(reset())} className='btn btn-danger m-5'>RESET</button>
                  <button onClick={()=>dispatch(increment())} className='btn btn-success m-5'>INCREMENT</button>
                  <input onChange={e=>setAmount(e.target.value)} type="text" placeholder='enter any number' style={{width:"600px", height:"40px"}} />
                  <button onClick={handleIncrementAmount} className='btn btn-primary ms-3 ' >INCREMENT BY AMOUNT</button>
                </div>
            </center>
       
    </div>
  )
}

export default Counter

// drdrdrdrdrdsrdsrsrsrssrsdrsrsd