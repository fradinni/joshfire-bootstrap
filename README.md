joshfire-bootstrap
==============

Joshfire Framework Bootstrap

#Requirements

  - Git
  - Node Version Manager ([https://github.com/creationix/nvm](https://github.com/creationix/nvm))
  - Heroku Toolbelt ([https://toolbelt.heroku.com/](https://toolbelt.heroku.com/))
  

##Installation

 - Checkout project
 - Execute npm install

##Configure ENVIRONMENT variables

NodeJS app requires some ENV vars to run.

###To set VARS on heroku instance :
  > $> heroku config:set VAR_NAME=value
  
###To set VAR in local ENV :
Create a '.env' file in project root directory and add ENV vars like :

    VAR1=value1
    VAR2=value2

Requiered ENV vars :
  - MONGO_URL=\<user>:\<password>@server.com/\<db_name>
  - NODE_ENV=production [ production | staging | development (by default) ]

## Run application on local server
> $> foreman start

## Deploy application on Heroku

Add Heroku's remote Git Repo :
> $> heroku git:remote -a \<app_name>

Push master branch on Heroku's Git Repo :
> $> git push heroku master


## Customize Heroku deployment

To deploy application, Heroku requires two main files :
 - package.json
 - Procfile

package.json

    {
        "name": "jnuine-backend",
        "version": "2.0.0",
        "dependencies": {
            "mongoose": "3.6.x",
            "express": "3.1.x",
            "underscore": "x"
        },
        "engines": {
            "node": "0.10.x",
            "npm": "1.2.x"
        }
    }

Procfile

    web: node server.js
