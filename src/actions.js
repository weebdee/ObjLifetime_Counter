const inc = () => ({type: 'INC'})
const dec = () => ({type: 'DEC'})
const rnd = () => ({type: 'RND', payload: Math.floor(Math.random() * (50 - 20) + 20)})

export {inc, dec, rnd}