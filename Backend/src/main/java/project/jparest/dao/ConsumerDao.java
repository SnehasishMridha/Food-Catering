package project.jparest.dao;

import java.sql.Blob;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import project.jparest.entity.ConsumerEntity;
import project.jparest.repository.ConsumerRepository;

@Service
public class ConsumerDao {

	@Autowired
	ConsumerRepository repo;
	
	public List<ConsumerEntity> getAll()
	{
		List<ConsumerEntity> list=repo.findAll();
		return list;
	}
	
	public String addConsumer(ConsumerEntity consumer ) 
	{
		repo.save(consumer);
		return "consumer Saved";
	}
    
	public void delete(int id) 
	{
		repo.deleteById(id);
	}
	
	public Optional<ConsumerEntity> check(int id)
	{
		return Optional.ofNullable(repo.findById(id).get());
	}
	
	public ConsumerEntity getCheck(String consumer_email_id,String consumer_password)
	{
		ConsumerEntity user = repo.findByEmail(consumer_email_id);

		if(user!=null)
		{
			if(consumer_password.equals(user.getPassword()))
				return user;
			else 
				return null;
		}
		else
			return null;
	}
	
<<<<<<< HEAD
	
	public ConsumerEntity changePassword(@PathVariable String email,@PathVariable String oldpwd,@PathVariable String newpwd)
	{
		ConsumerEntity c=repo.findByEmail(email);
		c.setPassword(newpwd);
		repo.save(c);
		return c;
	}
	
=======
	public String addToProfile(String address,String email,int pincode,Blob picture,int mob)
	{
		ConsumerEntity user = repo.findByEmail(email);
		
		user.setAddress(address);
		user.setPicture_profile(picture);
		user.setPincode(pincode);
		user.setMobile(mob);
		repo.save(user);
		return "added";
	}


>>>>>>> 72cccc2951f9e1f0f61c54f820340ecfdbc6bd08
	public ConsumerEntity changePassword(@PathVariable String email,@PathVariable String newpwd)
	{
		System.out.println(email+newpwd);
		ConsumerEntity c=repo.findByEmail(email);
		if(c!=null)
		{
			c.setPassword(newpwd);
			repo.save(c);
			return c;
		}
		return null;
	}
}

		
