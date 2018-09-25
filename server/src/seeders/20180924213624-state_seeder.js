module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('States', [
      {
        short_name: 'AK',
        full_name: 'Alaska'
      },
      {
        short_name: 'AL',
        full_name: 'Alabama'
      },
      {
        short_name: 'AR',
        full_name: 'Arkansas'
      },
      {
        short_name: 'AZ',
        full_name: 'Arizona'
      },
      {
        short_name: 'CA',
        full_name: 'California'
      },
      {
        short_name: 'CO',
        full_name: 'Colorado'
      },
      {
        short_name: 'CT',
        full_name: 'Connecticut'
      },
      {
        short_name: 'DC',
        full_name: 'District of Columbia'
      },
      {
        short_name: 'DE',
        full_name: 'Delaware'
      },
      {
        short_name: 'FL',
        full_name: 'Florida'
      },
      {
        short_name: 'GA',
        full_name: 'Georgia'
      },
      {
        short_name: 'HI',
        full_name: 'Hawaii'
      },
      {
        short_name: 'IA',
        full_name: 'Iowa'
      },
      {
        short_name: 'ID',
        full_name: 'Idaho'
      },
      {
        short_name: 'IL',
        full_name: 'Illinois'
      },
      {
        short_name: 'IN',
        full_name: 'Indiana'
      },
      {
        short_name: 'KS',
        full_name: 'Kansas'
      },
      {
        short_name: 'KT',
        full_name: 'Kentucky'
      },
      {
        short_name: 'LA',
        full_name: 'Louisiana'
      },
      {
        short_name: 'MA',
        full_name: 'Massachusetts'
      },
      {
        short_name: 'MD',
        full_name: 'Maryland'
      },
      {
        short_name: 'ME',
        full_name: 'Maine'
      },
      {
        short_name: 'MI',
        full_name: 'Michigan'
      },
      {
        short_name: 'MN',
        full_name: 'Minnesota'
      },
      {
        short_name: 'MO',
        full_name: 'Missouri'
      },
      {
        short_name: 'MS',
        full_name: 'Mississippi'
      },
      {
        short_name: 'MT',
        full_name: 'Montana'
      },
      {
        short_name: 'NC',
        full_name: 'North Carolina'
      },
      {
        short_name: 'ND',
        full_name: 'North Dakota'
      },
      {
        short_name: 'NE',
        full_name: 'Nebraska'
      },
      {
        short_name: 'NH',
        full_name: 'New Hampshire'
      },
      {
        short_name: 'NJ',
        full_name: 'New Jersey'
      },
      {
        short_name: 'NM',
        full_name: 'New Mexico'
      },
      {
        short_name: 'NV',
        full_name: 'Nevada'
      },
      {
        short_name: 'NY',
        full_name: 'New York'
      },
      {
        short_name: 'OH',
        full_name: 'Ohio'
      },
      {
        short_name: 'OK',
        full_name: 'Oklahoma'
      },
      {
        short_name: 'OR',
        full_name: 'Oregon'
      },
      {
        short_name: 'PA',
        full_name: 'Pennsylvania'
      },
      {
        short_name: 'RI',
        full_name: 'Rhode Island'
      },
      {
        short_name: 'SC',
        full_name: 'South Carolin'
      },
      {
        short_name: 'SD',
        full_name: 'South Dakota'
      },
      {
        short_name: 'TN',
        full_name: 'Tennessee'
      },
      {
        short_name: 'TX',
        full_name: 'Texas'
      },
      {
        short_name: 'UT',
        full_name: 'Utah'
      },
      {
        short_name: 'VA',
        full_name: 'Virginia'
      },
      {
        short_name: 'VT',
        full_name: 'Vermont'
      },
      {
        short_name: 'WA',
        full_name: 'Washington'
      },
      {
        short_name: 'WI',
        full_name: 'Wisconsin'
      },
      {
        short_name: 'WV',
        full_name: 'West Virginia'
      },
      {
        short_name: 'WY',
        full_name: 'Wyoming'
      },
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('States', null, {});
  }
};
