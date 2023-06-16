const { Prisma } = require('@prisma/client');

//data used to test and initialize the database

const categories = [
  {
    name: 'Institute ID',
    description: 'Institute ID',
  },
  {
    name: 'Institute Name',
    description: 'Name of the college',
  },
  {
    name: 'Year',
    description: 'Year of data',
  },
  {
    name: 'Mean Package',
    description: 'No. of Mean Package',
  },
  {
    name: 'College Tier',
    description: 'College Tier',
  },
  {
    name: 'Graduating',
    description: 'Graduating in stipulated time',
  },
  {
    name: 'Placed',
    description: 'Placed',
  },
  {
    name: 'Higher Edu',
    description: 'Higher Education',
  },
  {
    name: 'Male Students',
    description: 'No. of Male students',
  },
  {
    name: 'Female Students',
    description: 'No. of Female students',
  },
  {
    name: 'Total Students',
    description: 'No. of Total students',
  },
  {
    name: 'Source',
    description: 'Source PDF',
  },
  {
    name: 'Previous Year',
    description: 'Previous Year',
  },
  {
    name: 'Previous Year Mean',
    description: 'Previous Year Mean Package',
  },
  {
    name: 'Second to Last',
    description: 'Second to Last',
  },
  {
    name: 'Second to Last Mean',
    description: 'Second to Last Mean Package',
  },
];

const products = [
  {
    category_id: 1,
    institute_id: 'IR-E-I-1075',
    institute_name: 'Indian Institute of Technology Kanpur',
    year: '2020-21',
    no_of_mean_package: '1915000(Nineteen Lakh Fifteen Thousand)',
    college_tier: '1',
    graduating_in_stipulated_time: '773',
    placed_in_the_year: '437',
    no_of_higher_edu: '299',
    no_of_male_students: '3061',
    no_of_female_students: '581',
    total_students:  '3642',
    source_pdf: 'https://www.nirfindia.org/nirfpdfcdn/2022/pdf/Engineering/IR-E-I-1075.pdf',
    previous_year:  '2019-20',
    second_to_last: '2018-19',
    previous_year_mean_package: '1700000(Seventeen Lakh)',
    second_to_last_mean_package: '1500000(Fifteen Lakh)'
  },
];

module.exports = {
  products,
  categories,
}