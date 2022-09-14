package project.jparest.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
