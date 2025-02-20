/* eslint-disable @typescript-eslint/no-explicit-any */
export type IErrors = Record<string, string[]> | null

export type IFormResponseErrors = {
  message?: string
  errors?: IErrors
  status?: number
}

export type IBaseAction = { isError: boolean; isSuccess: boolean; data: any; errors: IErrors }
