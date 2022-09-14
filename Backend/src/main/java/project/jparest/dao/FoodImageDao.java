package project.jparest.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import project.jparest.entity.FoodImageEntity;
import project.jparest.repository.FoodImageRepository;

@Service
public class FoodImageDao {
		
				@Autowired
				FoodImageRepository repo;
				
				public List<FoodImageEntity> getAll()
				{
					List<FoodImageEntity> list=repo.findAll();
					return list;
				}
				
				public String addimage(FoodImageEntity image ) 
				{
					System.out.println("get2");
					repo.save(image);
					return "Saved";
				}
			    
				public void delete(int id) 
				{
					repo.deleteById(id);
				}
				
				public Optional<FoodImageEntity> get(int id)
				{
					return Optional.ofNullable(repo.findById(id).get());
				}
		}


