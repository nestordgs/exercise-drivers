module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cities',[
      {
        name: '	Montgomery',
        stateId: 2
      },
      {
        name: 'Juneau',
        stateId: 1
      },
      {
        name: 'Phoenix',
        stateId: 4
      },
      {
        name: 'Little Rock',
        stateId: 3
      },
      {
        name: 'Sacramento',
        stateId: 5
      },
      {
        name: 'Denver',
        stateId: 6
      },
      {
        name: 'Hartford',
        stateId: 7
      },
      {
        name: 'Dover',
        stateId: 9
      },
      {
        name: 'Tallahassee',
        stateId: 10
      },
      {
        name: 'Atlanta',
        stateId: 11
      },
      {
        name: 'Honolulu',
        stateId: 12
      },
      {
        name: 'Boise',
        stateId: 14
      },
      {
        name: 'Springfield',
        stateId: 15
      },
      {
        name: 'Indianapolis',
        stateId: 16
      },
      {
        name: 'Des Moines',
        stateId: 13
      },
      {
        name: 'Topeka',
        stateId: 17
      },
      {
        name: 'Frankfort',
        stateId: 18
      },
      {
        name: 'Baton Rouge',
        stateId: 19
      },
      {
        name: 'Augusta',
        stateId: 22
      },
      {
        name: 'Annapolis',
        stateId: 21
      },
      {
        name: 'Boston',
        stateId: 20
      },
      {
        name: 'Lansing',
        stateId: 23
      },
      {
        name: 'Saint Paul',
        stateId: 24
      },
      {
        name: 'Jackson',
        stateId: 26
      },
      {
        name: 'Jefferson City',
        stateId: 25
      },
      {
        name: 'Helena',
        stateId: 27
      },
      {
        name: 'Lincoln',
        stateId: 30
      },
      {
        name: 'Carson City',
        stateId: 34
      },
      {
        name: 'Concord',
        stateId: 31
      },
      {
        name: 'Trenton',
        stateId: 32
      },
      {
        name: 'Santa Fe',
        stateId: 33
      },
      {
        name: 'Albany',
        stateId: 35
      },
      {
        name: 'Raleigh',
        stateId: 28
      },
      {
        name: 'Bismarck',
        stateId: 29
      },
      {
        name: 'Columbus',
        stateId: 36
      },
      {
        name: 'Oklahoma City',
        stateId: 37
      },
      {
        name: 'Salem',
        stateId: 38
      },
      {
        name: 'Harrisburg',
        stateId: 39
      },
      {
        name: 'Providence',
        stateId: 40
      },
      {
        name: '	Columbia',
        stateId: 41
      },
      {
        name: 'Pierre',
        stateId: 42
      },
      {
        name: 'Nashville',
        stateId: 43
      },
      {
        name: 'Austin',
        stateId: 44
      },
      {
        name: 'Salt Lake City',
        stateId: 45
      },
      {
        name: 'Montpelier',
        stateId: 47
      },
      {
        name: 'Richmond',
        stateId: 46
      },
      {
        name: 'Olympia',
        stateId: 48
      },
      {
        name: 'Charleston',
        stateId: 50
      },
      {
        name: 'Madison',
        stateId: 49
      },
      {
        name: 'Cheyenne',
        stateId: 51
      },
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cities', null, {});
  }
};
