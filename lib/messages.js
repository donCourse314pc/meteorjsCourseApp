import SimpleSchema from 'simpl-schema';

Conversations = new Mongo.Collection('conversations')

Conversations.attachSchema(
    new SimpleSchema({
        createdAt:{
            type: Date
        },
        users: { type: Array },
        'users.$': { type: String },
    })
)

Messages = new Mongo.Collection('messages')

Messages.attachSchema(
    new SimpleSchema({
        createdAt:{
            type: Date
        },
        conversationId:{
            type:String
        },
        userId:{
            type: String,
        },
        username: {
            type: String
        },
        text: {
            type: String,
        }
    })
)