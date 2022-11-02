export interface TESTCASE {
  test_case_name: string;
  test_spec: string;
  test_type: string;
  test_steps: string;
  jira_references: Array<string>;
  automated: boolean;
}
