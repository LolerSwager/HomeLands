import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useLoginStore = create(
    persist(
        (set) => {
            return {
                loggedIn: false,
                userinfo: "",
                setLoggedIn: (loggedIn, user) => set((state) => ({ ...state, loggedIn, userinfo: user })),
                setLogOut: () =>
                    set((state) => ({
                        ...state,
                        loggedIn: false,
                        userinfo: "",
                    })),
            }
        },
        { name: "token" /* , getStorage= () => localStorage()  */ }
    )
)
