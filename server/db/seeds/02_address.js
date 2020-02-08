
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('address').del()
    .then(function () {
      // Inserts seed entries
      return knex('address').insert([
        {
          user_id: 1,
          stAddress: "942 Highland Boulevard",
          optAddress: "",
          city: "Chemung",
          state: "Oklahoma",
          zipCode: 05134
        },
        {
          user_id: 2,
          stAddress: "349 Scott Avenue",
          optAddress: "apt 1001",
          city: "Babb",
          state: "Illinois",
          zipCode: 22637
        },
        {
          user_id: 3,
          stAddress: "464 Irwin Street",
          optAddress: "apt 213",
          city: "Fidelis",
          state: "Georgia",
          zipCode: 13228
        },
        {
          user_id: 4,
          stAddress: "657 Conklin Avenue",
          optAddress: "",
          city: "Cowiche",
          state: "Virginia",
          zipCode: 73590
        },
        {
          user_id: 5,
          stAddress: "523 Bay Street",
          optAddress: "apt 1001",
          city: "Rivera",
          state: "District Of Columbia",
          zipCode: 39217
        },
        {
          user_id: 6,
          stAddress: "659 Cyrus Avenue",
          optAddress: "apt 1001",
          city: "Tedrow",
          state: "Alabama",
          zipCode: 93325
        },
        {
          user_id: 7,
          stAddress: "809 Hampton Place",
          optAddress: "apt 1001",
          city: "Baden",
          state: "Louisiana",
          zipCode: 33701
        }
      ]);
    });
};
