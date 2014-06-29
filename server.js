var connect = require('connect');

connect().use(connect.static('app'))
  .use(connect.directory('app')).listen(process.env.PORT || 8000)