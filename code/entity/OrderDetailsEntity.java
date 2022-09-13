package project.jparest.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="order_details_tbl")
public class OrderDetailsEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="order_item_id",unique=true,nullable=false)
	private int order_item_id;
	
	@Column(name="qnt",nullable=false)
	private int qnt;
	
	@Column(name="total_amount",nullable=false)
	private int total_amount;
	
	@ManyToOne
	@JoinColumn(name="food_id")
	private FoodlistEntity foodList;
	
	@ManyToOne
	@JoinColumn(name="order_id")
	private OrderEntity order;

	@OneToMany(mappedBy="order", cascade = CascadeType.ALL)
    private List<ReviewEntity> reviews;
	
	public OrderDetailsEntity() {}

	public OrderDetailsEntity(int order_item_id, int qnt, int total_amount, FoodlistEntity foodList, OrderEntity order,
			List<ReviewEntity> reviews) {
		super();
		this.order_item_id = order_item_id;
		this.qnt = qnt;
		this.total_amount = total_amount;
		this.foodList = foodList;
		this.order = order;
		this.reviews = reviews;
	}

	public int getOrder_item_id() {
		return order_item_id;
	}

	public void setOrder_item_id(int order_item_id) {
		this.order_item_id = order_item_id;
	}

	public int getQnt() {
		return qnt;
	}

	public void setQnt(int qnt) {
		this.qnt = qnt;
	}

	public int getTotal_amount() {
		return total_amount;
	}

	public void setTotal_amount(int total_amount) {
		this.total_amount = total_amount;
	}

	public FoodlistEntity getFoodList() {
		return foodList;
	}

	public void setFoodList(FoodlistEntity foodList) {
		this.foodList = foodList;
	}

	public OrderEntity getOrder() {
		return order;
	}

	public void setOrder(OrderEntity order) {
		this.order = order;
	}

	public List<ReviewEntity> getReviews() {
		return reviews;
	}

	public void setReviews(List<ReviewEntity> reviews) {
		this.reviews = reviews;
	}

	@Override
	public String toString() {
		return "OrderDetailsEntity [order_item_id=" + order_item_id + ", qnt=" + qnt + ", total_amount=" + total_amount
				+ ", foodList=" + foodList + ", order=" + order + ", reviews=" + reviews + "]";
	}
	
	


	
}

		
		
