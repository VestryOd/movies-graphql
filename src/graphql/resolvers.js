const maksym = {
  name: "Maksym",
  age: 40,
  gender: "male"
}

export const resolvers = {
  Query: {
    person: () => maksym
  }
}
