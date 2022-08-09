import { useQuery } from '@tanstack/react-query';
import { instance } from '../api/instance';
import axios from 'axios';
import { usePaginate } from '../context/Paginated.context';

export const GetCoins = async(pageNum = 1) => {
    // const { data } = await instance.get(
    //     `/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false&price_change_percentage=1h%2C24h`
    // );

    const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins//markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${pageNum}&sparkline=false&price_change_percentage=1h%2C24h`
    );
    return data;
};
const useCoin = () => {
    const { paginatenumber } = usePaginate();

    const getCoinDetails = useQuery(['coins', paginatenumber], () =>
        GetCoins(paginatenumber)
    );

    return { getCoinDetails };
};
export default useCoin;