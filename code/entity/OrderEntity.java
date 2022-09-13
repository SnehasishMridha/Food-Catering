package project.jparest.entity;

import java.sql.Date;
import java.sql.Time;
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
@Table(name="order_tbl")
public class OrderEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="order_id",unique=true,nullable=false)
	private int order_id;
	
	@Column(name="total_amount",nullable=false)
	private int total_amount;
	
	@Column(name="order_status",nullable=false)
	private String order_status;
	
	@Column(name="shipping_address",nullable=false)
	private String  shipping_address;
	
	@Column(name="order_date",nullable=false)
	private Date order_date;
	
	@Column(name="order_time",nullable=false)
	private Time order_time;
	
	@ManyToOne
	@JoinColumn(name="employee_id")
	private EmployeeEntity emp;
	
	@ManyToOne
	@JoinColumn(name="consumer_id")
	private ConsumerEntity consumer;

	@OneToMany(mappedBy="order", cascade = CascadeType.ALL)
	private List<OrderDetailsEntity> orders;

	public OrderEntity()
	{}

	public OrderEntity(int order_id, int total_amount, String order_status, String shipping_address, Date order_date,
			Time order_time, EmployeeEntity emp, ConsumerEntity consumer, List<OrderDetailsEntity> orders) {
		super();
		this.order_id = order_id;
		this.total_amount = total_amount;
		this.order_status = order_status;
		this.shipping_address = shipping_address;
		this.order_date = order_date;
		this.order_time = order_time;
		this.emp = emp;
		this.consumer = consumer;
		this.orders = orders;
	}

	public int getOrder_id() {
		return order_id;
	}

	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}

	public int getTotal_amount() {
		return total_amount;
	}

	public void setTotal_amount(int total_amount) {
		this.total_amount = total_amount;
	}

	public String getOrder_status() {
		return order_status;
	}

	public void setOrder_status(String order_status) {
		this.order_status = order_status;
	}

	public String getShipping_address() {
		return shipping_address;
	}

	public void setShipping_address(String shipping_address) {
		this.shipping_address = shipping_address;
	}

	public Date getOrder_date() {
		return order_date;
	}

	public void setOrder_date(Date order_date) {
		this.order_date = order_date;
	}

	public Time getOrder_time() {
		return order_time;
	}

	public void setOrder_time(Time order_time) {
		this.order_time = order_time;
	}

	public EmployeeEntity getEmp() {
		return emp;
	}

	public void setEmp(EmployeeEntity emp) {
		this.emp = emp;
	}

	public ConsumerEntity getConsumer() {
		return consumer;
	}

	public void setConsumer(ConsumerEntity consumer) {
		this.consumer = consumer;
	}

	public List<OrderDetailsEntity> getOrders() {
		return orders;
	}

	public void setOrders(List<OrderDetailsEntity> orders) {
		this.orders = orders;
	}

	@Override
	public String toString() {
		return "OrderEntity [order_id=" + order_id + ", total_amount=" + total_amount + ", order_status=" + order_status
				+ ", shipping_address=" + shipping_address + ", order_date=" + order_date + ", order_time=" + order_time
				+ ", emp=" + emp + ", consumer=" + consumer + ", orders=" + orders + "]";
	}

	
	
}	