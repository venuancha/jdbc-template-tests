Feature: This is a sample feature for JDBC Template scenarios

# Assumptions:
# This scanrio runs locally. And it is a template scenario 
# We configure the JDBC Template to point ASA UAT DB
# We make simple query to ASA ContractContent Table with ContentID
# Verify the result with concerned contractID

Scenario: Query DB with JDBCTemplate
Given I Configure the ASA UAT DB
When I query the contractcontent table with contentid as "324543"
Then I Should get the contractid as "324542"