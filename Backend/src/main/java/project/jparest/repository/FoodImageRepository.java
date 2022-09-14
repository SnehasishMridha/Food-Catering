package project.jparest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.jparest.entity.FoodImageEntity;

@Repository
public interface FoodImageRepository extends JpaRepository<FoodImageEntity, Integer>{

}
