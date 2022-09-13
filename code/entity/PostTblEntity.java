package project.jparest.entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import java.sql.Date;
import java.sql.Time;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Entity
@Table(name="post_tbl ")
public class PostTblEntity  {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="advertisement_id",unique=true,nullable=false)
	private int advertisement_idm;

	@Column(name="valid_till_date",nullable=false)
	private Date valid_till_date  ;

	@Column(name="valid_till_time",nullable=false)
	private Time valid_till_time  ;

	@Column(name="total_qnt",nullable=false)
	private int total_qnt  ;

	@ManyToOne
	@JoinColumn(name="food_id")
	private FoodlistEntity foodlist;
	
	public PostTblEntity() {}

	public PostTblEntity(int advertisement_idm, Date valid_till_date, Time valid_till_time, int total_qnt,
			FoodlistEntity foodlist) {
		super();
		this.advertisement_idm = advertisement_idm;
		this.valid_till_date = valid_till_date;
		this.valid_till_time = valid_till_time;
		this.total_qnt = total_qnt;
		this.foodlist = foodlist;
	}

	public int getAdvertisement_idm() {
		return advertisement_idm;
	}

	public void setAdvertisement_idm(int advertisement_idm) {
		this.advertisement_idm = advertisement_idm;
	}

	public Date getValid_till_date() {
		return valid_till_date;
	}

	public void setValid_till_date(Date valid_till_date) {
		this.valid_till_date = valid_till_date;
	}

	public Time getValid_till_time() {
		return valid_till_time;
	}

	public void setValid_till_time(Time valid_till_time) {
		this.valid_till_time = valid_till_time;
	}

	public int getTotal_qnt() {
		return total_qnt;
	}

	public void setTotal_qnt(int total_qnt) {
		this.total_qnt = total_qnt;
	}

	public FoodlistEntity getFoodlist() {
		return foodlist;
	}

	public void setFoodlist(FoodlistEntity foodlist) {
		this.foodlist = foodlist;
	}

	@Override
	public String toString() {
		return "PostTblEntity [advertisement_idm=" + advertisement_idm + ", valid_till_date=" + valid_till_date
				+ ", valid_till_time=" + valid_till_time + ", total_qnt=" + total_qnt + ", foodlist=" + foodlist + "]";
	}
	
	

}