# base image
FROM node:20

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
#ENV PATH /usr/src/app/node_modules/.bin:$PATH

# add app
COPY . /usr/src/app

#RUN npm config set registry https://registry.npmjs.org/
#RUN npm install
#RUN npm install -g @angular/cli@13.3.0

EXPOSE 4200
# END
