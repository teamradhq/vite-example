import { PropsWithChildren } from 'react';
import { uuid } from '@src/services/uuid';

import './Table.css';

export function Cell<CellType>(props: Props.Ui.Cell<CellType>) {

  return (
    <td data-testid="ui-table-cell">
      {props.value}
    </td>
  );
}

export function Row<DataType>(props: Props.Ui.Row<DataType>) {

  return (
    <tr data-testid="ui-table-row">{
      Object.values(props.data).map((value) => (
        <Cell key={uuid()} value={value} />
      ))
    }</tr>
  );
}


export function Table<DataType>(
  props: PropsWithChildren<Props.Ui.Table<DataType>>,
) {
  const { data } = props;

  return (
    <table className="ui-table" data-testid="ui-table">
      <tbody>
        {data.map((row) => (
          <Row key={uuid()} data={row} />
        ))}
      </tbody>
    </table>
  );
}
