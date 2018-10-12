export const getRegistrations = event => {
  return event.registrations
    ? event.registrations.filter(reg => !reg.is_wait_list)
    : []
}

export const getWaitList = event => {
  return event.registrations
    ? event.registrations.filter(reg => reg.is_wait_list)
    : []
}
