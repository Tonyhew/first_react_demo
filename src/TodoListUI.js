import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';


const TodoListUI = (props) => {

    return (
        <Fragment>
            <div style={{ margin: '10px' }}>
                <Input
                    value={props.inputValue}
                    style={{ width: '250px', marginRight: '10px' }}
                    onChange={props.changeInputValue}
                />
                <Button
                    type="primary"
                    onClick={props.clickBtn}
                >
                    增加
                    </Button>
            </div>

            <div style={{ margin: '10px', width: '300px' }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={
                        (item, index) => (
                            <List.Item onClick={() => { props.deleteItem(index) }}>
                                {item}
                            </List.Item>
                        )
                    }
                />
            </div>

        </Fragment>
    );

}

export default TodoListUI;

