import connectionHandler from '../../../server/db/connection-handler';
import InsuranceCompany from '../../../server/models/InsuranceCompany';



const handler = async (req, res) => {
  
  if (req.method === "GET") {
    const InsComps = await InsuranceCompany.query();

    res.json(InsComps);

  } else if (req.method === "POST") {
    const newInsComp = { ...req.body };

    const addedInsComp = await InsuranceCompany.query()
      .insert(newInsComp)
      .returning("*");

    res.json(addedInsComp);
  }
}

export default connectionHandler()(handler);