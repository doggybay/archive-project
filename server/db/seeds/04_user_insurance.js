
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_insurance').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_insurance').insert([
        {
          user_id: 1,
          insurance_company_id: 7,
          policy_type: "renters",
          policy_num: "eiusmod5162"
        },
        {
          user_id: 2,
          insurance_company_id: 10,
          policy_type: "condo",
          policy_num: "cillum92997"
        },
        {
          user_id: 3,
          insurance_company_id: 7,
          policy_type: "condo",
          policy_num: "incididunt44003"
        },
        {
          user_id: 4,
          insurance_company_id: 9,
          policy_type: "homeowners",
          policy_num: "exercitation63762"
        },
        {
          user_id: 5,
          insurance_company_id: 11,
          policy_type: "homeowners",
          policy_num: "cupidatat5464"
        },
        {
          user_id: 6,
          insurance_company_id: 4,
          policy_type: "homeowners",
          policy_num: "ea51704"
        },
        {
          user_id: 7,
          insurance_company_id: 13,
          policy_type: "condo",
          policy_num: "eu44214"
        },
        {
          user_id: 8,
          insurance_company_id: 10,
          policy_type: "renters",
          policy_num: "occaecat40369"
        }
      ]);
    });
};
