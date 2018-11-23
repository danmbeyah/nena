'use strict'

const config    = require('../../config/config.js')
const voiceHelper = require('../helpers/voice_helper')

const call = (req, res) => {
	try {
		console.log(req)
		const ret = voiceHelper.call(req)
		res.status(200).send(ret)
	} catch (err){
		res.status(400).send(err)
	}
}

const callCenter = (req, res) => {
	const response = voiceHelper.callCenter(req)
	res.set('Content-Type: text/plain');
    res.send(response);
}

module.exports = {
	callCenter,
	call
}
