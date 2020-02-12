
exports.up = function(knex) {
  return knex.schema.createTable('user_insurance', table => {
    table.increments();
    table.integer('user_id').notNullable();
    table.integer('insurance_company_id').references('insurance_company.id').notNullable().onDelete('CASCADE');
    table.string('policy_num');
    table.string('policy_type');
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_insurance');
};
