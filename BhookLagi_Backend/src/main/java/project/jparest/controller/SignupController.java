package project.jparest.controller;

import java.sql.Blob;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.jparest.dao.ConsumerDao;
import project.jparest.dao.HomemakerDao;
import project.jparest.entity.ConsumerEntity;
import project.jparest.entity.HomemakerEntity;
import project.jparest.repository.ConsumerRepository;
import project.jparest.repository.HomemakerRepository;

@CrossOrigin("*")
@RestController
@RequestMapping(path="/consumer")
public class SignupController {

	@Autowired
	ConsumerDao dao;
		
	@Autowired
	HomemakerDao dao2;
	
	@Autowired
	ConsumerRepository crepo;
	
	@Autowired
	HomemakerRepository hrepo;
	
	
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
		String s=dao.addConsumer(c);
		return "record inserted";
	}
	
	
	@PostMapping("/addhomemaker")
	public String addHomemaker(@RequestBody HomemakerEntity h)
	{
		System.out.println(h);
		String s=dao2.addHomemaker(h);
		return s;
	}
	
	//will manage homemaker,consumer,employee
	//**********pathavariable profile is removed
	
	@PostMapping("/getprofile/{email}")
	public Object getProfile(@PathVariable String email)
	{
		ConsumerEntity con=crepo.findByEmail(email);
		if(con!=null)
		{
			return con;
		}
		HomemakerEntity home=hrepo.findByEmail(email);
		if(home!=null)
		{
			return home;
		}
		return null;
	}
	
}
