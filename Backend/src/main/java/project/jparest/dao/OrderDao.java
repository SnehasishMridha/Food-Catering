package project.jparest.dao;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import project.jparest.entity.ConsumerEntity;
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
		repo.save(order);
		return "Saved";
	}
    
	public String delete(OrderEntity order) 
	{
		repo.deleteById(order.getOrder_id());
		return "deleted";		
	}
	
	public Optional<OrderEntity> get(int id)
	{
		return Optional.ofNullable(repo.findById(id).get());
	}
		
	
}
