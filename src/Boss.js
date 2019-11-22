import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.css'

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: true
         }
    }

    toToggole() {
        this.setState({
            isShow: this.state.isShow ? false :true
        })
    }

    render() { 
        return ( 
            <div>
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames="boss-text"
                    unmountOnExit
                >
                <div>BOSS级人物-孙悟空</div>
                </CSSTransition>
                <div><button onClick={this.toToggole.bind(this)}>召唤Boss</button></div>

            </div>
         );
    }
}
 
export default Boss;