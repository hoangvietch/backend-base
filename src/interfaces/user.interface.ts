export interface User {
  _id: string;
  email: string;
  first_name: string;
  last_name: string;
  plan: string;
  payment_reference_id?: string;
  country: string;
  address_city: string;
  address_country: string;
  address_line1: string;
  address_line2?: string;
  address_state: string;
  address_zip: string;
}

