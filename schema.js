const { buildSchema } = require("graphql")

const schema = buildSchema(`
  type Biodata {
    nama: String
    alamat: String
  }

  input BiodataInput {
    nama: String!
    alamat: String!
  }

  type Query {
    getBiodata: [Biodata]
    getBiodataByIndex(index: Int!): Biodata
  }

  type Mutation {
    createBiodata(biodata: BiodataInput!): Biodata
    updateBiodata(index: Int!, biodata: BiodataInput!): Biodata
    deleteBiodata(index: Int!): Biodata
  }
`)

module.exports = schema