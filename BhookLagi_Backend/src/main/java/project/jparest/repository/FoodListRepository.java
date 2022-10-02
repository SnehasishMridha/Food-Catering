package project.jparest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import project.jparest.entity.ConsumerEntity;
import project.jparest.entity.FoodlistEntity;
import project.jparest.entity.OrderEntity;
@Repository
public interface FoodListRepository extends JpaRepository<FoodlistEntity, Integer>{



	@Query(nativeQuery=true,value="select * from food_list_tbl where homemaker_id=:id ")
	public List<FoodlistEntity> findByHomemakerId(@Param("id") int id);
	
	@Query(nativeQuery=true,value="delete from food_list_tbl where food_id=:id ")
	public List<FoodlistEntity> findById(@Param("id") int id);
}
