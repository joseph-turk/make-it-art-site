import moment from 'moment'

export const formatTime = time => {
  return moment(time, 'HH:mm').format('hh:mm A')
}

export const formatDate = date => {
  return moment(date, 'YYYY-MM-DD').format('dddd, D MMMM YYYY')
}
