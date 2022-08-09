import Pagination from '@mui/material/Pagination';
import { GetCoins } from '../../hooks/useCoin';
import Stack from '@mui/material/Stack';
import { usePaginate } from '../../context/Paginated.context';

const PaginationContainer = () => {
  const { setpaginatenumber } = usePaginate();

  const handleChange = (e) => {
    const numClicked = parseInt(e.target.textContent);
    if (numClicked > 0) {
      setpaginatenumber(numClicked);
    }
  };
  return (
    <Stack spacing={1}>
      <Pagination
        onChange={handleChange}
        count={50}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
};

export default PaginationContainer;
