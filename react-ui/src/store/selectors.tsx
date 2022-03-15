import {createSelector} from 'reselect';


const baseActive = (state:any) => state.active;
const baseQueue = (state:any) => state.queue;

export const selectActiveTitle = createSelector(baseActive, ({ title }) => title);
export const selectActiveRule = createSelector(baseActive, ({ rule }) => rule);
export const selectActiveBar = createSelector(baseActive, ({ bar }) => bar);
export const selectActiveImageUrl = createSelector(baseActive, ({ imageUrl }) => imageUrl);
export const selectCardQueue = createSelector(baseQueue, (queue) => queue);
