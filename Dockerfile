FROM node:18-alpine3.15
WORKDIR /app
COPY *.json /app/ 
RUN npm install
# ARG NODE_ENV 
# # RUN npm install
#  RUN  if [ "$NODE_ENV" = "development" ]; \
#            then  npm install; \
#            else  npm install --only-production; \
#          fi
  
COPY . ./
EXPOSE 4200
CMD [ "ng","serve" ]

# nginx server
# FROM nginx
# COPY . /usr/share/nginx/html


