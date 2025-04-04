import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <p>This is {this.props.name} profile</p>
        )
    }
}

export default UserClass;