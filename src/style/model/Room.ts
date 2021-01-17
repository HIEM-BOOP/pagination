export interface Room {
    name : string ;
    price : number ;
    address : string ;
}

export interface PagingRoom{
    rooms: Room[],
    page: number,
    pageSize: number,
    totalPage: number
}