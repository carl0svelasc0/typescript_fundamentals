import _ from 'lodash';

const data = [
  {
    username: 'nico',
    role: 'admin'
  },
  {
    username: 'carlos',
    role: 'seller'
  },
  {
    username: 'miguel',
    role: 'seller'
  },
  {
    username: 'pepito',
    role: 'seller'
  },
  {
    username: 'santiago',
    role: 'customer'
  }
];

const rta = _.groupBy(data,(item)=>item.role);
console.log(rta);
