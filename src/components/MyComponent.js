import React from "react";
// class MyComponent extends React.Component {
//     render() {
//         return (
//             <div>my first component</div>
//         )
//     }
// }

class MyComponent extends React.Component {

    state = {
        name: 'Haryphamdev',
        address: 'Hoi Dan IT',
        age: 26
    }

    handleClick = (event) => {
        console.log('>> Click me my button')
        console.log('random ', Math.floor((Math.random() * 100) + 1))

        this.setState({
            name: 'Eric'
        })

    }

    handleOnMouseOver(event) {
        console.log(event.pageX)
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                        type='text'
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;