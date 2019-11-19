import React from 'react';

class Customer extends React.Component{
    render(){
        return(
            <div>
                <CustomerProfile idx={this.props.idx} image={this.props.image} name={this.props.name}/>
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} class={this.props.class}/>
            </div>
        )
    }
}
class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} als="profileImage"/>
                <h2>{this.props.name}({this.props.idx}번)</h2>
            </div>
        )
    }
}
class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.class}</p>
            </div>
        )
    }
}

export default Customer;