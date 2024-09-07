import {  AxiosPromise, AxiosResponse } from "axios";
import { ListItemProps } from "@/types/list";
import { axiosInstance } from "@/api/axios";
import { ENDPOINTS } from "@/api/endpoints";


export const getListData = async (): AxiosPromise<ListItemProps[]> => {
    const response = await axiosInstance.get(ENDPOINTS.GET_CHECKLISTS)
    return response
}