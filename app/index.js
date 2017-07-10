const queryExecutor = require('./queryExecutor');
const bunyan = require('bunyan');
const log = bunyan.createLogger({name: "app/index.js"});

const query = "CREATE (m:person {name: 'John'})-[r:likes]->(n:person {name: 'Mary'}) return m,r,n"
queryExecutor(query, (err, results) => {
    log.info({results: results});
});