const username = "gann4life"

const CurrentUser = () => username
const SetCurrentUser = (newUsername) => username = newUsername

// Fetch projects from CodersRank
const FetchProjects = async() => {
    const data = await FetchJson(`https://api.codersrank.io/v2/users/${username}/projects?get_by=username`)
    return data.projects
}

// Returns a JSON object from URL
const FetchJson = async(url) => {
    const res = await fetch(url)
    return await res.json()
}

export default FetchProjects