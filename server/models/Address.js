const { Model } = require('objection')
const User = require('./User')

class Address extends Model {
  static get tableName() {
    return 'address'
  }

  static relationMappings = {
  
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: 'Address.user_id',
        to: 'users.id'
      }
    }
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['user_id', 'stAddress', 'city', 'state', 'zipCode'],

      properties: {
        id: { type: 'integer' },
        user_id: { type: 'integer' },
        stAddress: { type: 'string' },
        optAddress: { type: 'string' },
        city: { type: 'string' },
        state: { type: 'string' },
        zipCode: { type: 'integer' }
      }
    }
  }

}

module.exports = Address