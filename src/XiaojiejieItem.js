import React, { Component } from 'react';
import PropTypes from 'prop-types';

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    shouldComponentUpdate(nextProps,nextState) {
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
    }

    render() { 
        return ( 
            <li>
                <div onClick={this.handleClick}>
                    {this.props.avaname}为你做-
                    {this.props.content}
                </div> 
            </li>
        );
    }

    handleClick() {

        this.props.deleteItem(this.props.index)

    }

}

XiaojiejieItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number,
    avaname: PropTypes.string.isRequired
}
XiaojiejieItem.defaultProps = {
    avaname:'松岛枫'
}
export default XiaojiejieItem;
