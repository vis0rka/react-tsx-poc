import makeData from "./makeData"

export interface TableResponse {
  uuid: string
  firstName: string
  lastName: string
  age: number
  visits: number
  progress: number
  status: string
  isActive: boolean
  email: string
}

export const tableApi = {
  apiGet: (status: number): Promise<Array<TableResponse>> =>
    new Promise((resolve, reject) => {
      if (status === 200) {
        setTimeout(() => {
          resolve(makeData(40))
        }, 1000)
      } else {
        setTimeout(() => {
          reject({ status })
        }, 1500)
      }
    }),
}
