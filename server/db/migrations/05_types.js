
exports.up = function(knex) {
  return knex.schema.createTable('types', table => {
    table.increments();
    table.string('name');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('types')
};
