const { Model } = require('objection');

class Picture extends Model {
  static get tableName() {
    return 'pictures'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['pic'],

      properties: {
        id: { type: 'integer' },
        pic: { type: 'string', minLength: 1, maxLength: 1000 }
      }
    }
  }:
  
}