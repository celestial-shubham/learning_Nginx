FROM node:16

# Set the working directory in the container to /app
WORKDIR usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install any dependencies (including for production)
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem
COPY . .

# Inform Docker that the container is listening on port 7777 at runtime
EXPOSE 7777

# Define the command to run your app using CMD which defines your runtime
CMD ["npm","run", "start"]
