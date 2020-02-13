const { Model } = require('objection');

class Type extends Model {
  static get tableName() {
    return 'types'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [''],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 }
      }
    }
  };
}

module.exports = Type