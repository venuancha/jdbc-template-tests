package step_definitions;

import org.junit.Assert;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class JDBCSteps {
	static ApplicationContext ctx;
	JdbcTemplate template;
	ContractContent contractContent;

	@Given("^I Configure the ASA UAT DB$")
	public void configureJDBCTemplate() {
		// initialise the context
		ctx = new ClassPathXmlApplicationContext("app-context.xml");
		template = (JdbcTemplate) ctx.getBean("jdbcTemplate");
	}

	@When("^I query the contractcontent table with contentid as \"([^\"]*)\"$")
	public void queryTable(String id) {
		int contentId = Integer.parseInt(id);
		contractContent = findByContentID(contentId);
	}

	@Then("^I Should get the contractid as \"([^\"]*)\"$")
	public void verifyContractId(String contractID) {
		Assert.assertTrue(String.valueOf(contractContent.getContract_id_())
				.equalsIgnoreCase(contractID));
	}

	public ContractContent findByContentID(int id) {

		String sql = "SELECT * FROM CONTRACT_CONTENT WHERE CONTENT_ID_ = ?";

		ContractContent contract = (ContractContent) template.queryForObject(
				sql, new Object[] { id }, new BeanPropertyRowMapper(
						ContractContent.class));
		return contract;
	}

}
