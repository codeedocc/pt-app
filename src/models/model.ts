export interface AccessResponse {
  result: Result
  accessToken: string
}

export interface Result {
  status: number
  message: string
  messageDev: null
  codeResult: number
  duration: number
  idLog: string
}

export interface BonusResponse {
  resultOperation: ResultOperation
  data: Data
}

export interface Data {
  typeBonusName: string
  currentQuantity: number
  forBurningQuantity: number
  dateBurning: Date
}

export interface ResultOperation {
  status: number
  message: string
  messageDev: null
  codeResult: number
  duration: number
  idLog: string
}
