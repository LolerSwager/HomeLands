import create from "zustand"
import { persist } from "zustand/middleware"

export const useLoginStore = create(
    persist(
        (set) => {
            return {
                loggedIn: false,
                username: "",
                user: "",
                setLoggedIn: (loggedIn, username, user) => set((state) => ({ ...state, loggedIn, username, user })),
                setLogOut: () =>
                    set((state) => ({
                        ...state,
                        loggedIn: false,
                        username: "",
                        user: "",
                    })),
            }
        },
        { name: "user" /* , getStorage= () => localStorage()  */ }
    )
)
