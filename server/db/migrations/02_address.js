// TODO
// need to change camel case to underscore 


exports.up = function(knex) {
  return knex.schema.createTable('address', table => {
    table.increments();
    table.integer('user_id').references('users.id').notNullable().onDelete('CASCADE');
    table.string('stAddress').notNullable();
    table.string('optAddress');
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.integer('zipCode').notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('address');
};
