$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("JDBCTemplate.feature");
formatter.feature({
  "id": "this-is-a-sample-feature-for-jdbc-template-scenarios",
  "description": "",
  "name": "This is a sample feature for JDBC Template scenarios",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "this-is-a-sample-feature-for-jdbc-template-scenarios;query-db-with-jdbctemplate",
  "description": "",
  "name": "Query DB with JDBCTemplate",
  "keyword": "Scenario",
  "line": 9,
  "type": "scenario",
  "comments": [
    {
      "value": "# Assumptions:",
      "line": 3
    },
    {
      "value": "# This scanrio runs locally. And it is a template scenario",
      "line": 4
    },
    {
      "value": "# We configure the JDBC Template to point ASA UAT DB",
      "line": 5
    },
    {
      "value": "# We make simple query to ASA ContractContent Table with ContentID",
      "line": 6
    },
    {
      "value": "# Verify the result with concerned contractID",
      "line": 7
    }
  ]
});
formatter.step({
  "name": "I Configure the ASA UAT DB",
  "keyword": "Given ",
  "line": 10
});
formatter.step({
  "name": "I query the contractcontent table with contentid as \"324543\"",
  "keyword": "When ",
  "line": 11
});
formatter.step({
  "name": "I Should get the contractid as \"324542\"",
  "keyword": "Then ",
  "line": 12
});
formatter.match({
  "location": "JDBCSteps.configureJDBCTemplate()"
});
formatter.result({
  "duration": 554542996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "324543",
      "offset": 53
    }
  ],
  "location": "JDBCSteps.queryTable(String)"
});
formatter.result({
  "duration": 235188754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "324542",
      "offset": 32
    }
  ],
  "location": "JDBCSteps.verifyContractId(String)"
});
formatter.result({
  "duration": 1435988,
  "status": "passed"
});
});