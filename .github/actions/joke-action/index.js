const core = require('@actions/core');
const request = require('request-promise');

async function run() {
  try {
    const res = await request('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' },
      json: true
    });

    core.setOutput('joke', res.joke);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
