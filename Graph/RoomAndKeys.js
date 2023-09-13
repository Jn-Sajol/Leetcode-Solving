var canVisitAllRooms = function (rooms) {
    const len = rooms.length
    const visited = Array(len)
    let visitedCount = 0

    function dfs(idx) {
        visited[idx] = true
        visitedCount++
        return rooms[idx].some(idx => !visited[idx] && dfs(idx))
    }

    dfs(0)

    return visitedCount === len
};
canVisitAllRooms()