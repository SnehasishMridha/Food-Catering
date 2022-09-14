package project.jparest.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.jparest.dao.ConsumerDao;


@RestController
@RequestMapping(path="/signin")
public class SigninController {

	@Autowired
	public ConsumerDao consumer;
	
	public SigninController()
	{
		System.out.println("signin called");
	}

	@PostMapping("logincon/{email}/{pwd}")
	public String getConsumer(@PathVariable String email, @PathVariable String pwd)
	{
		String check=consumer.getCheck(email,pwd);
		return check;
	}
	
	@PostMapping("loginemp/{email}/{pwd}")
	public String getConsumer(@PathVariable String email, @PathVariable String pwd)
	{
		String check=consumer.getCheck(email,pwd);
		return check;
	}
	
	@PostMapping("loginCon/{email}/{pwd}")
	public String getConsumer(@PathVariable String email, @PathVariable String pwd)
	{
		String check=consumer.getCheck(email,pwd);
		return check;
	}
	
	@PostMapping("loginCon/{email}/{pwd}")
	public String getConsumer(@PathVariable String email, @PathVariable String pwd)
	{
		String check=consumer.getCheck(email,pwd);
		return check;
	}
}
