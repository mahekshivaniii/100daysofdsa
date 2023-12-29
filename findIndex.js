let transaction = [1000,456,-789, 3000]

let withdrawalIndex = transaction.findIndex((n) => {
  return n<0
})