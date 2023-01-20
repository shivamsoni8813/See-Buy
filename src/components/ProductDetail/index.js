import { AxiosInstance } from '../util/AxiosInstance'


export const categoryProduct = async(id)=>{
    let url = `/categories/${id}/products`
    let res = await AxiosInstance.get(url)
    return res
}

