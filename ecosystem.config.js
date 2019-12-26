module.exports = {
  apps: [
    {
      name: "MacWatcher 1.0.3",
      script: "src\\index.js",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        USER_EMAIL: "napoleao@duaspatrias.com.br",
        USER_PASSWORD: "123456",
        SUPPORT_EMAIL: "macwatcher.envio@gmail.com",
        SUPPORT_EMAIL_PASSWORD: "msft_2019_msft",
        CRYPTO:"mSfT_1123581321_mSfT",
        NODE_ENV: "production",
        FTP_HOST:'177.53.143.13',
        FTP_PORT:21,
        FTP_USER:'integracao',
        FTP_PASS:'@j19801980***',
        FTP_FOLDER_PATH:'/public_html/integracao_erp',
      },
      instances: 1,
      exec_mode: "fork"
    }
  ]
}