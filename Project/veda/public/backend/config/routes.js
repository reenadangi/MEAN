const dialogflow = require('dialogflow');
const uuid = require('uuid');
const sessionId = uuid.v4();
var users=require('../controller/users');

const multer = require('multer');
const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'

}
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + '-' + Date.now() + '.' + ext);
  }

});

module.exports = function (app) {
  //***********************Users routes**********************/

  app.post("/api/user/signup", (req, res, next) => {
    const user = req.body;
    console.log("***************Sign up******");
    users.create(req, res);
  });

  app.post("/api/user/login",(req,res) => {
      console.log("*********************",req.body)
      users.login(req,res);

  });

//***********************Bot routes**********************/
app.get('/api/send-msg', (req, res)=>{
  console.log("send msg to server")
  return;
  // pets.Show(req, res);
});

app.post('/api/send-msg',(req,res)=>{
  console.log("this is request" + req.body.MSG);
  runSample(req).then(data=>res.send({Reply:data}))
});

async function runSample(request,projectId = 'vedaspa-732f3') {
  const { queryInput, sessionId,email } = request.body;
  const sessionClient = new dialogflow.SessionsClient({
       keyFilename:"VedaSpa-0c07f1e32ffb.json"
         
      });
  const session = sessionClient.sessionPath('vedaspa-732f3', sessionId);
  const responses = await sessionClient.detectIntent({ session, queryInput,email});
  const result = responses[0].queryResult;
  console.log(result);
  return result.fulfillmentText;

}

}
