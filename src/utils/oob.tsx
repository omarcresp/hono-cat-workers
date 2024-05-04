export function swapOOB(template: JSX.Element, oob: string) {
  return <div hx-swap-oob={oob}>{template}</div>
}
