
export function displayFilter<DataType>(
  data: DataType,
  options: Props.Ui.DisplayFields<DataType> = {},
): Partial<DataType> {
  const hide: (keyof DataType)[] = options.hide || [];
  const show: (keyof DataType)[] = options.show || [];

  const isHiddenFields = !!hide.length;
  const isShownFields = !!show.length;

  if (!isHiddenFields && !isShownFields) {
    return data;
  }

  if (isHiddenFields && isShownFields) {
    throw new RangeError('Only pass show or hide fields');
  }

  const filtered = Object.entries(data).filter(([key]) => (
    (show.length && show.includes(key as keyof DataType))
    || (hide.length && !hide.includes(key as keyof DataType))
  ));

  return Object.fromEntries(filtered) as Partial<DataType>;
}
