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
		repo.save(food);
		return "Saved";
	}

	public String delete(FoodlistEntity food) 
	{
		repo.deleteById(food.getId());
		return "deleted";
	}

	public Optional<FoodlistEntity> get(int id)
	{
		return Optional.ofNullable(repo.findById(id).get());
	}

	public Optional<List<FoodlistEntity>> getFoodName(String name)
	{
		return Optional.ofNullable(repo.findByName(name));
	}

}
