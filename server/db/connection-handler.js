import { getDatabaseConnector } from "./db-injector";

const connector = getDatabaseConnector();

export default (...args) => {
  return (fn) => async (req, res) => {
    console.log("connection-handler: ", connector);
    // req.db = () => connector.getDatabaseConnector();

    await fn(req, res);

    // await req.db.destroy();

    return;
  };
};
