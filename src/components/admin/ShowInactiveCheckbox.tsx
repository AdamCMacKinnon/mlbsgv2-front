const ShowInactiveCheckbox = (props: any) => {
  const { showInactive, setShowInactive} = props;
  return (
    <div>
      <label>Show Inactive</label>
      <input
        type="checkbox"
        checked={showInactive}
        onChange={e => setShowInactive(!showInactive)}
      />
    </div>
  )
}

export default ShowInactiveCheckbox;