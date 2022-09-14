package project.jparest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.jparest.entity.FoodlistEntity;
@Repository
public interface FoodListRepository extends JpaRepository<FoodlistEntity, Integer>{

}
