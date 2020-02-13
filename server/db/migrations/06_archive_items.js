
exports.up = function(knex) {
  return knex.schema.createTable('archive_items', table => {
    table.increments();
    table.integer('user_id').notNullable().references('users.id').onDelete('CASCADE');
    table.integer('type_id').notNullable();
    table.string('make').notNullable();
    table.string('model').notNullable();
    table.string('serial_num');
    table.integer('price').notNullable();
    table.text('description');

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('archive_items');
};
