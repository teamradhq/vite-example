declare namespace Props {
  interface Button {
    text: string,
    type?: 'button' | 'submit',
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
  }
}
