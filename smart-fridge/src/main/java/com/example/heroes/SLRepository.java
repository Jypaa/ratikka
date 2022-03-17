
package com.example.heroes;

import java.util.ArrayList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SLRepository extends JpaRepository<ShoppingList, Long> {
    @Override
    ArrayList<ShoppingList> findAll();
    ArrayList<ShoppingList> findByName(String name);
    Long deleteByName(String name);
}
