import OpenAI from 'openai';
import config from 'config'
import fs from 'fs'

const openai0 = new OpenAI({
  apiKey: config.get('OPENAI_API_KEY'), // defaults to process.env["OPENAI_API_KEY"]
});

const path = 'E:\\Study\\ChatGPT\\gpt-tg\\voices\\713277065.mp3'

class OpenAIApi {
  roles = {
    ASSISTANT: 'assistant',
    USER: 'user',
    SYSTEM: 'system',
  }
  constructor(apiKey) {
		this.openai = new OpenAI({
			apiKey: apiKey, // defaults to process.env["OPENAI_API_KEY"]
		});  
	}

	async chat(messages) {
  
	}
  async transcription(filepath) {
		try {
			console.log(filepath)
			
			const response = await openai0.audio.transcriptions.create({
				model: 'whisper-1',
				file: fs.createReadStream(filepath),
			});
			console.log(response.text)
			return response.data
		} catch (e) {
			console.log('Error while transcription', e.message)
		}
	}
}
export const openai = new OpenAIApi(config.get('OPENAI_API_KEY'))

/*

async function transcription(filepath) {
	try {
		console.log(filepath)
		
		const response = await openai0.audio.transcriptions.create({
			model: 'whisper-1',
			file: fs.createReadStream(filepath),
		});
		console.log(response.text)
		return response.data
	} catch (e) {
		console.log('Error while transcription', e.message)
	}
}	

transcription(path); 
*/