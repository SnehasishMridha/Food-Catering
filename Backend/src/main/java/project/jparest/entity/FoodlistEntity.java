package project.jparest.entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import java.sql.Blob;
import java.sql.Date;
import java.sql.Time;
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
	@Column(name="food_id",unique=true)
	private int id;
	
	@Lob
	@Column(name="food_image")
	private Blob image ;
	
	@Column(name="food_name")
	private String name ;
	
	@Column(name="food_description")
	private String data ;
	
	@Column(name="food_price")
	private int price ;

	@Column(name="food_category")
	private String category ;

	@Column(name="qnt")
	private int  qnt ;

	@Column(name="unit")
	private Time unit ;
	
	@Column(name="valid_till_date")
	private Date date ;     
	
	@Column(name="valid_till_time")
	private Time time ; 
	
	@ManyToOne(cascade = CascadeType.ALL)  //consumer added
	@JoinColumn(name="consumer_id")
	private ConsumerEntity consumer;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="homemaker_id")
	private HomemakerEntity homemaker;

	@OneToMany(mappedBy="foodList",cascade = CascadeType.ALL)
    private List<OrderDetailsEntity> orders;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="cart_id")
    private CartEntity cart;

	public FoodlistEntity() {}

	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public Blob getImage() {
		return image;
	}


	public void setImage(Blob image) {
		this.image = image;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getData() {
		return data;
	}


	public void setData(String data) {
		this.data = data;
	}


	public int getPrice() {
		return price;
	}


	public void setPrice(int price) {
		this.price = price;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}


	public int getQnt() {
		return qnt;
	}


	public void setQnt(int qnt) {
		this.qnt = qnt;
	}


	public Time getUnit() {
		return unit;
	}


	public void setUnit(Time unit) {
		this.unit = unit;
	}


	public Date getDate() {
		return date;
	}


	public void setDate(Date date) {
		this.date = date;
	}


	public Time getTime() {
		return time;
	}


	public void setTime(Time time) {
		this.time = time;
	}


	public ConsumerEntity getConsumer() {
		return consumer;
	}


	public void setConsumer(ConsumerEntity consumer) {
		this.consumer = consumer;
	}


	public HomemakerEntity getHomemaker() {
		return homemaker;
	}


	public void setHomemaker(HomemakerEntity homemaker) {
		this.homemaker = homemaker;
	}


	public List<OrderDetailsEntity> getOrders() {
		return orders;
	}


	public void setOrders(List<OrderDetailsEntity> orders) {
		this.orders = orders;
	}

	
	
	
	

}