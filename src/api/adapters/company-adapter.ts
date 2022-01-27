import { EntityMap } from '../../utils/common';
import Company from '../modals/Company';
import ApiAdapter from './api-adapter'; 

export default interface CompanyAdapter extends ApiAdapter {
  getCompanies(): Promise<Company[]>;
  getCompanyMap(): Promise<EntityMap>;
}
