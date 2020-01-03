Meteor.publish('messages', function (conversationId, limit) {
  if(limit == null){
      limit = 20
  }
  return Messages.find({ conversationId: conversationId }, {
    sort: {createdAt: -1},
    limit: limit
  });
});