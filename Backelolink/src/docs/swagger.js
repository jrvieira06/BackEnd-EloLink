import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API EloLink',
      version: '1.0.0',
      description: 'Documentação da API REST do EloLink (Porto Digital - PI)',
    },
    servers: [
      {
        url: '/',
        description: 'Servidor Atual',
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;