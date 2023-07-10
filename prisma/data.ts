const { Prisma } = require('@prisma/client');
//data used to test and initialize the database

const BTechRTI = [
  {
    category_id: 1,
    Institute: '123',
    Year: '2020-21',
    Branch: 'CSE',
    Registered: '100',
    Placed: '95',
    Average: '100,000',
    Median: '90,000',
    Highest: '200,000',
    Lowest: '80,000'
  },
];

module.exports = {
  BTechRTI,
}