# Nena API

> Nena REST API

# Getting Started

1. Install your dependencies

    ```
    npm install
    ```

2. Start your app

    ```
    swagger project start
    swagger project start -m              # Start project in mock mode
    ```

# Run Tests
```
$ npm test
```


# Scaffolding

```
$ npm install -g sequelize-cli            # Install Sequelize CLI
$ sequelize model:generate --name ModelName --attributes firstName:string,lastName:string,email:string   # Create new model
$ sequelize migration:create --name name_of_new_blank_migration   # Create new migration
$ sequelize db:migrate                    # Run migrations
$ sequelize db:migrate:undo               # Undo migrations
$ sequelize db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js   # Undo migrations

```


# Documentation
```
http://yourdomain/docs                    # Access documentation via browser
$ swagger project edit                    # Open documentation editor in browser
```

# Changelog

__0.0.1__

- Initial release
