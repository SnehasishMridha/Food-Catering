package project.jparest.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import project.jparest.entity.OrderEntity;

@Repository
public interface OrderRepository extends JpaRepository<OrderEntity, Integer>{

	@Query(nativeQuery=true,value="select * from order_tbl where consumer_id=:id and order_date=current_date()")
	public List<OrderEntity> findByConsumerId(@Param("id") int id);
}
