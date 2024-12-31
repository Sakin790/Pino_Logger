import pino from "pino";

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
});
logger.info("Starting pino");
logger.error("Failed to start pino");
logger.fatal("fatal");
logger.warn("Worning");
logger.debug("deBUG");
