export function remove({ request, response, database }) {
  const { id } = request.params

  database.remove("tickets", id)

  return response.end(id)
}