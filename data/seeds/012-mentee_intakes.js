const dummyData = [
  {
    profile_id: '12',
    email: 'fakeemail1@gmail.com',
    location: 'California, USA',
    first_name: 'Joe',
    last_name: 'Baseball',
    lives_in_us: true,
    formerly_incarcerated: true,
    list_convictions: 'coded too much',
    tech_stack: 'HTML/CSS/JS',
    experience_level: '2 years',
    mentee_focus: 'I want a career in coding',
    other_info: 'Not really',
    low_income: true,
    underrepresented_group: false,
  },
  {
    profile_id: '7',
    email: 'fakeemail4@gmail.com',
    location: 'Nevada, USA',
    first_name: 'Green',
    last_name: 'Man',
    lives_in_us: true,
    formerly_incarcerated: true,
    list_convictions: 'coded too much',
    tech_stack: 'Wix',
    experience_level: '1 years',
    low_income: true,
    mentee_focus: 'I want a career in coding',
    underrepresented_group: false,
  },
  {
    profile_id: '10',
    email: 'fakeemail6@gmail.com',
    location: 'Maine',
    first_name: 'Johnny',
    last_name: 'Donuts',
    lives_in_us: true,
    formerly_incarcerated: false,
    tech_stack: 'html, myspace',
    experience_level: '5 years',
    low_income: true,
    mentee_focus: 'I want a career in coding',
    underrepresented_group: false,
  },
];

exports.seed = function (knex) {
  return knex('mentee_intake')
    .del()
    .then(function () {
      return knex('mentee_intake').insert(dummyData);
    });
};
