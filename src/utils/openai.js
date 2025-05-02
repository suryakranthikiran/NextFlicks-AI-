import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: import.meta.env.OPEN_AI_KEY,
    dangerouslyAllowBrowser: true
});

export default openai;



