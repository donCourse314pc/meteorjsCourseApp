Meteor.methods({
    personlist: function(){
        return Meteor.users.find().fetch();
    },
    newConversation: function(body, userlist){
        var userlistarr= new Array();
        for(var i=0; i < userlist.length; i++){
            if(userlist[i]){
                userlistarr.push(userlist[i].username)
            }
        }
        var user = Meteor.users.findOne({_id: this.userId});
        if(user){     
            userlistarr.push(user.username)
            var conversationId = Conversations.insert({createdAt: new Date(), users: userlistarr});
            //console.log("conversationId", conversationId)

            Messages.insert({conversationId: conversationId, text: body,
                            createdAt: new Date(), userId:user._id, username: user.username})
            return conversationId;
        }

    },
    getConversations:function(){
        var user = Meteor.users.findOne({_id:this.userId})
        if(user){
            return Conversations.find({users: user.username}).fetch()
        }
    },
    newMessageInsert: function(conversationId, text){
        var user = Meteor.users.findOne({_id: this.userId});
        if(user){  
            Messages.insert({conversationId: conversationId, text: text,
                            createdAt: new Date(), userId:user._id, username: user.username})
        }
    }
})