import _ from 'lodash';
import { getMessages, getMembers } from './data';

export default function getChatLog() {

  return Promise.resolve(getMessages());
};
