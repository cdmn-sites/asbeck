export async function load() {
  const res = await fetch('API_URL/api/projects', {
    headers: {
      'Authorization': 'Bearer ' + process.env.API_KEY
    }
  }).then(res => res.json())

  return {
    projects: res.projects 
  }
}