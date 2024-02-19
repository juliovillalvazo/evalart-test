import axios from "axios";
import { api } from "./api";

type features = {
    id: string;
    title: string;
    description: string;
}[];

type benefits = {
    id: string;
    title: string;
    description: string;
}[];

export const getFeatures = async () => {
    if (import.meta.env.MODE === "development") {
        const { data } = await api.get<features>("/features");
        return data;
    }
    const {data} = await axios.get<features>(`${import.meta.env.VITE_PROD_URL}`);
    // @ts-expect-error this will work while backend does not exists
    return data.features as features;
}

export const getBenefits = async () => {
    if (import.meta.env.MODE === "development") {
        const { data } = await api.get<benefits>("/benefits");
        return data;
    }
    const {data} = await axios.get<benefits>(`${import.meta.env.VITE_PROD_URL}`);
    // @ts-expect-error this will work while backend does not exists
    return data.benefits as benefits;
}