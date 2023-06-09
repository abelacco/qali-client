import axios from 'axios'

const URL = 'https://qali-api-production.up.railway.app/available-times/get'

const body = {
  doctorId: '648295e4f6134122d18ff2bd',
}

export const getAllHorarios = async () => {
  try {
    const { data } = await axios.post(URL, body)

    return { data }
  } catch (error) {
    console.error(error)
    return { error }
  }
}
