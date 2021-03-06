import SimpleSchema from 'simpl-schema';
var Schema = {};

Schema.avatarType = new SimpleSchema({
    imageUrl:{
       type: String,
       optional: true
    },
    date:{
        type: Date,
        optional: true,
    },
    fileName:{
        type: String,
        optional: true,
    },
    fileSize:{
        type: Number,
        optional: true
    }
})

Schema.User = new SimpleSchema({
    username: {
        type: String,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true
    },
    emails: {
        type: Array,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    // Use this registered_emails field if you are using splendido:meteor-accounts-emails-field / splendido:meteor-accounts-meld
    registered_emails: {
        type: Array,
        optional: true
    },
    'registered_emails.$': {
        type: Object,
        blackbox: true
    },
    createdAt: {
        type: Date
    },
    // Make sure this services field is in your schema if you're using any of the accounts packages
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },    
    name:{
        type: String,
        optional: true
    },
    description:{
        type: String,
        optional: true,
    },
    url: {
        type: String,
        optional: true,
    },
    avatar:{
        type: Schema.avatarType,
        optional: true
    },
    heartbeat: {
        type: Date,
        optional: true
    }    
})

Meteor.users.attachSchema(Schema.User);