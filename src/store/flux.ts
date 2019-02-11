import Flux from '@nju33/flux';
import {initialState, State} from './state';

interface ActionPayload {
  initPage: {
    docName: string;
  };
}

const flux = new Flux<State, ActionPayload>(initialState);
flux.addAction('initPage', (state, payload) => {
  const nextState = {...state};
  nextState.docName = payload.docName;

  return nextState;
});

export {flux};