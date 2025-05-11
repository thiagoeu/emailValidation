import swaggerAutogen from "swagger-autogen";

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./routes/email.route.js"];

const doc = {
  info: {
    title: "Plataforma de envio de Email",
    version: "1.0.0",
    description:
      "Esta API foi desenvolvida para lidar com demandas de envio de email",
  },
  host: "localhost:3000",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Usuario",
      description: "Endpoints",
    },
  ],
  components: {
    schemas: {
      User: {
        type: "object",
        required: ["name", "email"],
        properties: {
          name: {
            type: "string",
            description: "The name of the user",
          },
          email: {
            type: "string",
            description: "The email of the user",
          },
        },
      },
    },
  },
};

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc).then(
  async () => {
    const appModule = await import("./index.js");
  }
);
