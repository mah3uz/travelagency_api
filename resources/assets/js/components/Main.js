import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Package from './travelPackage'
// import AddPackage from './AddPackage'

/* Main React component */
class Main extends Component {

    constructor() {

        super();

        // Initialize the state in the constructor.
        this.state = {
            travelPackages: [],
            currentPackage: null,
        }

        // this.handleAddPackage = this.handleAddPackage().bind(this);
    }

    /* componentDidMount() is a lifecycle method
     * that gets called after the component is rendered.
     */
    componentDidMount() {
        /* Fetch API in action */
        fetch('/api/packages')
            .then(response => {
                return response.json();
            })
            .then(travelPackages => {
                /* Fetched product is stored in the state */
                this.setState({ travelPackages });
            })
    }

    renderTravelPackages() {

        const listStyle = {
            listStyle: 'none',
            fontSize: '16px',
            lineHeight: '1.8em',
            cursor: 'pointer',
        }

        return this.state.travelPackages.map(travelPackage => {
            /* when using list you need to specify a key
             * attribute that is unique for each list item.
             */
            return (
                // this.handleClick() method is invoked onClick.
                <li style={listStyle} onClick={
                    () => this.handleClick(travelPackage)
                } key={travelPackage.id}>
                    { travelPackage.title }
                </li>
            );
        })
    }

    handleClick(travelPackage) {
        // handleClick is used to set the state.
        this.setState({ currentPackage:travelPackage });
    }

    // handleAddPackage(travelPackage) {
    //     travelPackage.price = Number(travelPackage.price);
    //
    //     // Fetch API for post request.
    //     fetch('/api/packages', {
    //         method: 'post',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(travelPackage)
    //     })
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(data => {
    //             // Update the state of the Package and currentPackage.
    //             this.setState((prevState) => ({
    //                 travelPackages: prevState.travelPackages.concat(data),
    //                 currentPackage: data
    //             }))
    //         })
    // }

    render() {

        const mainDivStyle = {
            display: 'flex',
            flexDirection: 'row',
        }

        const divStyle = {
            justifyContent: 'flex-start',
            padding: '10px',
            width: '35%',
            margin: '30px 10px',
            background: '#f8f4ca'
        }

        return (
            <div style={mainDivStyle}>
                <div style={divStyle}>
                    <h3>All Packages</h3>
                    <ul>
                        { this.renderTravelPackages() }
                    </ul>
                </div>


                <Package travelPackage={this.state.currentPackage} />
                {/*<AddPackage onAdd={this.handleAddPackage} />*/}

            </div>
        );
    }
}

export default Main;

/* The if statement is required so as to
 * Render the component on
 * pages that have a div with an ID of "root";
 */

if (document.getElementById('root')) {
    ReactDOM.render(<Main/>, document.getElementById('root'));
}