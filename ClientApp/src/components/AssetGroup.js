import Asset from './Asset';
import './Home.css';

function AssetGroup(props) {
  return (
    <div className="group">
      <div className="list-header">
        {props.category}
        <div data-testid="group-total">
          ${props.assets.reduce((total, curValue) => total + curValue.value, 0)}
        </div>
      </div>
      <div className="asset-list">
        {props.assets.map((item, index) => (
          <Asset
            key={index}
            index={item.originalIndex}
            name={item.name}
            value={item.value}
            removeAsset={props.removeAsset}
          />
        ))}
      </div>
    </div>
  );
}
export default AssetGroup;