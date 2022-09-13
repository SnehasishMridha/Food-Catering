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
	private int employee_id;
	
	@Column(name="employee_firstname",nullable=false)
	private String employee_firstname;
	
	@Column(name="employee_lastname",nullable=false)
	private String employee_lastname;
	
	@Column(name="employee_mobile",nullable=false)
	private long employee_mobile;
	
	@Column(name="employee_username",nullable=false)
	private String  employee_username;
	
	@Column(name="employee_password",nullable=false)
	private String employee_password;
	
	@Column(name=" employee_email_id",nullable=false)
	private String employee_email_id;
	
	@Lob
	@Column(name="employee_picture_profile")
	private Blob employee_picture_profile;
	
	@Column(name="employee_role",nullable=false)
	private String employee_role;
	
	@OneToMany(mappedBy="emp", cascade = CascadeType.ALL)
	private List<OrderEntity> orders;
	
	public EmployeeEntity()
	{}

	public EmployeeEntity(int employee_id, String employee_firstname, String employee_lastname, long employee_mobile,
			String employee_username, String employee_password, String employee_email_id, Blob employee_picture_profile,
			String employee_role, List<OrderEntity> orders) {
		super();
		this.employee_id = employee_id;
		this.employee_firstname = employee_firstname;
		this.employee_lastname = employee_lastname;
		this.employee_mobile = employee_mobile;
		this.employee_username = employee_username;
		this.employee_password = employee_password;
		this.employee_email_id = employee_email_id;
		this.employee_picture_profile = employee_picture_profile;
		this.employee_role = employee_role;
		this.orders = orders;
	}

	public int getEmployee_id() {
		return employee_id;
	}

	public void setEmployee_id(int employee_id) {
		this.employee_id = employee_id;
	}

	public String getEmployee_firstname() {
		return employee_firstname;
	}

	public void setEmployee_firstname(String employee_firstname) {
		this.employee_firstname = employee_firstname;
	}

	public String getEmployee_lastname() {
		return employee_lastname;
	}

	public void setEmployee_lastname(String employee_lastname) {
		this.employee_lastname = employee_lastname;
	}

	public long getEmployee_mobile() {
		return employee_mobile;
	}

	public void setEmployee_mobile(long employee_mobile) {
		this.employee_mobile = employee_mobile;
	}

	public String getEmployee_username() {
		return employee_username;
	}

	public void setEmployee_username(String employee_username) {
		this.employee_username = employee_username;
	}

	public String getEmployee_password() {
		return employee_password;
	}

	public void setEmployee_password(String employee_password) {
		this.employee_password = employee_password;
	}

	public String getEmployee_email_id() {
		return employee_email_id;
	}

	public void setEmployee_email_id(String employee_email_id) {
		this.employee_email_id = employee_email_id;
	}

	public Blob getEmployee_picture_profile() {
		return employee_picture_profile;
	}

	public void setEmployee_picture_profile(Blob employee_picture_profile) {
		this.employee_picture_profile = employee_picture_profile;
	}

	public String getEmployee_role() {
		return employee_role;
	}

	public void setEmployee_role(String employee_role) {
		this.employee_role = employee_role;
	}

	public List<OrderEntity> getOrders() {
		return orders;
	}

	public void setOrders(List<OrderEntity> orders) {
		this.orders = orders;
	}

	@Override
	public String toString() {
		return "EmployeeEntity [employee_id=" + employee_id + ", employee_firstname=" + employee_firstname
				+ ", employee_lastname=" + employee_lastname + ", employee_mobile=" + employee_mobile
				+ ", employee_username=" + employee_username + ", employee_password=" + employee_password
				+ ", employee_email_id=" + employee_email_id + ", employee_picture_profile=" + employee_picture_profile
				+ ", employee_role=" + employee_role + ", orders=" + orders + "]";
	}


	
}



