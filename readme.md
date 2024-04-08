# NODEJS APIREST CON PRISMA y POPSTGRES

## Creando Proyecto

```bash
mkdir apirest-prisma
cd apirest-prisma

npm init -y
npm install prisma --save-dev
npx prisma init
```

## Configurar .env

```.env
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

## Crear modelo / schema

En archivo prisma/schema.prisma

## Ejecutar migración

```bash
npx prisma migrate dev
```

## Instalando dependemcias

```bash
npm i express 
npm i nodemon -D
```

## Configurando tipo de importación dependencias; import /export y script

```json
{
    ....
    "type": "module",
    ....
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "nodemon src/app.js"
    },
    ...
}
```

### Prisma Studio: Entorno Prisma con opciones crud

```bash
npx prisma studio
# direcciona a un localhost:5555
```
