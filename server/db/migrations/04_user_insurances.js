
exports.up = function(knex) {
  return knex.schema.createTable('user_insurances', table => {
    table.increments();
    table.integer('user_id').notNullable().references('users.id').onDelete('CASCADE');
    table.integer('insurance_company_id').notNullable();
    table.string('policy_num');
    table.string('policy_type');
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_insurances');
};
