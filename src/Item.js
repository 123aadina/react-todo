import React from 'react'

export default function Item(props) {
    return (
        <ul>
            {props.people.map((item, id) => <li key={id}>{item.firstName} {item.lastName} {item.age}</li>

            )}

        </ul>
    )
}

