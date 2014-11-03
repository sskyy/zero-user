module.exports = [{
    identity: 'user',
    connection: 'localDisk',
    attributes: {
      name: {
        type : 'string',
        unique : true
      },
      password : {
        type : 'string'
      },
      email : {
        type : 'email',
        unique: true
      }
    },
    security : {
      password: ['encryptPermanent']
    },
    rest : true
  }]
