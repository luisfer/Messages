
function randomDelayPromise(data) {
  const delay = Math.floor(Math.random() * 100) + 100;
  return new Promise(resolve => setTimeout(() => resolve(data), delay));
}

export function getMessages() {
  return randomDelayPromise(require('./messages.json'));
}

export function getMembers() {
  return randomDelayPromise(require('./members.json'));
}
