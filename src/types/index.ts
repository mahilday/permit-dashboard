// interface IPermits {
//   id: string;
//   permit_: string;
//   permit_type: string;
//   review_type: string;
//   application_start_date: Date;
//   issue_date: Date;
//   processing_time: number;
//   street_number: number;
//   street_direction: string;
//   street_name: string;
//   suffix: string;
//   work_description: string;
//   building_fee_paid: number;
//   zoning_fee_paid: number;
//   other_fee_paid: number;
//   subtotal_paid: number;
//   building_fee_unpaid: number;
//   zoning_fee_unpaid: number;
//   other_fee_unpaid: number;
//   subtotal_unpaid: number;
//   building_fee_waived: number;
//   zoning_fee_waived: number;
//   other_fee_waived: number;
//   subtotal_waived: number;
//   total_fee: number;
//   contact_1_type: string;
//   contact_1_name: string;
//   contact_1_city: string;
//   contact_1_state: string;
//   contact_1_zipcode: string;
//   contact_2_type: string;
//   contact_2_name: string;
//   contact_2_city: string;
//   contact_2_state: string;
//   contact_2_zipcode: string;
//   contact_3_type: string;
//   contact_3_name: string;
//   contact_3_city: string;
//   contact_3_state: string;
//   contact_3_zipcode: string;
//   contact_4_type: string;
//   contact_4_name: string;
//   contact_4_city: string;
//   contact_4_state: string;
//   contact_4_zipcode: string;
//   contact_5_type: string;
//   contact_5_name: string;
//   contact_5_city: string;
//   contact_5_state: string;
//   contact_5_zipcode: string;
//   reported_cost: "2000";
//   pin1: "20-23-100-005";
// }

export type IPermit = any;

export type permits = Array<{}>;

export type PermitAction = {
  type: string;
  payload: payload
};

export interface payload {
  permits: Array<{}>;
  error: any;
}
export type PermitState = {
  pending: boolean;
  permits: Array<{}>;
  error: any;
};

export const FETCH_PERMIT_SUCCESS = "FETCH_PERMIT_SUCCESS";
export const FETCH_PERMIT_FAILURE = "FETCH_PERMIT_FAILURE";
export const FETCH_PERMIT_REQUEST = "FETCH_PERMIT_REQUEST";
