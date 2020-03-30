import { useState } from 'react'

export function useGameList() {
    const [gameList, setGameList] = useState(false)
    const [GameSelect, setGameSelects] = useState(null)
    return {
        gameList,
        setGameList,
        GameSelect,
        setGameSelects
    }
}