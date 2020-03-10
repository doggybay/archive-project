
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('types').del()
    .then(function () {
      // Inserts seed entries
      return knex('types').insert([
        { "name": "Electronics" },
        { "name": "Jewelry" },
        { "name": "Clothes" },
        { "name": "Furniture" },
        { "name": "Art" },
        { "name": "Decore" },
        { "name": "Kitchen" },
        { "name": "Tools" },
        { "name": "Bedding" },
        { "name": "TV/Video" },
        { "name": "Home Audio" },
        { "name": "Camera" },
        { "name": "TV" },
        { "name": "Computer" },
        { "name": "Laptop" },
        { "name": "Video Games" },
        { "name": "Cell Phone" },
        { "name": "Musical Instrument" },
        { "name": "Headphones" },
        { "name": "Misc Electronics" },
        { "name": "Other" }
      ]);
    });
};
