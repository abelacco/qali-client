import axios from 'axios'

const URL_PUT = 'https://qali-api-production.up.railway.app/available-times'

export const updateSchedules = (schedules, id) => {
  const body = {
    doctorId: id,
    newAvailableTimes: [...schedules],
  }
  console.log({ body })
  return axios.put(URL_PUT, body)
}
