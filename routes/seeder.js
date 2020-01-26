const express = require('express');
const router = express.Router();
const GoogleSpreadsheet = require('google-spreadsheet');
const {promisify}=require('util');
const creds = require('../client_secret.json');

LocalUser = require('../models/LocalUser.js');
GoogleUser = require('../models/GoogleUser.js');

router.get('/updateGooglesheet/:eventId/:sheetId', async (req,res) => {
	const eventId = parseInt(req.params.eventId);
	const sheetId = parseInt(req.params.sheetId) - 1;
	//console.log(eventId, sheetId);
  	const doc = new GoogleSpreadsheet('1sdOntCOMEJPGmdDKycHOBaC_-kqRyOQS6vkahJQKFAw');
	await promisify(doc.useServiceAccountAuth)(creds);
	const inf = await promisify(doc.getInfo)()
	//console.log(inf.worksheets.length);
	var sheet=inf.worksheets[sheetId];
	const rows = await promisify(sheet.getRows)({
		offset:1
	});
	var detailsPresent = []
	//DELETING OLDER ENTRIES, BEFORE WRITING AFRESH.
	for(var i=rows.length;i>=0;i--){
		if(rows[i]){
			detailsPresent.push({
				Name: rows[i].name,
				Mail: rows[i].mail,
				Phone: rows[i].phone,
				College: rows[i].college,
				State: rows[i].state
			});
		}
	}

	//CREATING A NEW ROW:
	await LocalUser.find({registeredeventids: eventId},async function(err, users){
		users.forEach(async (user) =>{
			var row={
				Name: user.name,
				Mail: user.email,
				Phone: user.phonenum,
				College: user.college,
				State: user.state
			};
			if(!detailsPresent.some(r => r.Mail===row.Mail && r.Name===row.Name)){
				detailsPresent.push(row);
				await promisify(sheet.addRow)(row);

			}
			else {
			}
		});
	});
	await GoogleUser.find({registeredeventids: eventId},async function(err, users){
                users.forEach(async (user) =>{
                        var row={
                                Name: user.name,
                                Mail: user.email
                        };
			if(!detailsPresent.some(r => r.Mail === row.Mail && r.Name === row.Name)){
                        await promisify(sheet.addRow)(row);
			detailsPresent.push(row);
			}
			else{
			}
                });
        });
				res.send({msg: "Kindly close this tab, sorry for the inconvience"});
});

module.exports = router;
