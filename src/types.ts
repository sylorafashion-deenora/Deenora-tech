export interface Madrasah {
  id: string;
  name: string;
  phone?: string;
  logo_url?: string;
  is_active: boolean;
  is_super_admin: boolean;
  balance: number;
  sms_balance: number;
  reve_api_key?: string;
  reve_secret_key?: string;
  reve_caller_id?: string;
  reve_client_id?: string;
  login_code?: string;
  created_at: string;
}

export interface Profile {
  id: string;
  madrasah_id: string;
  full_name: string;
  role: 'super_admin' | 'madrasah_admin' | 'teacher' | 'accountant';
  is_active: boolean;
  created_at: string;
}

export interface Class {
  id: string;
  madrasah_id: string;
  class_name: string;
  sort_order?: number;
  created_at: string;
}

export interface Student {
  id: string;
  madrasah_id: string;
  class_id: string;
  student_name: string;
  roll?: number;
  guardian_name?: string;
  guardian_phone: string;
  guardian_phone_2?: string;
  photo_url?: string;
  created_at: string;
}

export interface Teacher {
  id: string;
  madrasah_id: string;
  name: string;
  phone: string;
  login_code: string;
  is_active: boolean;
  permissions: {
    can_manage_students: boolean;
    can_manage_classes: boolean;
    can_send_sms: boolean;
    can_send_free_sms: boolean;
  };
  created_at: string;
}

export interface FeeStructure {
  id: string;
  madrasah_id: string;
  class_id: string;
  fee_name: string;
  amount: number;
  created_at: string;
}

export interface Fee {
  id: string;
  madrasah_id: string;
  student_id: string;
  class_id: string;
  amount_paid: number;
  month: string;
  status: 'paid' | 'partial' | 'unpaid';
  paid_at: string;
}

export interface Ledger {
  id: string;
  madrasah_id: string;
  type: 'income' | 'expense';
  category: string;
  amount: number;
  description?: string;
  transaction_date: string;
  created_at: string;
}

export interface Attendance {
  id: string;
  madrasah_id: string;
  student_id: string;
  class_id: string;
  status: 'present' | 'absent' | 'late';
  date: string;
  recorded_by?: string;
  created_at: string;
}

export interface Exam {
  id: string;
  madrasah_id: string;
  class_id: string;
  exam_name: string;
  exam_date?: string;
  is_published: boolean;
  created_at: string;
}

export interface ExamSubject {
  id: string;
  exam_id: string;
  subject_name: string;
  full_marks: number;
  pass_marks: number;
}

export interface ExamMark {
  id: string;
  exam_id: string;
  student_id: string;
  subject_id: string;
  marks_obtained: number;
}

export interface SMSTemplate {
  id: string;
  madrasah_id: string;
  title: string;
  body: string;
  created_at: string;
}

export interface Transaction {
  id: string;
  madrasah_id: string;
  amount: number;
  transaction_id: string;
  sender_phone?: string;
  description?: string;
  status: 'pending' | 'approved' | 'rejected';
  sms_count?: number;
  type: 'credit' | 'debit';
  created_at: string;
}

export interface RecentCall {
  id: string;
  madrasah_id: string;
  student_id: string;
  called_at: string;
}

export interface SystemSettings {
  id: string;
  reve_api_key?: string;
  reve_secret_key?: string;
  reve_caller_id?: string;
  reve_client_id?: string;
  bkash_number?: string;
  updated_at: string;
}
