import { categories } from "./categories";
const initialData = [
  {
    name: "TV",
    value: 2000,
    category: categories[0]
  },
  {
    name: "PlayStation",
    value: 400,
    category: categories[0]
  },
  {
    name: "Stereo",
    value: 1600,
    category: categories[0]
  },
  {
    name: "Shirts",
    value: 1100,
    category: categories[1]
  },
  {
    name: "Jeans",
    value: 1100,
    category: categories[1]
  },
  {
    name: "Pots and Pans",
    value: 3000,
    category: categories[2]
  },
  {
    name: "Flatware",
    value: 500,
    category: categories[2]
  },
  {
    name: "Knife Set",
    value: 500,
    category: categories[2]
  },
  {
    name: "Misc",
    value: 1000,
    category: categories[2]
  }
];

/**
 * Returns all the asset records from the database
 * @returns {Array}
 */
export const getAllAssets = async () => {
  let data = localStorage.getItem("data")
  if (!data) {
    localStorage.setItem("data", JSON.stringify(initialData))
  }
  return JSON.parse(localStorage.getItem("data"))
}

/**
 * Add the asset record to the database
 * @param {String} name 
 * @param {Number} value 
 * @param {String} category 
 */
export const putAsset = async (name, value, category) => {
  let data = JSON.parse(localStorage.getItem("data"))
  if (data) {
    localStorage.setItem("data", JSON.stringify([...data, { name, value, category }]))
  } else {
    localStorage.setItem("data", JSON.stringify([{ name, value, category }]))
  }
}

/**
 * Find the record by its id and delete it from the database
 * @param {Number} id record's identifier
 */
export const deleteAsset = async (id) => {
  let data = JSON.parse(localStorage.getItem("data"))
  if (data) {
    data.splice(id, 1)
    localStorage.setItem("data", JSON.stringify(data))
  } else {
    throw Error("Asset with id=$" + id + "cannot be deleted")
  }
}
