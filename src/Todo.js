import React, { Component } from 'react'
import Item from "./Item"

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {

            firstName: "",
            lastName: "",
            age: "",
            people: []
        }
    }

    handleChangeFirst = (event) => {
        console.log(event.target.value)
        this.setState({ firstName: event.target.value })
    }

    handleChangeLast = (event) => {
        console.log(event.target.value)
        this.setState({ lastName: event.target.value })
    }

    handleChangeAge = (event) => {
        console.log(event.target.value)
        this.setState({ age: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()


        const firstName = this.state.firstName
        const lastName = this.state.lastName
        const age = this.state.age
        const newPerson = { firstName: firstName, lastName: lastName, age: age }

        this.setState(prevState => ({
            people: prevState.people.concat(newPerson),
        }))
    }

    render() {
        return (
            <div>
                <h3>Todo List</h3>
                {/*we add the compnent to show the list*/}
                <Item people={this.state.people} />

                <p>A List of thing to do</p>
                <form onSubmit={this.handleSubmit}>


                    <input placeholder="fistName" onChange={this.handleChangeFirst} type="text"
                        id="todo-item"
                        value={this.state.firstName}
                    />
                    <input placeholder="lastName" onChange={this.handleChangeLast} type="text"
                        id="todo-item"
                        value={this.state.lastName}
                    />
                    <input placeholder="age" onChange={this.handleChangeAge} type="text"
                        id="todo-item"
                        value={this.state.age}
                    />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}
