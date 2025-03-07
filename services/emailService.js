var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

module.exports = {
    isValidPassword: function (password) {
        return passwordRegex.test(password);
    },

    isValidEmail: function (email) {
        // Retourne un boulean ture ou false 
       return emailRegex.test(email); 
    }
};
