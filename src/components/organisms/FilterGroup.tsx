import { FC, useCallback } from 'react';
import CompanyAPI from '../../api/company';
import ItemAPI from '../../api/item';
import useApi, { ApiReturnType } from '../../hooks/useApi';
import { ArrayUtils, EntityMap } from '../../utils/common';
import { FilterFrame, SortingFilter } from '../components';
import { StyledFilterGroup } from '../styles/FilterGroup.styled';
import SearchFragment from './SearchFragment';

const FilterGroup: FC = () => {
  const memoizedGetCompanyMap = useCallback(
    () => CompanyAPI.instance.getCompanyMap(),
    []
  );
  const memoizedGetTagMap = useCallback(() => ItemAPI.instance.getTagMap(), []);
  const [companyMap] = useApi(
    memoizedGetCompanyMap,
    {}
  ) as ApiReturnType<EntityMap>;
  const totalCount = ArrayUtils.sum(
    ArrayUtils.mapToArray(companyMap).map((item) => item[1])
  );
  const [tagMap] = useApi(memoizedGetTagMap, {}) as ApiReturnType<EntityMap>;
  return (
    <StyledFilterGroup>
      <FilterFrame title='Sorting'>
        <SortingFilter />
      </FilterFrame>
      <FilterFrame title='Brands'>
        <SearchFragment
          filterProp={'brand'}
          totalCount={totalCount}
          placeholder='Search brand'
          list={ArrayUtils.mapToArray(companyMap)}
        />
      </FilterFrame>
      <FilterFrame title='Tags'>
        <SearchFragment
          filterProp={'tag'}
          totalCount={totalCount}
          placeholder='Search tag'
          list={ArrayUtils.mapToArray(tagMap)}
        />
      </FilterFrame>
    </StyledFilterGroup>
  );
};

export default FilterGroup;
