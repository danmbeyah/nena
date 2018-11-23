const axios = require('axios')
const options = {
	apiKey: process.env.AT_API_KEY,
    username: process.env.AT_USERNAME,
}
const AfricasTalking = require('africastalking')(options)
const voice = AfricasTalking.VOICE

const call =  (req) => {
	voice.call({
		callFrom: process.env.VIRTUAL_PHONE_NUMBER,
		callTo: '+254726306316'
	})
	.then(callData => {
		// persist call Info
		return callData
	})
	.catch(function(error) {
		return error
	})
}

const callCenter = (req) =>{
	// Persist call info

	// Get available counsellors
    console.log(req.swagger.params)
	const text = 'Thank you for calling the Gender Based Violence Support call center. Your call is being transferred to a counsellor who will attend to you shortly. Please hold'
	const response = '<?xml version="1.0" encoding="UTF-8"?><Response><Say>' 
		+ text 
		+ '</Say><Dial phoneNumbers="+254726306316" ringbackTone="http://smartag.co.ke/Sonata-pathetique-2nd-movement.mp3" record="false" sequential="true"/></Response>'
	
	return response
}

module.exports = {
	call,
	callCenter
}