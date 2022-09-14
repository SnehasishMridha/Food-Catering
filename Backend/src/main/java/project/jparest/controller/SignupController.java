/*package project.jparest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.jparest.dao.ConsumerDao;
import project.jparest.dao.EmployeeDao;
import project.jparest.dao.HomemakerDao;
import project.jparest.entity.ConsumerEntity;
import project.jparest.entity.EmployeeEntity;
import project.jparest.entity.HomemakerEntity;

@RestController
@RequestMapping(path="/consumer")
public class SignupController {

	@Autowired
	ConsumerDao dao;
	
	@Autowired
	EmployeeDao dao1;
	
	@Autowired
	HomemakerDao dao2;
	
	
	@GetMapping("/getconsumers")
	public List<ConsumerEntity> getConsumer()
	{
		List<ConsumerEntity> consumer=dao.getAll();
		return consumer;

	}
	@PostMapping("/addconsumer")
	public String addConsumer(@RequestBody ConsumerEntity consumer)
	{
		ConsumerEntity con=new ConsumerEntity(consumer.getConsumer_firstname(),
				                               consumer.getConsumer_lastname(),
				                               consumer.getConsumer_mobile(),
				                               consumer.getConsumer_username(),
				                               consumer.getConsumer_password(),    
				                               consumer.getConsumer_email_id(),
				                               consumer.getConsumer_address(),
				                               consumer.getPincode(),
				                               consumer.getConsumer_picture_profile()
				                               );
		dao.addConsumer(con);
		return "record inserted";
	}
	
	@PostMapping("/addemployee")
	public String addEmployee(@RequestBody EmployeeEntity employee)
	{
		EmployeeEntity con=new EmployeeEntity(employee.getEmployee_firstname(),
				                               employee.getEmployee_lastname(),
				                               employee.getEmployee_mobile(),
				                               employee.getEmployee_username(),
				                               employee.getEmployee_password(),    
				                               employee.getEmployee_email_id(),
				                               employee.getEmployee_picture_profile(),			          
				                               employee.getEmployee_role()
				                               );
		dao1.addEmployee(con);
		return "record inserted";
	}
	
	@PostMapping("/addhomemaker")
	public String addHomemaker(@RequestBody HomemakerEntity homemaker)
	{
		HomemakerEntity con=new HomemakerEntity(homemaker.getHomemaker_firstname(),
				                               homemaker.getHomemaker_lastname(),
				                               homemaker.getHomemaker_mobile(),
				                               homemaker.getHomemaker_username(),			                             
				                               homemaker.getHomemaker_password(),    
				                               homemaker.getHomemaker_email_id(),
				                               homemaker.getHomemaker_address(),
				                               homemaker.getPincode(),
				                               homemaker.getHomemaker_picture_profile()				                               
				                               );
		dao2.addHomemaker(con);
		return "record inserted";
	}
	
}*/
