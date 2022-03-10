import { PropsWithChildren } from 'react';
import { uuid } from '@src/services/uuid';


type Props<DataType> = PropsWithChildren<Props.Ui.Table<DataType>>
export function Table<DataType>(props: Props<DataType>) {
  const { data } = props;

  return (
    <table data-testid="ui-table">
      <tbody>
        {data.map((row) => (
          <tr key={`row-${uuid()}`}>
            {Object.entries(row).map(([key, cell]) => (
              <td  key={`cell-${uuid()}`}>
                {key} - {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
