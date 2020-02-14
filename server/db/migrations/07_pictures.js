
exports.up = function(knex) {
  return knex.schema.createTable('pictures', table => {
    table.increments();
    table.string('pic').notNullable();
  })
};

exports.down = function(knex) {
  knex.schema.dropTable('pictures')
};
