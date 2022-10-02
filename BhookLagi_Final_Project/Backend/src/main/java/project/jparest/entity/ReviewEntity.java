// package project.jparest.entity;
// import javax.persistence.Id;
// import javax.persistence.JoinColumn;
// import javax.persistence.ManyToOne;
// import javax.persistence.CascadeType;
// import javax.persistence.Column;
// import javax.persistence.Entity;
// import javax.persistence.GeneratedValue;
// import javax.persistence.GenerationType;
// import javax.persistence.Table;

// @Entity
// @Table(name="review_tbl")
// public class ReviewEntity {

// 	@Id
// 	@GeneratedValue(strategy=GenerationType.IDENTITY)
// 	@Column(name="review_id")
// 	private int review_id;

// 	@Column(name="food_review")
// 	private String food_review  ;

// 	@Column(name="food_rating")
// 	private int food_rating  ;
	
// 	@ManyToOne(cascade = CascadeType.ALL)
// 	@JoinColumn(name="consumer_id")
// 	private ConsumerEntity consumer;
	
// 	@ManyToOne(cascade = CascadeType.ALL)
// 	@JoinColumn(name="order_id")
// 	private OrderDetailsEntity order;
	
// 	public ReviewEntity() {}
 
// 	public ReviewEntity(String food_review, int food_rating) {
// 		super();
// 		this.food_review = food_review;
// 		this.food_rating = food_rating;
// 	}

// 	public int getReview_id() {
// 		return review_id;
// 	}

// 	public void setReview_id(int review_id) {
// 		this.review_id = review_id;
// 	}

// 	public String getFood_review() {
// 		return food_review;
// 	}

// 	public void setFood_review(String food_review) {
// 		this.food_review = food_review;
// 	}

// 	public int getFood_rating() {
// 		return food_rating;
// 	}

// 	public void setFood_rating(int food_rating) {
// 		this.food_rating = food_rating;
// 	}

// 	public ConsumerEntity getConsumer() {
// 		return consumer;
// 	}

// 	public void setConsumer(ConsumerEntity consumer) {
// 		this.consumer = consumer;
// 	}

// 	public OrderDetailsEntity getOrder() {
// 		return order;
// 	}

// 	public void setOrder(OrderDetailsEntity order) {
// 		this.order = order;
// 	}

// 	@Override
// 	public String toString() {
// 		return "ReviewEntity [review_id=" + review_id + ", food_review=" + food_review + ", food_rating=" + food_rating
// 				+ ", consumer=" + consumer + ", order=" + order + "]";
// 	}
	
// }


 