import SimpleSchema from 'simpl-schema';

Comments = new Mongo.Collection('comments')

Comments.attachSchema(
    new SimpleSchema({
        body:{
            type: String,
        },
        createdAt:{
            type: Date
        },
        postId:{
            type: String,
        },
        userId:{
            type: String,
        },
        username:{
            type:String,
        }        
    })
)