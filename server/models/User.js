const { Model } = require('objection');
const Address = require('./Address')

class User extends Model {
  // static get tableName() {
  //   return 'users';
  // }
  static tableName = 'users';

  static relationMappings = {

    address: {
      relation: Model.HasManyRelation,
      modelClass: Address,
      join: {
        from: 'users.id',
        to: 'address.user_id'
      }
    }
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
