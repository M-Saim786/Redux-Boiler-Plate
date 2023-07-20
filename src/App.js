import React from 'react'
import { Increment } from './Config/Store/Action'
import {connect} from 'react-redux'
import AdUser from './Components/AdUser'
function App(props) {
  return (
    <div>
      Count {props.count}
      <button  onClick={()=>props.increment()}>
        Increment
      </button>

<AdUser />

    </div>
  )
}
const mapToStateProps=(state)=>({
    count:state.count
})
const mapToDispatchProps=(dispatch)=>({
    increment:()=>dispatch(Increment())
})
export default connect(mapToStateProps,mapToDispatchProps)(App)
