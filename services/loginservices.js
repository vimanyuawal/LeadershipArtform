var mysql = require("./sqlconnect.js");
var ExecutiveCoach = require('../model/executiveCoach');
var Executive = require('../model/executive');
var currentExecutive;

module.exports = {

	getExecutiveAuthent: async function(email, password) {
	    const [rows, fields] = await mysql.connect.execute("SELECT * FROM executives WHERE email = ?", [email.toLowerCase()]);
	    if (rows != null) {
	      if (rows.length != 0) {
	        const currExecutive = rows.map(x => new Executive.Executive(x));
	        currentExecutive = currExecutive[0];
					var pw = currentExecutive.pass;
					if (pw == password) {
						return currExecutive[0];
					}
					else console.log("PASSWORD DOESNT MATCH");
	      }
	    }
	    return null;
	},

	getCoachAuthent: async function(email, password) {
	    const [rows, fields] = await mysql.connect.execute("SELECT * FROM coaches WHERE email = ?", [email.toLowerCase()]);
	    if (rows != null) {		// textbox not empty
	      if (rows.length != 0) {		// email entry found
	        const currCoach = rows.map(x => new ExecutiveCoach.ExecutiveCoach(x));
	        currentCoach = currCoach[0];
					var pw = currentCoach.pass;
					if (pw == password) {		// password entered = password in db
						return currCoach[0];
					}
					else console.log("PASSWORD DOESNT MATCH");
	      }
	    }
	    return null;
	},

	getClients: async function(user) {
	    var id = user.coach_id_val;
	    console.log("ID HERE: " + id);
	    var getStatement = "SELECT * FROM executives WHERE coach_id = IFNULL(" + user.coach_id_val + ", coach_id)";
	    const [rows, fields] = await mysql.connect.execute(getStatement);
	    const currCoach = rows.map(x => new Executive.Executive(x));
	    return currCoach;
  	},

	getExecutiveCoach: async function(executive) {
		var getStatement = "SELECT * FROM coaches WHERE coach_id = IFNULL(" + executive.coachID + ", coach_id)";
	    const [rows, fields] = await mysql.connect.execute(getStatement);
	    const currCoach = rows.map(x => new ExecutiveCoach.ExecutiveCoach(x));
	    return currCoach[0];
	}
};
