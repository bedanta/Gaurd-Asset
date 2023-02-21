import './Home.css';
function Asset(props) {
  return (
    <div className="asset-item">
      {props.name}
      <div>
        ${props.value}
        <button
          onClick={() => props.removeAsset(props.index)}>delete</button>
      </div>
    </div>
  );
}
export default Asset;
