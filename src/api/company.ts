import { EntityMap } from '../utils/common';
import CompanyAdapter from './adapters/company-adapter';
import { API_URL, GET } from './common';
import ItemAPI from './item';
import Company from './modals/Company';

const companyPath = 'companies';
 
export default class CompanyAPI implements CompanyAdapter {
  public static instance = new CompanyAPI();

  private constructor() {}

  getCompanies = async () => {
    const response = await fetch(API_URL.concat(companyPath), GET);
    return (await response.json()) as Company[];
  };

  getCompanyMap = async () => {
    const companies = await this.getCompanies();
    const slugNameMap = companies.reduce(
      (map, company) => ({
        ...map,
        [company.slug]: company.name,
      }),
      {} as EntityMap<string>
    );
    const items = await ItemAPI.instance.getAllItems();
    const companyMap = {} as EntityMap;
    for (const item of items) {
      companyMap[item.manufacturer] = companyMap[item.manufacturer]
        ? companyMap[item.manufacturer] + 1
        : 1;
    }
    for (const companyMapKey of Object.keys(companyMap)) {
      const itemCount = companyMap[companyMapKey];
      companyMap[slugNameMap[companyMapKey]] = itemCount;
      delete companyMap[companyMapKey];
    }
    return companyMap;
  };
}
