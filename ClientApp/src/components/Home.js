import React from "react";
import './Home.css';
import AssetGroup from "./AssetGroup";
import AssetForm from "./AssetForm";
import { getAllAssets, putAsset, deleteAsset } from '../database/operations';
import { categories } from "../database/categories";

export function Home() {
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    async function fetchAssets() {
      try {
        let assets = await getAllAssets()
        setData(assets)
      } catch (error) {
        setData([])
      }
    }
    fetchAssets()
  }, [])

  /**
   * Persist the asset to the database and updates the component state
   * @param {String} name asset name
   * @param {Number} value asset value
   * @param {String} category asset category that it belongs to
   */
  const addAsset = async (name, value, category) => {
    await putAsset(name, value, category).then(() => {
      const newData = [...data, { name, value, category }]
      setData(newData)
    }).catch(() => {
      alert("Database error: Assest cannot be added")
    })
  };


  /**
   * Delete the asset record from the database and updates the component state
   * @param {Number} key asset identifier
   */
  const removeAsset = async key => {
    await deleteAsset(key).then(() => {
      const newData = [...data]
      newData.splice(key, 1)
      setData(newData)
    }).catch(() => {
      alert("Database error: Assest cannot be deleted")
    })
  };


  return (
    <div className="app">
      {categories.map((category, index) => (
        <AssetGroup
          key={index}
          index={index}
          category={category}
          assets={data.filter((asset, index) => {
            asset.originalIndex = index
            return asset.category === category
          })}
          removeAsset={removeAsset}
        />
      ))}
      <div className="list-header">
        <b>Total</b>
        <div> ${data.reduce((total, curValue) => total + curValue.value, 0)}</div>
      </div>
      <AssetForm
        categories={categories}
        addAsset={addAsset}
      />
    </div>
  );
}