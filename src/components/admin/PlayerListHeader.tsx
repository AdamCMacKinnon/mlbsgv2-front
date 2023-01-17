import styled from 'styled-components';

import PlayerListColumnHeader from './PlayerListColumnHeader';

export default function PlayerListHeader(props: any) {
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

export const TableHeaderStyle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0;
  margin: 0;
`;
