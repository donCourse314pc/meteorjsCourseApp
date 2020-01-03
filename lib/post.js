import SimpleSchema from 'simpl-schema';

Post = new Mongo.Collection('posts')

Post.attachSchema(
    new SimpleSchema({
        body:{
            type: String,
        },
        createdAt:{
            type: Date
        },
        userId:{
            type: String,
        },
        username:{
            type:String,
        },
        _likeCount:{
            type: Number,
            optional: true,
            defaultValue: 0
        },
        _commentCount:{
            type: Number,
            optional: true,
            defaultValue: 0
        }
    })
)