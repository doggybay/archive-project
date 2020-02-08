
exports.up = function(knex) {
  return knex.schema.createTable('address', table => {
    table.increments();
    table.integer('user_id').notNullable();
    table.string('stAddress').notNullable();
    table.string('optAddress');
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.integer('zipCode').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('address');
};
