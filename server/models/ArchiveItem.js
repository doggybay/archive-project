const { Model } = require('objection');

class ArchiveItem extends Model {
  static get tableName() {
    return 'archive_items'
  }

  static get relationMappings() {
    const Type = require('./Type')

    return {
      types: {
        relation: Model.HasOneRelation,
        modelClass: Type,
        join: {
          from: 'archive_items.type_id',
          to: 'types.id'
        }
      }
    };
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['user_id', 'type_id', 'make', 'model', 'price'],

      properties: {
        id: { type: 'integer' },
        user_id: { type: 'integer' },
        type_id: { type: 'integer' },
        make: { type: 'string', minLength: 1, maxLength: 255 },
        model: { type: 'string', minLength: 1, maxLength: 255 },
        serial_num: { type: 'string', minLength: 1, maxLength: 255 },
        price: { type: 'integer' },
        description: { type: 'text' },
      }
    }
  }
}