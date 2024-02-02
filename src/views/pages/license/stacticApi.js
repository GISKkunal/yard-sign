import ApiConfig from "src/config/APICongig"; 9
import Axios from "axios";
export const getSingleStaticContent = async (id) => {
    try {
        const res = await Axios({
            method: "GET",
            url: ApiConfig.getSingleStaticContent,
            params: {
                _id: id
            }
        });

        if (res.data.statusCode === 200) {
            setExchangeBalance(res.data.result);
            const data = res.data.result;
            return data;
        }
    } catch (error) {
        return error;
    }
}
