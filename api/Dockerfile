#instala nodejs
FROM node:14-alpine
#directorio de trabajo
WORKDIR /app
#copia dependencia  ackage*.json 
COPY package*.json ./
#INSTALA DEPENDENCIAS
RUN npm install
# COPIA CONTENID DE API A DIRECTORIO APP EN EL DCKER
COPY . .
#indicamos el puerto donde va ejecutar
EXPOSE 3000
# iniciar aplicacion
CMD ["npm", "start"]

