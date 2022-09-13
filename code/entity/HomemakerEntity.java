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

@Entity
@Table(name="homemaker_tbl")
public class HomemakerEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="homemaker_id",unique=true,nullable=false)
	private int homemaker_id;
	
	@Column(name="homemaker_firstname",nullable=false)
	private String homemaker_firstname;
	
	@Column(name="homemaker_lastname",nullable=false)
	private String homemaker_lastname;
	
	@Column(name="homemaker_mobile",nullable=false)
	private long homemaker_mobile;
	
	@Column(name="homemaker_username",nullable=false)
	private String  homemaker_username;
	
	@Column(name="homemaker_password",nullable=false)
	private String homemaker_password;
	
	@Column(name="homemaker_email_id",nullable=false)
	private String homemaker_email_id;
	
	@Column(name="homemaker_address",nullable=false)
	private String homemaker_address;
	 
	@Column(name="pincode",nullable=false)
	private int pincode;
	
	@Lob
	@Column(name="homemaker_picture_profile")
	private Blob homemaker_picture_profile;
	
	@OneToMany(mappedBy="homemaker", cascade = CascadeType.ALL)
	private List<FoodlistEntity> food;
	
	public HomemakerEntity() {}

	public HomemakerEntity(int homemaker_id, String homemaker_firstname, String homemaker_lastname,
			long homemaker_mobile, String homemaker_username, String homemaker_password, String homemaker_email_id,
			String homemaker_address, int pincode, Blob homemaker_picture_profile, List<FoodlistEntity> food) {
		super();
		this.homemaker_id = homemaker_id;
		this.homemaker_firstname = homemaker_firstname;
		this.homemaker_lastname = homemaker_lastname;
		this.homemaker_mobile = homemaker_mobile;
		this.homemaker_username = homemaker_username;
		this.homemaker_password = homemaker_password;
		this.homemaker_email_id = homemaker_email_id;
		this.homemaker_address = homemaker_address;
		this.pincode = pincode;
		this.homemaker_picture_profile = homemaker_picture_profile;
		this.food = food;
	}

	public int getHomemaker_id() {
		return homemaker_id;
	}

	public void setHomemaker_id(int homemaker_id) {
		this.homemaker_id = homemaker_id;
	}

	public String getHomemaker_firstname() {
		return homemaker_firstname;
	}

	public void setHomemaker_firstname(String homemaker_firstname) {
		this.homemaker_firstname = homemaker_firstname;
	}

	public String getHomemaker_lastname() {
		return homemaker_lastname;
	}

	public void setHomemaker_lastname(String homemaker_lastname) {
		this.homemaker_lastname = homemaker_lastname;
	}

	public long getHomemaker_mobile() {
		return homemaker_mobile;
	}

	public void setHomemaker_mobile(long homemaker_mobile) {
		this.homemaker_mobile = homemaker_mobile;
	}

	public String getHomemaker_username() {
		return homemaker_username;
	}

	public void setHomemaker_username(String homemaker_username) {
		this.homemaker_username = homemaker_username;
	}

	public String getHomemaker_password() {
		return homemaker_password;
	}

	public void setHomemaker_password(String homemaker_password) {
		this.homemaker_password = homemaker_password;
	}

	public String getHomemaker_email_id() {
		return homemaker_email_id;
	}

	public void setHomemaker_email_id(String homemaker_email_id) {
		this.homemaker_email_id = homemaker_email_id;
	}

	public String getHomemaker_address() {
		return homemaker_address;
	}

	public void setHomemaker_address(String homemaker_address) {
		this.homemaker_address = homemaker_address;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public Blob getHomemaker_picture_profile() {
		return homemaker_picture_profile;
	}

	public void setHomemaker_picture_profile(Blob homemaker_picture_profile) {
		this.homemaker_picture_profile = homemaker_picture_profile;
	}

	public List<FoodlistEntity> getFood() {
		return food;
	}

	public void setFood(List<FoodlistEntity> food) {
		this.food = food;
	}

	@Override
	public String toString() {
		return "HomemakerEntity [homemaker_id=" + homemaker_id + ", homemaker_firstname=" + homemaker_firstname
				+ ", homemaker_lastname=" + homemaker_lastname + ", homemaker_mobile=" + homemaker_mobile
				+ ", homemaker_username=" + homemaker_username + ", homemaker_password=" + homemaker_password
				+ ", homemaker_email_id=" + homemaker_email_id + ", homemaker_address=" + homemaker_address
				+ ", pincode=" + pincode + ", homemaker_picture_profile=" + homemaker_picture_profile + ", food=" + food
				+ "]";
	}
	
	

}
