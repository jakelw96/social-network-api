const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: []

  },
  {
      toJSON: {
          virtuals: true,
          getters: true
      },
      id: false
  }
);

// get length of friend array
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
});

// create user model 
const User = model('User', UserSchema);

module.exports = User;