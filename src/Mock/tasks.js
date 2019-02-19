const uuid4= require('uuid/v4');
let items=[
  { 
    id: uuid4(),
    name:"go shopping",
    level:0
  },
  {
    id: uuid4(),
    name:"go to the beach",
    level:1
  },
  {
    id: uuid4(),
    name:"do home work",
    level:2
  },
  {
    id: uuid4(),
    name:"travelling to Europe",
    level:2
  },
  {
    id: uuid4(),
    name:"clean the house",
    level:1
  },
]
export default items;