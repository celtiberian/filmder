import { CORE_ACTIONS } from "./actionNames"

export const setName = name => ({
  type: CORE_ACTIONS.SET_USERNAME,
  payloa: { name },
})
