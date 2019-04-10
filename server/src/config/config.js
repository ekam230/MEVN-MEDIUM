module.exports = {
    port: 8081,
    dbURL: 'mongodb://user:pass@server:port/base',
    dbOptions: {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
}