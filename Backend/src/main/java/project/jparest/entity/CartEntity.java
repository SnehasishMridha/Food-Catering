package project.jparest.entity;


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
import javax.persistence.OneToOne;
import javax.persistence.Table;
@Entity
	@Table(name="Cart_tbl")
	public class CartEntity {

		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		@Column(name="cart_id",unique=true,nullable=false)
		private int cart_id;

		@Column(name="qnt")
		private int qnt;

		@Column(name="total")
		private int total;
		
		@OneToMany
	    private List<FoodlistEntity> food;

		@OneToOne(mappedBy="cart", cascade = CascadeType.ALL)
		private OrderEntity order;

		public CartEntity(int qnt, OrderEntity order) {
			super();
			this.qnt = qnt;
			this.order = order;
		}

		public int getCart_id() {
			return cart_id;
		}

		public void setCart_id(int cart_id) {
			this.cart_id = cart_id;
		}

		public int getQnt() {
			return qnt;
		}

		public void setQnt(int qnt) {
			this.qnt = qnt;
		}

		

		public OrderEntity getOrder() {
			return order;
		}

		public void setOrder(OrderEntity order) {
			this.order = order;
		}

		@Override
		public String toString() {
			return "CartEntity [cart_id=" + cart_id + ", qnt=" + qnt +  ", order=" + order + "]";
		}



	}


