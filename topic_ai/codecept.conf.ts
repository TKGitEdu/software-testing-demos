require('dotenv').config();
const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'topic_ai',
  ai: {
  request: async messages => {
    const Groq = require('groq-sdk')

    const client = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    })

    const chatCompletion = await client.chat.completions.create({
      messages,
      model: 'deepseek-r1-distill-llama-70b',
    })
    return chatCompletion.choices[0]?.message?.content || ''
  }
}
}