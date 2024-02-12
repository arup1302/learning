export type SetFieldValue = (
  field: string,
  value: any,
  shouldValidate?: boolean,
) => void;

export interface VectorIconProps {
  size?: number;
  color?: string;
  name?: string;
}
export interface DropDownItem {
  label: string;
  value: string;
  id?: number;
}
export type ProgressObj = {
  id: number;
  document_type: string;
  isOpen: boolean;
};
export interface RegisterObject {
  name: string;
  email: string;
  mobile: string;
  password: string;
  confirm_password: string;
}
export interface UserInfo {
  name: string;
  id: number;
  nric: string;
  dob: string;
  gender: string;
  race: string;
  race_id: number;
  email: string;
  mobile: string;
  state: string;
  state_id: string;
  city: string;
  city_id: string;
  address: string;
  education: string;
  education_id: number;
  experience: string;
  picture: string;
  post_code: string;
}
export interface ApplicationFormValues {
  name: string;

  nric: string;
  dob: string;
  gender: string;
  mobile: string;
  race_id: string;
  amanahraya_agent: string;
  company_name: string;
  family_member_working_amanahraya: string;
  name_of_family_member: string;
  department: string;
  state_id: string;
  city_id: string;
  address: string;
  education_level: string;
  language_id: string;
  experience: string;
  postcode: string;
}
export interface GetAgentDetails {
  name: string;
  nric: number;
  dob: string;
  gender: string;
  mobile: string;
  race_id: number;
  amanahraya_agent: string;
  company_name: string;
  family_member_working_amanahraya: string;
  name_of_family_member: string;
  department: string;
  state_id: number;
  city_id: number;
  address: string;
  education_level: number;
  language_id: number;
  experience: string;
  id_front: string;
  id_back: string;
  picture: string;
}

export interface UpdateAgentDetails {
  name: string;
  nric: string;
  dob: string;
  gender: string;
  race_id: number;
  email: string;
  mobile: string;
  state_id: number;
  city_id: number;
  address: string;
  education_level: string;
  experience: string;
  picture: string;
}
export interface UserData {
  name: string;
  email: string;
  unavilable_till_flag: 0 | 1;
  unavilable_till_date: null | string;
  gender: string;
  state: string;
  city: string;
  picture: string;
  id: number;
  area: string;
  dob: string;
  education: string;
  mobile: string | number;
  kin_name: string | null;
  kin_phone_number: string | null;
}
export interface AgentDetails {
  address: string;
  agent_profile_pic: AgentProfilePic;
  application: Application;
  area: Area;
  area_id: number;
  city_id: number;
  created_at: string;
  custom_note: any;
  deleted_at: any;
  dob: string;
  email: string;
  gender: string;
  id: number;
  mobile: string;
  mobile_verify: number;
  name: string;
  otp: number;
  otp_status: string;
  password: string;
  state_id: number;
  status: string;
  unavilable_till_date: string;
  unavilable_till_flag: number;
  updated_at: string;
}

export interface AgentProfilePic {
  agent_id: number;
  created_at: string;
  deleted_at: string;
  document_type: string;
  file: string;
  id: number;
  status: string;
  updated_at: string;
}

export interface Application {
  about: string;
  agent_id: number;
  agent_of_other_company: string;
  agent_status_id: number;
  amanahraya_agent: string;
  amanahraya_response: string;
  company_name: string;
  created_at: string;
  deleted_at: string;
  department: string;
  education_level: number;
  experience: string;
  family_member_working_amanahraya: string;
  id: number;
  kin_name: string;
  kin_phone_number: number;
  name_of_family_member: string;
  nric: string;
  occupation: string;
  postcode: string;
  race_id: number;
  updated_at: string;
}

export interface Area {
  created_at: string;
  id: number;
  name: string;
  updated_at: string;
}
export interface MessagesData {
  status: MessageStatus;
}
export interface MessageStatus {
  code: boolean;
  message: string;
  data: MessageList[];
}

export interface MessageList {
  id: number;
  agent_id: number;
  user_id: number;
  admin_id: null | number;
  status: string;
  created_at: string;
  updated_at: string;
  last_msg: string;
  last_msg_time: string;
  admin: null | boolean;
  customer: Customer;
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  nric: string;
  postcode: string;
  mobile: string;
  dob: string;
  full_address: string;
  gender: string;
  location: string;
  otp: number;
  otp_status: string;
  mobile_verify: number;
  status: number;
  custom_note: string;
  race_id: number;
  state_id: number;
  city_id: number;
  picture: string;
  app_language_id?: number;
  created_at: string;
  updated_at: string;
  last_access: string;
  deleted_at: string;
}

export interface MessageData {
  status: MessageDataStatus;
}

export interface MessageDataStatus {
  code: boolean;
  message: string;
  data: MessageDetails[];
}

export interface MessageDetails {
  id: number;
  chat_channel_id: number;
  message: string;
  sender_id: number;
  receiver_id: number;
  sender_type: string;
  receiver_type: string;
  status: string;
  created_at: string;
  updated_at: string;
  sender_name: string;
  receiver_name: string;
}

export interface WillInfomation {
  status: WillInfoStatus;
}

export interface WillInfoStatus {
  code: boolean;
  message: string;
  data: Data;
}

export interface Data {
  MSG: string;
  SUCCESS: string;
  TBL_CHARITY: TblCharity[];
  TBL_DISTRIBUTION: TblDistribution[];
  TBL_GUARDIAN: TblGuardian[];
  TBL_TESTATOR: TblTestator[];
}

export interface TblCharity {
  RECIPIENT: string;
  DISTRIBUTION: string;
}

export interface TblDistribution {
  'ROW#': number;
  ASSET: string;
  BENEFICIARY: string;
  DIST_VALUE: string;
}

export interface TblGuardian {
  GUARDIAN_NAME: string;
  RELATIONSHIP: string;
}

export interface TblTestator {
  'ROW#': string | null;
  'TESTATOR DETAILS': string;
}
