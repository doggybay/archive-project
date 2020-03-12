const { Model } = require('objection')
const User = require('./User')

class Address extends Model {
  static get tableName() {
    return 'addresses'
  }

  static get relationMappings() {
  
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "Addresses.user_id",
          to: "users.id"
        }
      }
    }
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['user_id', 'st_address', 'city', 'state', 'zip_code'],

      properties: {
        id: { type: 'integer' },
        user_id: { type: 'integer' },
        st_address: { type: 'string' },
        opt_address: { type: 'string' },
        city: { type: 'string' },
        state: { type: 'string' },
        zip_code: { type: 'integer' }
      }
    }
  }

}

module.exports = Address