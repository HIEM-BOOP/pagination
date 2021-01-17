import React from 'react'
import { Room } from '../style/model/Room'

export default function Item(props: Props) {
    return (
        <tr>
            <td>{props.room.name}</td>
            <td>{props.room.price}</td>
            <td>{props.room.address}</td>
        </tr>

    )
}

export interface Props {
    room: Room
}