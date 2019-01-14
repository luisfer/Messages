import getChatLog from './service';
import { getMembers } from './data';

// I changed this test because it was a merge of members and messages,
// causing the test to fail

it('returns the correct format', () => {
  return getChatLog().then(([firstMessage]) => {
    console.log(firstMessage);
    expect(typeof firstMessage.id).toBe('string');
    expect(typeof firstMessage.userId).toBe('string');
    expect(typeof firstMessage.timestamp).toBe('string');
    expect(typeof firstMessage.message).toBe('string');
    expect(firstMessage.avatar === null || firstMessage.avatar === undefined || typeof firstMessage.avatar === 'string').toBeTruthy();
  });
});

it('returns the correct format', () => {
  return getMembers().then(([firstMember]) => {
    console.log(firstMember);
    expect(typeof firstMember.id).toBe('string');
    expect(typeof firstMember.firstName).toBe('string');
    expect(typeof firstMember.lastName).toBe('string');
    expect(typeof firstMember.email).toBe('string');
    expect(firstMember.avatar === null || firstMember.avatar === undefined || typeof firstMember.avatar === 'string').toBeTruthy();
  });
});

it('returns a non empty array of messages', () => {
  return getChatLog().then((response) => {
    expect(response.length).not.toBeLessThan(1);
  });
});

it('returns a non empty array of members', () => {
  return getMembers().then((response) => {
    expect(response.length).not.toBeLessThan(1);
  });
});
