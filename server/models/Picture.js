const { Model } = require('objection');

class Picture extends Model {
  static get tableName() {
    return 'pictures'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['pic', 'archive_item_id'],

      properties: {
        id: { type: 'integer' },
        archive_item_id: { type: 'integer' },
        pic: { type: 'string', minLength: 1, maxLength: 1000 }
      }
    }
  };
  
}

module.exports = Picture;