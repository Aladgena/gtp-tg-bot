import  OpenAI  from 'openai'
import config from 'config'
import fs from 'fs'
import 'dotenv/config'

const openai0 = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

class OpenAIApi {
  roles = {
    ASSISTANT: 'assistant',
    USER: 'user',
    SYSTEM: 'system',
  }

	async chat(messages) {
		try {
			const response = await openai0.chat.completions.create({
				model: 'gpt-3.5-turbo',
				messages,
			})
			return response.choices[0].message
		} catch (e) {
			console.log('Error while gpt chat', e.message)
		}
	}
	
	async transcription(filepath) {
		try {
			const response = await openai0.audio.transcriptions.create({
				model: 'whisper-1',
				file: fs.createReadStream(filepath),
			});
			return response.text
		} catch (e) {
			console.log('Error while transcription', e.message)
		}
	}
}
export const openai = new OpenAIApi(process.env.OPENAI_API_KEY)