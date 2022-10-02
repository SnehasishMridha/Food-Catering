package project.jparest.controller;
import java.sql.Blob;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.jparest.dao.ConsumerDao;
import project.jparest.dao.HomemakerDao;
import project.jparest.entity.ConsumerEntity;
import project.jparest.entity.HomemakerEntity;

@CrossOrigin("*")
@RestController
@RequestMapping(path="signin")
public class SigninController {

	@Autowired
	public ConsumerDao c;
	
	//@Autowired
	//EmployeeDao e;
	
	@Autowired
	HomemakerDao h;
	
	@PostMapping("logincon/{email}/{pwd}")
	public ConsumerEntity getConsumer(@PathVariable String email, @PathVariable String pwd) 
	{
		System.out.println(email+pwd);
		ConsumerEntity check=c.getCheck(email,pwd);
		return check;
	}
	
	/*@PostMapping("loginemp/{email}/{pwd}")
	public String getEmployee(@PathVariable String email, @PathVariable String pwd)
	{
		String check=e.getCheck(email,pwd);
		return check;
	}*/
	
	@PostMapping("loginHome/{email}/{pwd}")
	public HomemakerEntity getHomemaker(@PathVariable String email, @PathVariable String pwd)
	{		
		HomemakerEntity check = h.getCheck(email,pwd);
		return check;
	}
	
	@PostMapping("changepwd/{email}/{newpwd}")
	public Object changePass(@PathVariable String email,@PathVariable String newpwd)
	{
		System.out.println(email+newpwd+"signin");
		ConsumerEntity pass = c.changePassword(email,newpwd);

		if(pass!=null)
		{
		return pass;
		}
		HomemakerEntity pwd = h.changeHomePwd(email,newpwd);

		if(pwd!=null)
		{
			return pwd;
		}
		return null;

	}
	
	
}
