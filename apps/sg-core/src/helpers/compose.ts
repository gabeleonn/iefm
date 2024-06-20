export function composeHocs(hocs: any[], Component: any) {
  return hocs.reduce((acc, hoc) => hoc(acc), Component);
}
