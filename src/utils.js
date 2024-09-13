export const isJsongString = (data) => {
    try {
        JSON.parse(data)
    } catch (error) {
        return false
    }
    return true
}