export const fetchLecturers = async () => {
  const url = 'https://my-json-server.typicode.com/JustinHu8/courseCardMock/lecturers'
  const response = await fetch(url, {
    method: 'GET'
  })

  return response.json()
}