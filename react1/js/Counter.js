// //beispiel 1:
//var Counter = React.createClass({
//    add: function() {
//        console.log('add 1!');
//    },
//
//    render: function() {
//        return <div>
//        <h1>Counter</h1>
//        <button onClick={this.add}>+</button>
//    </div>
//}
//});

// //beispiel 2:
//var Counter = React.createClass({
//    getInitialState: function() {
//        return({count: 0});
//    },
//
//    add: function() {
//        this.setState(
//            {count: this.state.count + 1});
//    },
//
//    render: function() {
//        return(
//            <div>
//                <button onClick={this.add}>
//                    +
//                </button>
//                <p>Count: {this.state.count}</p>
//            </div>
//        );
//    }
//});

// beispiel 3
var Counter = React.createClass({

    getInitialState: function() {
        return({count: 0});
    },

    add: function() {
        this.setState(
            {count: this.state.count + 1});
    },

    style: function() {
        return {backgroundColor: this.props.colour};
    },

    render: function() {
        return(
            <div>
                <h1>{this.props.colour} counter</h1>
                <button style={this.style()}
                    onClick={this.add}>+</button>

                <p>Current count:
                    <span>{this.state.count}</span>
                </p>
                <hr />
            </div>
        );
    }
});

var App = React.createClass({
    getInitialState: function() {
        return {colours: ['red', 'green', 'blue']};
    },

    buttons: function() {
        return this.state.colours.map(function(colour) {
            return(<Counter colour={colour} key={colour} />);
        });
    },

    render: function() {
        return(
            <div>{this.buttons()}</div>
        );
    }
});


// // für beispiel 1 und 2
//ReactDOM.render(<Counter />, document.querySelector('#react-container'));

// für beispiel 3
ReactDOM.render(<App />,
    document.querySelector('#react-container'));


