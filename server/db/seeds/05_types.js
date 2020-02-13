
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('types').del()
    .then(function () {
      // Inserts seed entries
      return knex('types').insert([
        { "name": "electronics" },
        { "name": "jewlery" },
        { "name": "cloths" },
        { "name": "furniture" },
        { "name": "art" },
        { "name": "decore" },
        { "name": "kitchen" },
        { "name": "tools" },
        { "name": "bedding" }
      ]);
    });
};
