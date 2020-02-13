const { Model } = require('objection');


class UserInsurance extends Model {
  static get tableName() {
    return 'user_insurances'
  }

  static get relationMappings() {
    const InsuranceCompany = require('./InsuranceCompany');

    return {
      insurance_companys: {
        relation: Model.HasOneRelation,
        modelClass: InsuranceCompany,
        join: {
          from: "user_insurance.insurance_company_id",
          to: "insurance_companys.id"
        }
      }
    };

  } 

  static get jsonSchema() {
    return {
      type: "object",
      required: ["user_id", "insurance_company_id"],

      properties: {
        id: { type: 'integer' },
        user_id: { type: 'integer', minLength: 1, maxLength: 255 },
        insurance_company_id: { type: 'integer', minLength: 1, maxLength: 255 },
        policy_num: { type: 'string', minLength: 1, maxLength: 255 },
        policy_type: { type: 'string', minLength: 1, maxLength: 255 }
      }
    };
  };
}

module.exports = UserInsurance