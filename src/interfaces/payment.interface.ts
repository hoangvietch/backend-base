export interface Payment {
    _id:string;
    name: string;
    brand: string;
    country: string;
    address_city: string;
    address_country: string;
    address_line1: string;
    address_line2?: string;
    address_state: string;
    address_zip: string;
    address_zip_check: string;
    cvc_check: string;
    exp_month: number;
    exp_year: number;
    fingerprint: string;
    funding: string;
    last4: string;
    metadata: object;

}