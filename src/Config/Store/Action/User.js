const AddUser = (data) => {
    console.log(data);
    // agr return nhi hoga tou "Action must be Plain Object " wala error aiga
    return (dispatch) => {
        dispatch({
            type: 'addUser',
            data: data
        })
    }
}
export { AddUser } 