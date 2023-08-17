const { Contact } = require("../../models/contacts");

const removeById = async (req, res, next) => {
    const { id } = req.params;
    const result = await Contact.findByIdAndRemove(id);
    res.json({
        status: "success",
        code: 200,
        message: "contact deleted",
        data: { result },
    });
};

module.exports = removeById;