import React from 'react';
import {Component} from 'react';
import { thisExpression } from '@babel/types';

class InnerApp extends Component {

    constructor() {
        super();
        //this.addCounter = this.addCounter.bind(this);
    }

    state = {counter:0}

    xx = () => (<h2>InnerApp: {this.props.name}</h2>);

    addCounter = () => (
        this.setState(s => ({counter: ++s.counter}))
        //alert("oh my god..")
    )

    render() {
        const {name} = this.props;
        return (
            <div onMouseOver={this.addCounter}>
               {this.xx()}
               counter: {this.state.counter}
            </div>
        );
    }
}
export default InnerApp;