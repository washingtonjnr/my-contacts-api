const { v4 } = require('uuid');

const ContactsMock = [
  {
    id: v4(),
    name: "Washington",
    email: "washington@wj.com",
    phone: "(11) 9 8956-2356",
    category_id: v4()
  },
];

module.exports = ContactsMock;
