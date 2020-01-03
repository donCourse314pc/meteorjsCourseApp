Meteor.methods({
    registerUser:function(email, username, password){
        var username = username.replace(/\s/g,'');
        var username = username.replace(/\s/g,'');  
        var email = email.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
        var email = email.replace(/\s/g,'');    
        
		var userData = {
			email: email,
			password: password,
			username: username,
		}      
		
		var userId = Accounts.createUser(userData)
		return userId;
    },
    editProfile:function(userdetails){
        if(userdetails){
            Meteor.users.update({_id:this.userId}, 
                {$set:
                    {
                        name: userdetails.Name, 
                        description: userdetails.description,
                        url: userdetails.website
                    }
                    
                })
            var user =  Meteor.users.findOne({_id:this.userId})
            if(user){
                var object = {
                    name: user.name,
                    description: user.description,
                    url: user.url
                }
                return object;
            }
        }
    },
    getUserObject: function(){
        var user =  Meteor.users.findOne({_id:this.userId})
        if(user){
            var object = {
                    name: user.name,
                    description: user. description,
                    url: user.url
            }
            return object;
        }        
    },
    getUserId: function(username){
        return Meteor.users.findOne({username: username})._id;
    }
})