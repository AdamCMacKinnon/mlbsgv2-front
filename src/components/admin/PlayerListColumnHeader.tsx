import styled from 'styled-components';

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function PlayerListColumnHeader(props: any) {
  const {
    sort,
    setSort,
    sortDirection,
    setSortDirection,
    header,
    option
  } = props;

  const handleSetSort = () => {
    setSort(option);
  };

  const handleSetSortDirection = () => {
    if (sortDirection === "asc") {
      setSortDirection("desc");
    }
    if (sortDirection === "desc") {
      setSortDirection("asc");
    }
  };

  return (
    <>
      {sort === option ? (
        <th onClick={handleSetSortDirection}>
          <TableHeaderStyle>
            <em>{header}</em>
            {sortDirection === "asc" ? (
              <span>
                <ArrowDropUpIcon />
              </span>
            ) : (
              <span>
                <ArrowDropDownIcon />
              </span>
            )}
          </TableHeaderStyle>
        </th>
      ) : (
        <th onClick={handleSetSort}>
          <TableHeaderStyle>{header}</TableHeaderStyle>
        </th>
      )}
    </>
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
