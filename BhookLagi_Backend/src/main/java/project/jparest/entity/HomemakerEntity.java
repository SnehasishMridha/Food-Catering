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
	@Column(name="homemaker_id",unique=true)
	private int id;
	
	@Column(name="homemaker_firstname")
	private String firstname;
	
	@Column(name="homemaker_lastname")
	private String lastname;
	
	@Column(name="homemaker_mobile")
	private long mobile;
	
	@Column(name="homemaker_username")
	private String  username;
	
	@Column(name="homemaker_password")
	private String password;
	
	@Column(name="homemaker_email_id")
	private String email;
	
	@Column(name="homemaker_address")
	private String address;
	 
	@Column(name="pincode")
	private int pincode;
	
	@Lob
	@Column(name="homemaker_picture_profile")
	private Blob picture_profile;
	
	@OneToMany(mappedBy="homemaker", cascade = CascadeType.ALL)
	private List<FoodlistEntity> food;
	
	public HomemakerEntity() {}
	

	public HomemakerEntity(String firstname, String lastname, String username, String password, String email_id) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.username = username;
		this.password = password;
		this.email = email_id;
	}


	public HomemakerEntity(String firstname, String lastname, long mobile, String username, String password,
			String email_id, String address, int pincode, Blob picture_profile) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.mobile = mobile;
		this.username = username;
		this.password = password;
		this.email = email_id;
		this.address = address;
		this.pincode = pincode;
		this.picture_profile = picture_profile;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public long getMobile() {
		return mobile;
	}

	public void setMobile(long mobile) {
		this.mobile = mobile;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public Blob getPicture_profile() {
		return picture_profile;
	}

	public void setPicture_profile(Blob picture_profile) {
		this.picture_profile = picture_profile;
	}

	public List<FoodlistEntity> getFood() {
		return food;
	}

	public void setFood(List<FoodlistEntity> food) {
		this.food = food;
	}

	@Override
	public String toString() {
		return "HomemakerEntity [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", mobile="
				+ mobile + ", username=" + username + ", password=" + password + ", email_id=" + email + ", address="
				+ address + ", pincode=" + pincode + ", picture_profile=" + picture_profile + ", food=" + food + "]";
	}

	
	

}
