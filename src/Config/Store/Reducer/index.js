const firstState ={
    count:0,
    AllUsers:[]
}
export default (state =firstState ,action)=>{
switch(action.type){
    case 'inc':
        return {...state,count:state.count+1}
    case 'addUser':
        // Add User Query
        return {...state,AllUsers:[...state.AllUsers,action.data]}
    default :
    return state
}
}