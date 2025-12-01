package pti.sb_tablereservation_rest.db;

import org.springframework.data.repository.CrudRepository;

import pti.sb_tablereservation_rest.model.Restaurant;



public interface RestaurantRepository extends CrudRepository<Restaurant, Integer>{

}
