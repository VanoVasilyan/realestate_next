import { useState } from "react";
import { Flex, Select, Box} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { filterData, getFilterValues } from '../../utils/filterData';

const SearchFilters = () => {
  const router = useRouter();
  const [filters, setFilters] = useState(filterData);

  const searchProperties = (filterValues) => {
    const { pathname, query } = router
    const values = getFilterValues(filterValues)
    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value
      }
    })
    router.push({ pathname, query })
  }

  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
      {filters.map((filter) => {
        return <Box key={filter.queryName}>
          <Select
            placeholder={filter.placeholder}
            onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}
            w="fit-content"
            p="2"
          >
            {filter.items.map(item => <option key={item.name} value={item.value}>{item.name}</option>)}
          </Select>
        </Box>
      })}
    </Flex>
  )
}

export default SearchFilters
