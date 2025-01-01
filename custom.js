import pino from "pino";

const transport = pino.transport({
  targets: [
    {
      target: "pino/file",
      options: { destination: "./logs/app.log" }, 
    },
  ],
});

const logger = pino(transport);

logger.info("Logging to a specific file via transport");
logger.error("Another log example");
logger.error("Error");
logger.error("Error");
