import { useQuery } from "@tanstack/react-query";
import { getBenefits } from "../api";

export const useBenefitsQuery = () => {
    return useQuery({queryKey: ['benefits'], queryFn: getBenefits})
};