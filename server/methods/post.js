Meteor.methods({
    createNewPost: function(body){
        var user = Meteor.users.findOne({_id: this.userId});
        //console.log("user", user)
        if(user){
            Post.insert({body: body, createdAt: new Date(), userId: this.userId, username: user.username})
        }
    },
    getPosts: function(limit){
        if(limit == null){
            limit = 5;
        }
        return Post.find({}, {sort:{createdAt: -1}, limit: limit}).fetch()
    },
    incLIke:function(id){
      Post.update({_id:id}, {$inc:{_likeCount: 1}})  
    }
})