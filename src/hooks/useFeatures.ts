import { useQuery } from "@tanstack/react-query"
import { getFeatures } from "../api"

export const useFeaturesQuery = () => {
    return useQuery({queryKey: ['features'], queryFn: getFeatures})
};