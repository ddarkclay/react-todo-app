import React from 'react'
import './ListItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move'

function ListItem(props) {
    return (
        <div>
            <FlipMove duration={500} easing="ease-in-out">
                {props.list.map(item => (
                    <div className="list" key={item.key}>

                        <p><input type="text" id={item.key} value={item.text}
                            onChange={(e) => {
                                props.setUpdate(e.target.value, item.key)
                            }} />
                            <span>
                                <FontAwesomeIcon className="faicons" icon="trash"
                                    onClick={() => props.deleteItem(item.key)} />
                            </span>
                        </p>
                    </div>
                ))}
            </FlipMove>
        </div>
    )
}

export default ListItem;