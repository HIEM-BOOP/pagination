import React, { useEffect, useState } from 'react'
import { Room } from '../style/model/Room'
import { roomService } from '../style/model/RoomService'
import '../style/Style.css'
import Item from './Item'


export default function Rooms() {
    const [state, setState] = useState<State>({
        rooms: [],
        page: 1,
        pageSize:5,
        totalPage: 1
    })
    useEffect(() => {
        roomService.list(state.page, state.pageSize).then(paging => {
            setState({
                rooms: paging.rooms,
                page: paging.page,
                pageSize: paging.pageSize,
                totalPage: paging.totalPage
            })
        })
    }, [])
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Giá</td>
                        <td>Địa chỉ</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.rooms.map(item =>
                            <Item room={item
                            } />

                        )
                    }
                </tbody>
            </table>
            <div className="container" >
                <div className="content">
                    <div className="pagination">
                        <button disabled={
                            state.page === 1 ? true : false
                        }
                            onClick={
                                () => {
                                    // setState({
                                    //     ...state,
                                    //     page: state.page -1
                                    // })
                                    // console.log(state.page)
                                    roomService.list(state.page,state.pageSize ).then(res => {
                                        setState({
                                            ...state,
                                            page :state.page - 1,
                                            rooms : res.rooms
                                        })
                                        console.log(state.page)
                                   })
                                }
                            }
                        >&laquo;
                        </button>
                        <button  
                            onClick = {
                                () => {
                                    // setState({
                                    //     ...state,
                                    //     page : state.page + 1
                                    // })
                                    roomService.list(state.page,state.pageSize ).then(res => {
                                        setState({
                                            ...state,
                                            page :state.page + 1,
                                            rooms : res.rooms
                                        })
                                        console.log(state.page)
                                   })
                                }
                            }
                        >
                            &raquo;
                       </button>
                       <div>
                           <span>{state.page}</span>
                       </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export interface State {
    rooms: Room[],
    page: number,
    pageSize: number,
    totalPage: number
}
