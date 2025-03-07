
module.exports = {
  getAllUsers: async function (req, res) {
    return res.status(200).json({ message: "getAllUsers" });
  },
  updateUsers: async function(req, res) {

    return res.status(200).json(
      { 
        error :"false",
        message: "updateUsers" 
      }
    
    );
  },
  infoUsers: async function (req, res) {
    return res.status(200).json(
      { 
        error :"false",
        message: "infoUsers" 
      }
    
    );
  },
  deleteUsers: async function (req, res) {
    return res.status(200).json(
      { 
        error :"false",
        message: "deleteUsers" 
      }
    
    );
  },

};
