
exports.up = function(knex) {
  return knex.schema.createTable('insurance_companys', table => {
    table.increments();
    table.string('name').notNullable();
    table.string('phone');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('insurance_companys');
};
