module.exports = {
  apps: [{
    name: 'influenz-api',
    script: 'server.js',
    env_production: {
      NODE_ENV: 'production',
      PORT: 3001,
      SMTP_HOST: 'smtpout.secureserver.net',
      SMTP_PORT: 465,
      FROM_NAME: 'Influenz',
      REPLY_TO: 'partnerships@influenz.co.in'
    }
  }]
}
