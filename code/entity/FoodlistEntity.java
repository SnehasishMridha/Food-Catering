package project.jparest.entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Entity
@Table(name="food_list_tbl")
public class FoodlistEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="food_id",unique=true,nullable=false)
	private int food_id;

	@Column(name="food_name",nullable=false)
	private String food_name ;

	@Column(name="food_price",nullable=false)
	private int food_price ;

	@Column(name="food_category",nullable=false)
	private long food_category ;

	@Column(name="qnt",nullable=false)
	private int  qnt ;

	@Column(name="unit",nullable=false)
	private int unit ;

	@ManyToOne
	@JoinColumn(name="homemaker_id")
	private HomemakerEntity homemaker;

	@OneToMany(mappedBy="foodList", cascade = CascadeType.ALL)
	private List<FoodImageEntity> food;

	@OneToMany(mappedBy="foodList", cascade = CascadeType.ALL)
     private List<OrderDetailsEntity> orders;

	@OneToMany(mappedBy="foodlist", cascade = CascadeType.ALL)
	private List<PostTblEntity> post;
	
	public FoodlistEntity() {}

	public FoodlistEntity(int food_id, String food_name, int food_price, long food_category, int qnt, int unit,
			HomemakerEntity homemaker, List<FoodImageEntity> food, List<OrderDetailsEntity> orders,
			List<PostTblEntity> post) {
		super();
		this.food_id = food_id;
		this.food_name = food_name;
		this.food_price = food_price;
		this.food_category = food_category;
		this.qnt = qnt;
		this.unit = unit;
		this.homemaker = homemaker;
		this.food = food;
		this.orders = orders;
		this.post = post;
	}

	public int getFood_id() {
		return food_id;
	}

	public void setFood_id(int food_id) {
		this.food_id = food_id;
	}

	public String getFood_name() {
		return food_name;
	}

	public void setFood_name(String food_name) {
		this.food_name = food_name;
	}

	public int getFood_price() {
		return food_price;
	}

	public void setFood_price(int food_price) {
		this.food_price = food_price;
	}

	public long getFood_category() {
		return food_category;
	}

	public void setFood_category(long food_category) {
		this.food_category = food_category;
	}

	public int getQnt() {
		return qnt;
	}

	public void setQnt(int qnt) {
		this.qnt = qnt;
	}

	public int getUnit() {
		return unit;
	}

	public void setUnit(int unit) {
		this.unit = unit;
	}

	public HomemakerEntity getHomemaker() {
		return homemaker;
	}

	public void setHomemaker(HomemakerEntity homemaker) {
		this.homemaker = homemaker;
	}

	public List<FoodImageEntity> getFood() {
		return food;
	}

	public void setFood(List<FoodImageEntity> food) {
		this.food = food;
	}

	public List<OrderDetailsEntity> getOrders() {
		return orders;
	}

	public void setOrders(List<OrderDetailsEntity> orders) {
		this.orders = orders;
	}

	public List<PostTblEntity> getPost() {
		return post;
	}

	public void setPost(List<PostTblEntity> post) {
		this.post = post;
	}

	@Override
	public String toString() {
		return "FoodlistEntity [food_id=" + food_id + ", food_name=" + food_name + ", food_price=" + food_price
				+ ", food_category=" + food_category + ", qnt=" + qnt + ", unit=" + unit + ", homemaker=" + homemaker
				+ ", food=" + food + ", orders=" + orders + ", post=" + post + "]";
	}

	

}