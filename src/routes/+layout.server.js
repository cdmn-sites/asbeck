export async function load() {
  const API_KEY = process.env.API_KEY || import.meta.env.VITE_API_KEY

  const res = await fetch('API_URL/api/projects', {
    headers: {
      'Authorization': 'Bearer ' + API_KEY
    }
  }).then(res => res.json())

  return {
    projects: res.projects 
  }
}