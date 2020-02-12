
exports.up = function(knex) {
  return knex.schema.createTable('insurance_company', table => {
    table.increments();
    table.string('name').notNullable();
    table.string('phone');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('insurance_company');
};
