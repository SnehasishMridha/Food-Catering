package project.jparest.entity;

import java.sql.Blob;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="employee_tbl")
public class EmployeeEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="employee_id",unique=true,nullable=false)
	private int id;
	
	@Column(name="employee_firstname",nullable=false)
	private String firstname;
	
	@Column(name="employee_lastname",nullable=false)
	private String lastname;
	
	@Column(name="employee_mobile",nullable=false)
	private long mobile;
	
	@Column(name="employee_username",nullable=false)
	private String  username;
	
	@Column(name="employee_password",nullable=false)
	private String password;
	
	@Column(name=" employee_email_id",nullable=false)
	private String email;
	
	@Lob
	@Column(name="employee_picture_profile")
	private Blob picture_profile;
	
	@Column(name="employee_role",nullable=false)
	private String role;
	
	@OneToMany(mappedBy="emp", cascade = CascadeType.ALL)
	private List<OrderEntity> orders;
	
	public EmployeeEntity()
	{}

	public EmployeeEntity(String firstname, String lastname, long mobile, String username, String password,
			String email, Blob picture_profile, String role) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.mobile = mobile;
		this.username = username;
		this.password = password;
		this.email = email;
		this.picture_profile = picture_profile;
		this.role = role;
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

	public Blob getPicture_profile() {
		return picture_profile;
	}

	public void setPicture_profile(Blob picture_profile) {
		this.picture_profile = picture_profile;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public List<OrderEntity> getOrders() {
		return orders;
	}

	public void setOrders(List<OrderEntity> orders) {
		this.orders = orders;
	}

	@Override
	public String toString() {
		return "EmployeeEntity [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", mobile=" + mobile
				+ ", username=" + username + ", password=" + password + ", email=" + email + ", picture_profile="
				+ picture_profile + ", role=" + role + ", orders=" + orders + "]";
	}

	
	
	

	
}



