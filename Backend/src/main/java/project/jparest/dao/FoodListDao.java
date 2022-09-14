package project.jparest.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.jparest.entity.FoodlistEntity;
import project.jparest.repository.FoodListRepository;
@Service
public class FoodListDao {
	
				@Autowired
					FoodListRepository repo;
					
					public List<FoodlistEntity> getAll()
					{
						List<FoodlistEntity> list=repo.findAll();
						return list;
					}
					
					public String addfood(FoodlistEntity food ) 
					{
						System.out.println("get2");
						repo.save(food);
						return "Saved";
					}
				    
					public void delete(int id) 
					{
						repo.deleteById(id);
					}
					
					public Optional<FoodlistEntity> get(int id)
					{
						return Optional.ofNullable(repo.findById(id).get());
					}
			
}
