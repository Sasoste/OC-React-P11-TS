import { ReactNode, createContext, useContext, useState, useEffect } from "react"

type LogementProviderProps = {
    children: ReactNode
}

export type Logement = {
    id: string;
    title: string;
    cover: string;
    pictures: string[];
    description: string;
    host: {
        name: string;
        picture: string;
    };
    rating: string;
    location: string;
    equipments: string[];
    tags: string[];
}

// definition de ce qu'on va dispatch à l'intérieur de notre provider (dans le sandwich)
type LogementContextType = {
    logements: Logement[]
}

// valeur initial du context
const LogementContext = createContext<LogementContextType>({
    logements: [],
})

const LogementProvider = ({ children }: LogementProviderProps) => {
    const [logements, setLogements] = useState<Logement[]>([])
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch('/src/assets/logements.json')
            .then((data) => {
                if (!data.ok) {
                    throw new Error('Erreur lors du chargement des données');
                }
                return data.json()
            })
            .then((result) => {
                setLogements(result)
            })
            .catch((error) => {
                setError(error.message);
                console.log("Erreur lors de la récupération des données: ", error);
            })
    }, [])

    if (error) return <div>{error}</div>


    return (
        <LogementContext.Provider
            value={{ logements, /*toto*/ }}>
            {children}
        </LogementContext.Provider>
    )

}

export default LogementProvider


// hook pour récupérer le context
export const useLogements = () => {
    const context = useContext(LogementContext)
    if (!context) {
        throw new Error("useLogements doit être utilisé à l'interieur du LogementProvider")
    }
    return context
}