package project.jparest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.jparest.entity.ConsumerEntity;
import project.jparest.entity.FoodlistEntity;
@Repository
public interface FoodListRepository extends JpaRepository<FoodlistEntity, Integer>{

	public List<FoodlistEntity> findByName(String n);
}
