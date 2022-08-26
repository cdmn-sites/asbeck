export async function load() {
  const res = await fetch('SERVER_URL/api/projects', {
    headers: {
      'Authorization': 'Bearer eyJfcmFpbHMiOnsibWVzc2FnZSI6Ik1RPT0iLCJleHAiOm51bGwsInB1ciI6ImNvbXBhbnkifX0=--eb04f894c18271c393152f777d7fd5086e64c58bdaa5295fa2942dc9b9529a27'
    }
  }).then(res => res.json())

  return {
    projects: res.projects 
  }
}