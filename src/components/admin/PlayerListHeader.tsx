//Components
import PlayerListColumnHeader from './PlayerListColumnHeader';



const PlayerListHeader = (props: any) => {
  const {
    sort,
    setSort,
    sortDirection,
    setSortDirection,
    handleSelectAll,
    isCheckAll
  } = props;

  const headerList = ['UserName', 'Diff', 'Pick']

  return (
    <thead>
      <tr>
        {headerList.map((item: any) => (
          <PlayerListColumnHeader
            key={item}
            sort={sort}
            setSort={setSort}
            sortDirection={sortDirection}
            setSortDirection={setSortDirection}
            header={item}
            option={item.toLowerCase()}
          />)
        )}
        
        <th>
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={isCheckAll}
          />
        </th>
      </tr>
    </thead>
  );
}

export default PlayerListHeader;