const { Contact } = require("../../models/contacts");

const getByid = async (req, res, next) => {
    const { id } = req.params;
    const result = await Contact.findById(id);
    res.json(result);
};

module.exports = getByid;