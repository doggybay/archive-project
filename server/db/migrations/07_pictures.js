
exports.up = function(knex) {
  return knex.schema.createTable('pictures', table => {
    table.increments();
    table.integer('archive_item_id').notNullable().references('archive_items.id').onDelete('CASCADE');
    table.string('pic').notNullable();
  })
};

exports.down = function(knex) {
  knex.schema.dropTable('pictures')
};
