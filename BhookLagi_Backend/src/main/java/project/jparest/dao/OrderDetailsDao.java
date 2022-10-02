package project.jparest.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.jparest.entity.OrderDetailsEntity;
import project.jparest.repository.OrderDetailsRepository;


@Service
public class OrderDetailsDao {

	@Autowired
	OrderDetailsRepository repo;
	
	public List<OrderDetailsEntity> getAll()
	{
		List<OrderDetailsEntity> list=repo.findAll();
		return list;
	}
	
	public String addOrder(OrderDetailsEntity order ) 
	{
		System.out.println("get2");
		repo.save(order);
		return "Saved";
	}
    
	public void delete(int id) 
	{
		repo.deleteById(id);
	}
	
	public Optional<OrderDetailsEntity> get(int id)
	{
		return Optional.ofNullable(repo.findById(id).get());
	}

}
