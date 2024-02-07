module.exports = {
   apps: [
      {
         name: "StepOut",
         script: "app.js",
         watch: false,
         //ignore_watch: ['',],
         env: {
            PORT: 3500,
            
            DATABASE_URL: "postgresql://user:password@localhost:5432/myapp?schema=public",
         },
      },
   ],
};
