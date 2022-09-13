package project.jparest.entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;

import java.sql.Blob;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="Consumer_tbl")
public class ConsumerEntity {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="consumer_id",unique=true,nullable=false)
    private int consumer_id;

    @Column(name="consumer_firstname ",nullable=false)
    private String consumer_firstname ;

    @Column(name="consumer_lastname",nullable=false)
    private String consumer_lastname ;

   
    @Column(name="consumer_mobile",nullable=false)
    private long consumer_mobile ;

  
    @Column(name="consumer_username",nullable=false)
    private String  consumer_username ;

    @Column(name="consumer_password",nullable=false)
    private String consumer_password ;

    
    @Column(name="consumer_email_id",nullable=false)
    private String consumer_email_id ;

    
    @Column(name="consumer_address",nullable=false)
    private String consumer_address ;

   
    @Column(name="pincode",nullable=false)
    private int pincode ;

    @Lob
    @JsonIgnore
    @Column(name="consumer_picture_profile ")
    private Blob consumer_picture_profile ;
    
    @OneToMany(mappedBy="consumer", cascade = CascadeType.ALL)
	private List<OrderEntity> orders;
    
    @OneToMany(mappedBy="consumer", cascade = CascadeType.ALL)
  	private List<ReviewEntity> reviews;
    
    public ConsumerEntity()
    {}
    
	public ConsumerEntity(String consumer_firstname, String consumer_lastname, long consumer_mobile,
			String consumer_username, String consumer_password, String consumer_email_id, String consumer_address,
			int pincode, Blob consumer_picture_profile) {
		super();
		this.consumer_firstname = consumer_firstname;
		this.consumer_lastname = consumer_lastname;
		this.consumer_mobile = consumer_mobile;
		this.consumer_username = consumer_username;
		this.consumer_password = consumer_password;
		this.consumer_email_id = consumer_email_id;
		this.consumer_address = consumer_address;
		this.pincode = pincode;
		this.consumer_picture_profile = consumer_picture_profile;
		
	}
	
	public int getConsumer_id() {
		return consumer_id;
	}

	public void setConsumer_id(int consumer_id) {
		this.consumer_id = consumer_id;
	}

	public String getConsumer_firstname() {
		return consumer_firstname;
	}

	public void setConsumer_firstname(String consumer_firstname) {
		this.consumer_firstname = consumer_firstname;
	}

	public String getConsumer_lastname() {
		return consumer_lastname;
	}

	public void setConsumer_lastname(String consumer_lastname) {
		this.consumer_lastname = consumer_lastname;
	}

	public long getConsumer_mobile() {
		return consumer_mobile;
	}

	public void setConsumer_mobile(long consumer_mobile) {
		this.consumer_mobile = consumer_mobile;
	}

	public String getConsumer_username() {
		return consumer_username;
	}

	public void setConsumer_username(String consumer_username) {
		this.consumer_username = consumer_username;
	}

	public String getConsumer_password() {
		return consumer_password;
	}

	public void setConsumer_password(String consumer_password) {
		this.consumer_password = consumer_password;
	}

	public String getConsumer_email_id() {
		return consumer_email_id;
	}

	public void setConsumer_email_id(String consumer_email_id) {
		this.consumer_email_id = consumer_email_id;
	}

	public String getConsumer_address() {
		return consumer_address;
	}

	public void setConsumer_address(String consumer_address) {
		this.consumer_address = consumer_address;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public Blob getConsumer_picture_profile() {
		return consumer_picture_profile;
	}

	public void setConsumer_picture_profile(Blob consumer_picture_profile) {
		this.consumer_picture_profile = consumer_picture_profile;
	}

	public List<OrderEntity> getOrders() {
		return orders;
	}

	public void setOrders(List<OrderEntity> orders) {
		this.orders = orders;
	}

	public List<ReviewEntity> getReviews() {
		return reviews;
	}

	public void setReviews(List<ReviewEntity> reviews) {
		this.reviews = reviews;
	}

	@Override
	public String toString() {
		return "ConsumerEntity [consumer_id=" + ", consumer_firstname=" 
				+ ", consumer_lastname=" +  ", consumer_mobile=" 
				+ ", consumer_username=" + ", consumer_password=" 
				+ ", consumer_email_id=" + ", consumer_address=" +", pincode="
			    + ", consumer_picture_profile=" + "]";
	}
	
}