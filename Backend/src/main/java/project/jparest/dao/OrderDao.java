package project.jparest.dao;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.jparest.entity.OrderEntity;
import project.jparest.repository.OrderRepository;

@Service
public class OrderDao {
	@Autowired
	OrderRepository repo;
	
	public List<OrderEntity> getAll()
	{
		List<OrderEntity> list=repo.findAll();
		return list;
	}
	
	public String addOrder(OrderEntity order ) 
	{
		System.out.println("get2");
		repo.save(order);
		return "Saved";
	}
    
	public void delete(int id) 
	{
		repo.deleteById(id);
	}
	
	public Optional<OrderEntity> get(int id)
	{
		return Optional.ofNullable(repo.findById(id).get());
	}

}
