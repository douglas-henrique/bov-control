import {  AxiosPromise, AxiosResponse } from "axios";
import { ListItemProps } from "@/types/list";
import { axiosInstance } from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";

interface ListResponse { 
    data: ListItemProps[]
}

export const getListData = async (): AxiosPromise<ListResponse[]> => {
    const response = await axiosInstance.get(ENDPOINTS.GET_CHECKLISTS)
    return response
}