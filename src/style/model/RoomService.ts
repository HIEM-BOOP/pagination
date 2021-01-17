import { PagingRoom } from './Room';
import { Room } from './Room'

const rooms: Room[] = [
    {
        name: 'Nhà cao tầng 1',
        price: 3000000,
        address: ""
    }, {
        name: 'Nhà cao tầng 2',
        price: 3000000,
        address: ""
    }, {
        name: 'Nhà cao tầng 3',
        price: 3000000,
        address: ""
    }, {
        name: 'Nhà cao tầng 4',
        price: 3000000,
        address: ""
    }
    , {
        name: 'Nhà cao tầng 5',
        price: 3000000,
        address: ""
    }
    , {
        name: 'Nhà cao ',
        price: 3000000,
        address: ""
    }
    , {
        name: 'Nhà cao tầng',
        price: 3000000,
        address: ""
    }
    , {
        name: 'Nhà cao tầng',
        price: 3000000,
        address: ""
    }
    , {
        name: 'Nhà cao tầng',
        price: 3000000,
        address: ""
    }
    , {
        name: 'Nhà cao tầng',
        price: 3000000,
        address: ""
    }

]
class RoomService {
    list(page: number, pageSize: number): Promise<PagingRoom> {
        // TODO: viet tra ra pagination
        const start = (page - 1) * pageSize;
        const end = start + pageSize
        return Promise.resolve({
            page: page,
            pageSize: pageSize,
            totalPage: rooms.length / pageSize,
            rooms: rooms.slice(start, end)
        });
    }
}
export const roomService = new RoomService();