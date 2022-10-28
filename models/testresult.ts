export interface TESTRESULT {
  test_case_id: number;
  test_case_name: string;
  status: string;
  duration: string;
  test_type: string;
  environment: string;
  error?: string | null;
  stack_trace?: string | null;
}
