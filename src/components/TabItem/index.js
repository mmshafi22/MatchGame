import './index.css'

const TabItem = props => {
  const {tabDetails, isSelected, onSelectTab} = props
  const {tabId, displayText} = tabDetails
  const color = isSelected ? 'btn-active' : ''

  const onSelect = () => {
    onSelectTab(tabId)
  }

  return (
    <li className="tab-item">
      <button type="button" onClick={onSelect} className={`btn-tab ${color}`}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
