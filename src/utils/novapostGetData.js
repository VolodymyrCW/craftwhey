import { novapostRequest } from "./novapostApi";

const novapostKey = process.env.NOVAPOST_KEY


export async function getSettlementByString(string) {
    const response = await novapostRequest({
        apiKey: novapostKey,
        modelName: "AddressGeneral",
        calledMethod: "getCities",
        methodProperties: {
            FindByString: string,
            Limit: "20"
        },
    })
    const settlementListArr = await response.data?.map(el => el.Description)
    return settlementListArr;
}



export async function getCityDepartmentsByString(cityName, string) {
    const response = await novapostRequest({
        apiKey: novapostKey,
        modelName: "AddressGeneral",
        calledMethod: "getWarehouses",
        methodProperties: {
            FindByString: string,
            CityName: cityName,
            Limit: "20"
        },
    })
    const departmentListArr = await response.data.map(el => el.Description)
    return departmentListArr;
}


export async function getCityDepartmentsByCityName(cityName) {
    const response = await novapostRequest({
        apiKey: novapostKey,
        modelName: "AddressGeneral",
        calledMethod: "getWarehouses",
        methodProperties: {
            CityName: cityName,
            Limit: "20"
        },
    })
    const departmentListArr = await response.data.map(el => el.Description)
    return departmentListArr;
}