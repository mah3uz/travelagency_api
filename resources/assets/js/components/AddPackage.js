import React, { Component } from 'react';

class AddPackage extends Component {
    constructor(props) {
        super(props);

        // Initialize the state
        this.state = {
            newPackage: {
                title: '',
                destination: '',
                description: '',
                price: 0,
            }
        }

        // Boilerplate code for binding methods with 'this'.
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    // This method dynamically accepts inputs and store it in the state.
    handleInput(key, e) {

        // Duplicating and updating the state.
        var state = Object.assign({}, this.state.newPackage);
        state[key] = e.target.value();
        this.setState({newPackage: state});
    }

    // This method is invoked when submit button is pressed.
    handleSubmit(e) {

        // preventDefault prevents page reload.
        e.preventDefault();

        // A call back to the onAdd props. The current state is passed as a param.
        this.props.onAdd(this.state.newPackage);
    }

    render() {
        const divStyle = {
            position: 'absolute',
            left: '35%',
            top: '60%',
            flexDirection: 'space-between',
            marginLeft: '30px'
        }

        return(
            <div>
                <h2>Add new package:</h2>
                <div style={divStyle}>
                    /* when submit button is pressed,
                     * the control is passed to handleSubmit method.
                     */
                    <form onSubmit={this.handleSubmit}>
                        <label> Title:
                            <input type="text" onChange={(e)=>this.handleInput('title', e)}/>
                        </label>

                        <label> Destination:
                            <input type="text" onChange={(e)=>this.handleInput('destination', e)}/>
                        </label>

                        <label> Description:
                            <input type="text" onChange={(e)=>this.handleInput('description', e)}/>
                        </label>

                        <label> Price:
                            <input type="number" onChange={(e)=>this.handleInput('price', e)}/>
                        </label>

                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPackage;