FROM node

ENV NPM_CONFIG_LOGLEVEL warn
ARG app_env
ENV NODE_ENV $app_env

RUN mkdir -p /api
WORKDIR /api
COPY ./ ./

RUN npm install

# Install pm2 *globally* so we can run our application
RUN npm install pm2 -g

# EXPOSE the port
EXPOSE 9999

CMD ["pm2","start", "pm2process.json", "--no-daemon"]
# the --no-daemon is a minor workaround to prevent the docker container from thinking pm2 has stopped running and ending itself

# Refer Commands
# docker build -t kashishgupta1990/hapiapitest .
# docker run --name "hapiapi" -p 9999:9999 kashishgupta1990/hapiapitest (Test-1)
# docker run -d --name "hapiapi" -p 9999:9999  kashishgupta1990/hapiapitest (Test-2)
# docker exec -it hapiapi /bin/bash