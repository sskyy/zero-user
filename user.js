var config = require('./config')


var userModule = {
  deps : ['model','request','rest','bus'],
  models : require('./models'),
  listen : require('./listen')(config),
  //this will allow app global config overwrite
  config : config,
  route : {
    "/user/count" : function( req, res, next){
      userModule.dep.model.models['user'].count().then(function(total){
        res.json({count:total})
      })
    },
    "*" : {
      "function" : function initSession(req,res,next){
        req.session.user = req.session.user || {}
        next()
      },
      "order" : {first:true}
    }

  }
}

module.exports = userModule

