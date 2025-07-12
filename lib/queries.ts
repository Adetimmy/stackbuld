import { useQuery } from "@tanstack/react-query"

const fetchProduct = () => {
    return (
        useQuery({
            queryKey:['products'],
            queryFn: 
        })
    )
}