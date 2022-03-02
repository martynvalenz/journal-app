export const getEntriesByTerm = (state) => (term = '') => {
  if(term.length === 0) return state.getEntriesByTerm

  return state.entries.filter(entry => entry.text.toLowerCase().includes(term.toLocaleLowerCase()))
}

export const getEntryById = (state) => (id = '') => {
  const entry = state.entries.find(obj => obj.id === id)
  if(!entry) return
  return {...entry}
}