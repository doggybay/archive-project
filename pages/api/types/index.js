import connectionHandler from "../../../server/db/connection-handler";
import Type from '../../../server/models/Type';

const handler = async (req, res) => {
  if (req.method === "GET") {
    const types = await Type.query();
    res.json(types);
  }  else {
    res.status(404).end('does not exist')
  }
};

export default connectionHandler()(handler);