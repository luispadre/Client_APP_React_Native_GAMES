import { useState } from 'react'

export function useModal() {
    const [modalShowing, setModalShowing] = useState(false)
    const [modalDisplay, setModalDisplay] = useState('')

    return {
        modalShowing,
        setModalShowing,
        modalDisplay,
        setModalDisplay
    }
}