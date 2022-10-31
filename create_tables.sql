CREATE TABLE testcases (
   test_case_id  SERIAL PRIMARY KEY,
   test_case_name           VARCHAR      NOT NULL,
   test_spec            VARCHAR     NOT NULL,
   test_type        VARCHAR	NOT NULL,
   test_steps        VARCHAR	NOT NULL,
   jira_references        VARCHAR   ARRAY	   NOT NULL,
   created_on         TIMESTAMP NOT null DEFAULT NOW(),
   updated_on	TIMESTAMP
);




CREATE TABLE testresults (
   test_result_id  SERIAL PRIMARY KEY,
   test_case_id integer REFERENCES testcases (test_case_id),
   test_case_name           VARCHAR      NOT NULL,
   status            VARCHAR     NOT NULL,
   duration 	VARCHAR	NOT NULL,
   test_type        VARCHAR	NOT NULL,
   environment	VARCHAR NOT null,
   error	VARCHAR,
   stack_trace	VARCHAR,
   test_run_date TIMESTAMP NOT null DEFAULT NOW(),
   created_on         TIMESTAMP NOT null DEFAULT NOW(),
   updated_on	TIMESTAMP
);


CREATE TABLE testtypes (
   test_type_id  SERIAL PRIMARY KEY,
   type_name           VARCHAR      NOT NULL
);



insert into testcases (test_case_name, test_spec, test_type)
VALUES('dans first test', 'Login', 'ui')


insert into testtypes (type_name)
VALUES('unit')
insert into testtypes (type_name)
VALUES('integration')
insert into testtypes (type_name)
VALUES('ui')



insert into testresults (test_case_id, test_case_name, status, duration, test_type, environment, error, stack_trace)
VALUES('1', 'dans first test from code', 'passed', '0.2 ms', 'ui', 'test2', null, null)

