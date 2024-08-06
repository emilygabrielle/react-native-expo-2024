import { FontProvider } from "./font";

export function AppProvider({ children }) {
    return <FontProvider>{children}</FontProvider>
}