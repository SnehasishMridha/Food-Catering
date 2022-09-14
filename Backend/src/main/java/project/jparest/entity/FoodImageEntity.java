package project.jparest.entity;


import java.sql.Blob;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="food_image_tbl")
public class FoodImageEntity {
	
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		@Column(name="image_id",unique=true,nullable=false)
		private int image_id;
		
		@Column(name="image_data",nullable=false)
		private String image_data;
		
		@Column(name="image_name",nullable=false)
		private String image_name;
		
		@Lob
		@Column(name="image",nullable=false)
		private Blob image;

		@ManyToOne
		@JoinColumn(name="food_id")
		private FoodlistEntity foodList;
		
		public FoodImageEntity() {}

		public FoodImageEntity(int image_id, String image_data, String image_name, Blob image,
				FoodlistEntity foodList) {
			super();
			this.image_id = image_id;
			this.image_data = image_data;
			this.image_name = image_name;
			this.image = image;
			this.foodList = foodList;
		}

		public int getImage_id() {
			return image_id;
		}

		public void setImage_id(int image_id) {
			this.image_id = image_id;
		}

		public String getImage_data() {
			return image_data;
		}

		public void setImage_data(String image_data) {
			this.image_data = image_data;
		}

		public String getImage_name() {
			return image_name;
		}

		public void setImage_name(String image_name) {
			this.image_name = image_name;
		}

		public Blob getImage() {
			return image;
		}

		public void setImage(Blob image) {
			this.image = image;
		}

		public FoodlistEntity getFoodList() {
			return foodList;
		}

		public void setFoodList(FoodlistEntity foodList) {
			this.foodList = foodList;
		}

		@Override
		public String toString() {
			return "FoodImageEntity [image_id=" + image_id + ", image_data=" + image_data + ", image_name=" + image_name
					+ ", image=" + image + ", foodList=" + foodList + "]";
		}

		

}
