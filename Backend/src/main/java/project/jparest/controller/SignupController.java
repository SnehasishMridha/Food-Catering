package project.jparest.controller;

import java.sql.Blob;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	public String addConsumer(@RequestBody ConsumerEntity c)
	{
		System.out.println(c.getFirstname());
		ConsumerEntity con=new ConsumerEntity(c.getFirstname(),c.getLastname(),
				                              c.getUsername(),c.getPassword(),c.getEmail());
		dao.addConsumer(con);
		return "record inserted";
	}
	
	@PostMapping("/addemployee")
	public String addEmployee(@RequestBody EmployeeEntity e)
	{
		EmployeeEntity con=new EmployeeEntity(e.getFirstname(),e.getLastname(),
                e.getUsername(),e.getPassword(),e.getEmail());
		dao1.addEmployee(con);
		return "record inserted";
	}
	
	@PostMapping("/addhomemaker")
	public String addHomemaker(@RequestBody HomemakerEntity h)
	{
		HomemakerEntity con=new HomemakerEntity(h.getFirstname(),h.getLastname(),
               h.getUsername(),h.getPassword(), h.getEmail_id());
		dao2.addHomemaker(con);
		return "record inserted";
	}
	
	//will manage homemaker,consumer,employee
	//**********pathavariable profile is removed
	//@PostMapping("/profile/{address}/{mobile}/{email}/{pincode}/{picture}")
	//public String addProfile(@PathVariable String address,@PathVariable int mobile,@PathVariable String email,@PathVariable int pincode)
	{
	//	String check=dao.addToProfile(address,email,pincode,mobile);
	//	return check;
	}
	
	
	
	
	
}
