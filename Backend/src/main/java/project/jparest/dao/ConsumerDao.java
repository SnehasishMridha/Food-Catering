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
	
	public String getCheck(String consumer_email_id,String consumer_password)
	{
		ConsumerEntity user = repo.findByEmail(consumer_email_id);
		
		if(user!=null)
		{
		if(consumer_password.equals(user.getPassword()))
		    return "valid";
		else 
			return "invalid";
		}
		else
			return "invalid";
	}
	
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
}

		
