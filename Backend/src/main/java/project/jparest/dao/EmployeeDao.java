package project.jparest.dao;

import java.sql.Blob;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.jparest.entity.ConsumerEntity;
import project.jparest.entity.EmployeeEntity;
import project.jparest.repository.EmployeeRepository;

@Service
public class EmployeeDao {
	
		@Autowired
		EmployeeRepository repo;
		
		public List<EmployeeEntity> getAll()
		{
			List<EmployeeEntity> list=repo.findAll();
			return list;
		}
		
		public String addEmployee(EmployeeEntity employee ) 
		{
			System.out.println("get2");
			repo.save(employee);
			return "employee Saved";
		}
	    
		public void delete(int id) 
		{
			repo.deleteById(id);
		}
		
		public Optional<EmployeeEntity> get(int id)
		{
			return Optional.ofNullable(repo.findById(id).get());
		}
		
		public String getCheck(String employee_email_id,String employee_password)
		{
			EmployeeEntity emp = repo.findByEmail(employee_email_id);
			
			if(emp!=null)
			{
			if(employee_password.equals(emp.getPassword()))
			    return "valid";
			else 
				return "invalid";
			}
			else
				return "invalid";
		}
		
		public String addToProfile(String address,String email,int pincode,Blob picture,int mob)
		{
			EmployeeEntity emp = repo.findByEmail(email);
			emp.setPicture_profile(picture);
			emp.setMobile(mob);
			repo.save(emp);
			return "added";
		}
}
