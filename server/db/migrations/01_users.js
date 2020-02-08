
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').unique().notNullable();
    table.string('phone');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
