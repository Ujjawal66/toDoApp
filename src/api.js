import { v4 } from "uuid";
export const task = [
    {
        "logo": "ship/work.svg",
        "type": {
            "thing": "Work",
            "color": "lightblue"
        },
        "title": "Go College",
        "place": "Meerut, Uttar Pradesh",
        "time": "07:00 AM",
        "id": "00e20478-b4e3-4b5a-b053-bc097bd6bc2f",
        "completed": true
    },
    {
        "id": "f190b261-f7ba-4bc8-8afc-c85fa3a662b5",
        "logo": "ship/book.svg",
        "title": "Learn React",
        "place": "Library",
        "time": "8:00 AM",
        "type": {
            "thing": "Personal",
            "color": "darkgray"
        },
        "completed": false
    },
    {
        "logo": "ship/carrot.svg",
        "type": {
            "thing": "Personal",
            "color": "darkgray"
        },
        "title": "Lunch",
        "place": "Home",
        "time": "10:30 AM",
        "id": "ed9f4c2d-e31f-4e34-9e93-f5a7c8143f68",
        "completed": false
    },
    {
        "logo": "ship/rocket.svg",
        "type": {
            "thing": "Wishlist",
            "color": "yellow"
        },
        "title": "Finding Job",
        "place": "Linkdin Website",
        "time": "1:00 PM",
        "id": "a42329b9-ddd6-484f-881b-3620ff8adb17",
        "completed": false
    },
    {
        "logo": "ship/running.svg",
        "type": {
            "thing": "Personal",
            "color": "darkgray"
        },
        "title": "Exercise",
        "place": "Playground",
        "time": "4:14 PM",
        "id": "ed72d778-d263-4999-a655-cbf517b44b24",
        "completed": false
    },
    {
        "logo": "ship/default.svg",
        "type": {
            "thing": "Business",
            "color": "tomato"
        },
        "title": "Calculating Profit",
        "place": "Company",
        "time": "5:00 PM",
        "id": "4dba3aac-2f5a-463c-9fa2-cbc29dd83f16",
        "completed": true
    }
]

export const types = [
  {thing: 'Business', color: 'tomato'},
  {thing: 'Personal', color: 'darkgray'},
  {thing: 'Shopping', color: 'limegreen'},
  {thing: 'Wishlist', color: 'yellow'},
  {thing: 'Work', color: 'lightblue'}
]

export const logoUrl = [
  'ship/default.svg',
  'ship/ball.svg',
  'ship/music.svg',
  'ship/running.svg',
  'ship/work.svg',
  'ship/book.svg',
  'ship/carrot.svg',
  'ship/rocket.svg'
]