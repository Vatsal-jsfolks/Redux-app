import React from 'react'
import { useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux';
import { depositeMoney, withdrawMoney } from './State/Action-creators';
import { actionCreators } from './State/index'
function Shop() {
  const dispatch = useDispatch(); 
  // const actions = bindActionCreators(actionCreators, dispatch) 
  return (
    <div>

        <h2>Deposite/Withdraw Money</h2>
        <button className='btn btn-primary mx-3 my-2' onClick={() => dispatch(actionCreators.withdrawMoney(100))}>-</button>
            Update Balance
        <button className='btn btn-primary mx-3 my-2' onClick={() => dispatch(actionCreators.depositeMoney(100))}>+</button>
    </div>
  )
}

export default Shop