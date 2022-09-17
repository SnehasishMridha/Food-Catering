package project.jparest.controller;
import java.sql.Blob;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.jparest.dao.ConsumerDao;
import project.jparest.dao.EmployeeDao;
import project.jparest.dao.HomemakerDao;


@RestController
@RequestMapping(path="/signin")
public class SigninController {

	@Autowired
	public ConsumerDao consumer;
	
	@Autowired
	EmployeeDao e;
	
	@Autowired
	HomemakerDao h;
	
	@PostMapping("logincon/{email}/{pwd}")
	public String getConsumer(@PathVariable String email, @PathVariable String pwd) 
	{
		String check=consumer.getCheck(email,pwd);
		return check;
	}
	
	@PostMapping("loginemp/{email}/{pwd}")
	public String getEmployee(@PathVariable String email, @PathVariable String pwd)
	{
		String check=e.getCheck(email,pwd);
		return check;
	}
	
	@PostMapping("loginHome/{email}/{pwd}")
	public String getHomemaker(@PathVariable String email, @PathVariable String pwd)
	{
		String check=h.getCheck(email,pwd);
		return check;
	}
	
}
