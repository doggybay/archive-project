const { Model } = require('objection');


class InsuranceCompany extends Model {
  static get tableName() {
    return 'insurance_companys'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        phone: { type: 'string', minLength: 1, maxLength: 255 }
      }
    }
};
}

module.exports = InsuranceCompany