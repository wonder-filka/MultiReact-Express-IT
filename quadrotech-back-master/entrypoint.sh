#!/bin/sh

# Выполнить миграции базы данных
npx sequelize-cli db:migrate

# Выполнить сидирование базы данных
# npx sequelize-cli db:seed:all

# Запустить сервер
yarn run start:backend