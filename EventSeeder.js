//INSTALL : npm install google-spreadsheet
const GoogleSpreadsheet = require('google-spreadsheet');
const {promisify}=require('util');
var mongoose=require('mongoose'),
LocalUser = require('./models/LocalUser.js');
GoogleUser = require('./models/GoogleUser.js');

//CONNECTION
mongoose.connect("mongodb://localhost:27017/tirutsava2020", {useNewUrlParser: true, useCreateIndex: true})
    .then(() => console.log('Database is Connected...'))
    .catch((err) => console.log(err));


const creds = require('./client_secret.json');

//FAQs Part.

function printQuery(event){
	console.log(event); //For Debugging purpose
}

async function accessSpreadsheet(eventId, worksheet ){
	const doc = new GoogleSpreadsheet('1sdOntCOMEJPGmdDKycHOBaC_-kqRyOQS6vkahJQKFAw');
	await promisify(doc.useServiceAccountAuth)(creds);
	const inf = await promisify(doc.getInfo)()
	console.log(inf.worksheets.length);
	var sheet=inf.worksheets[worksheet];
	const rows = await promisify(sheet.getRows)({
		offset:1
	});
	var detailsPresent = []
	//DELETING OLDER ENTRIES, BEFORE WRITING AFRESH.
	for(var i=rows.length;i>=0;i--){
		if(rows[i]){
			detailsPresent.push({
				Name: rows[i].name,
				Mail: rows[i].mail
			});
		}
	}
	
	//CREATING A NEW ROW:
	await LocalUser.find({registeredeventids: eventId},async function(err, users){
		users.forEach(async (user) =>{
			console.log("Printing inside Local");
			console.log(detailsPresent.length);
			var row={
				Name: user.name,
				Mail: user.email
			};
			if(!detailsPresent.some(r => r.Mail===row.Mail && r.Name===row.Name)){
				detailsPresent.push(row);
				await promisify(sheet.addRow)(row);
				console.log("l printed");
			}
			else {
				console.log("l not printed");
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
				console.log("printed");
			}
			else{
				console.log("not printed");
			}
                });
        });
	
	//console.log(detailsPresent);
	mongoose.connection.close();

}

accessSpreadsheet(25,1)
