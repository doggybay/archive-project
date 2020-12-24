import { getDatabaseConnector } from './db-injector';
import { Model } from 'objection';

const connector = () => getDatabaseConnector();

export default (...args) => {
  return (fn) => async (req, res) => {
    
    const r = connector()
    console.log("connection-handler: ", r);
    // req.db = () => connector.getDatabaseConnector();

    await fn(req, res);

    // await req.db.destroy();

    return;
  };
};
