package project.jparest.dao;
import java.sql.Blob;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.jparest.entity.ConsumerEntity;
import project.jparest.entity.EmployeeEntity;
import project.jparest.entity.HomemakerEntity;
import project.jparest.repository.HomemakerRepository;


@Service
public class HomemakerDao {

	@Autowired
	HomemakerRepository repo;
	
	public List<HomemakerEntity> getAll()
	{
		List<HomemakerEntity> list=repo.findAll();
		return list;
	}
	
	public String addHomemaker(HomemakerEntity homemaker ) 
	{
		repo.save(homemaker);
		return "Saved";
	}
    
	public void delete(int id) 
	{
		repo.deleteById(id);
	}
	
	public Optional<HomemakerEntity> get(int id)
	{
		return Optional.ofNullable(repo.findById(id).get());
	}
	
	public String getCheck(String email,String pwd)
	{
		HomemakerEntity h = repo.findByEmail(email);
		
		if(h!=null)
		{
		if(pwd.equals(h.getPassword()))
		    return "valid";
		else 
			return "invalid";
		}
		else
			return "invalid";
	}
	
	public String addToProfile(String address,String email,int pincode,int mob)
	{
		HomemakerEntity h = repo.findByEmail(email);	
		h.setAddress(address);
		h.setPicture_profile(null);
		h.setPincode(pincode);
		h.setMobile(mob);
		repo.save(h);
		return "added";
	}
	

}
