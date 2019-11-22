import React, { Component, Fragment } from 'react';
import XiaojiejieItem from './XiaojiejieItem';
import Boss from './Boss';
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './data.js';
import './style.css';

class Xiaojiejie extends Component {
    constructor(props) {
        super(props) //调用父类的构造函数，固定写法
        this.inputChange = this.inputChange.bind(this);
        this.addList = this.addList.bind(this)
        this.state = {
            inputValue: '', // input中的值
            list: []    //服务列表
        }
    }


    inputChange() {
        this.setState({
            inputValue: this.input.value
        })
    }

    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ' '
        })

        console.log(this.ul.querySelectorAll('div').length)

    }

    deleteItem(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }

    render() {
        return (
            <Fragment>
                <label htmlFor='tony'>加入服务：</label>
                <input
                    id='tony'
                    className='input'
                    value={this.state.inputValue}
                    maxLength="32"
                    onChange={this.inputChange}
                    ref={(input) => { this.input = input }}
                />
                <button onClick={this.addList}> 增加服务 </button>
                <ul ref={(ul) => { this.ul = ul }}>
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <CSSTransition
                                        timeout={2000}
                                        classNames="boss-text"
                                        unmountOnExit
                                        appear={true}
                                        key={index + item}
                                    >

                                        <XiaojiejieItem
                                            key={index + item}
                                            content={item}
                                            index={index}
                                            deleteItem={this.deleteItem.bind(this)}
                                        />
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>
                <Boss />
            </Fragment>
        )
    }

    componentDidMount() {
        axios.get('https://www.test.com')
            .then((res) => {
                console.log('axios获取成功:' + JSON.stringify(res))
                this.setState({
                    list: res.data.list
                })
            })
            .catch((error) => {
                console.log('axios获取数据失败' + error)
            })
    }



}

export default Xiaojiejie



