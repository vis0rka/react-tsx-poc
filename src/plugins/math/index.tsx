import { createUnit, evaluate } from "mathjs"

createUnit("px")
createUnit("rem")

export const calc = (expression: string) => {
  return evaluate(expression)
    .toString()
    .replace(" ", "")
}
