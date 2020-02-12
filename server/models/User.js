const path = require('path');
const { Model } = require('objection');

class User extends Model {
  

  static get tableName() {
    return 'users';
  }

  static get relationMappings() {

    const Address = require('./Address');
    
    const UserInsurance = require('./UserInsurance');

    return {
      addresses: {
        relation: Model.HasManyRelation,
        modelClass: Address,
        join: {
          from: "users.id",
          to: "addresses.user_id"
        }
      },
      user_insurances: {
        relation: Model.HasOneRelation,
        modelClass: UserInsurance,
        join: {
          from: "users.id",
          to: "user_insurances.user_id"
        }
      }
    };
    
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['first_name', 'last_name', 'email'],

      properties: {
        id: { type: 'integer' },
        first_name: { type: 'string', minLength: 1, maxLength: 255 },
        last_name: { type: 'string', minLength: 1, maxLength: 255 },
        email: { type: 'string', minLength: 1, maxLength: 255 },
        phone: { type: 'string', minLength: 1, maxLength: 255 }
      }
    }
  };

}

module.exports = User;
