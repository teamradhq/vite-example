export const newStore =(): State.Tags.Store => ({
  activeDialog: null,
  activeIndex: -1,
  data: [
    { name: '0', index: 0, key: '0', group: '' } as State.Tags.Tag,
    { name: '1', index: 1, key: '1', group: '' } as State.Tags.Tag,
    { name: '2', index: 2, key: '2', group: '' } as State.Tags.Tag,
    { name: '3', index: 3, key: '3', group: '' } as State.Tags.Tag,
  ],
  sort: 'name',
  sortDirection: 'asc',
});

export const store = newStore();
