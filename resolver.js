const biodata = [
  {
    nama: "Budi",
    alamat: "Probolinggo"
  },
  {
    nama: "Yanto",
    alamat: "Malang"
  }
]

const resolver = {
  getBiodata: function () {
    return biodata
  },

  getBiodataByIndex: function (args) {
    return biodata[args.index]
  },

  createBiodata: function (args) {
    biodata.push(args.biodata)
    return args.biodata
  },

  updateBiodata: function (args) {
    biodata[args.index] = args.biodata
    return args.biodata
  },

  deleteBiodata: function (args) {
    biodata.splice(args.index, 1)
    return null
  }
}

module.exports = resolver