import { type DataBank } from '../types/BankDataType';
import { type AddressModelData } from '../types/AddressUserType';

export interface User {
    idUserAccount: string;
    name: string;
    email: string;
    password: string;
    address: AddressModelData;
    bank: DataBank;
}