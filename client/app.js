//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')
const utils = require('./utils/util.js')

App({
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)
    },
    globalData: { 
      categoryChanged: true
    },

    cacheSubscibe: [],
    config,
    utils
})