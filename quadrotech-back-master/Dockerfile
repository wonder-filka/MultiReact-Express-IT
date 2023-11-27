FROM node:14

RUN mkdir -p /app

WORKDIR /app

COPY / ./

RUN npm install --save body-parser  cors express nodemailer sequelize mysql2 multer winston morgan fs bcrypt jsonwebtoken
RUN yarn
# RUN yarn sequelize db:migrate

EXPOSE 80
EXPOSE 8080
ENV PORT=80

CMD [ "yarn", "run", "start:backend" ]