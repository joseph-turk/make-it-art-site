import moment from 'moment'

export const formatTime = (time) => {
  return moment(time, 'HH:mm').format('hh:mm A')
}
