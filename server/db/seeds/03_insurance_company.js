
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('insurance_company').del()
    .then(function () {
      // Inserts seed entries
      return knex('insurance_company').insert([
        { name: "USAA", phone: "800-531-8722" },
        { name: "Lemonade", phone: "844-733-8666" },
        { name: "Farmers", phone: "800-435-7764" },
        { name: "Geico", phone: "800-207-7847" },
        { name: "Progressive", phone: "800-776-4737" },
        { name: "State Farm", phone: "800-782-8332" },
        { name: "Allstate", phone: "800-255-7828" },
        { name: "Liberty Mutual", phone: "844-525-2467" },
        { name: "MetLife", phone: "800-854-6011" },
        { name: "Nationwide", phone: "800-421-3535" },
        { name: "Travelers", phone: "800-252-4633" },
        {
          name: "American Family Insurance",
          phone: "800-692-6326"
        },
        { name: "AARP", phone: "800-695-5165" }
      ]);
    });
};
