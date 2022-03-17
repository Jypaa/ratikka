
package com.example.heroes;

import java.util.ArrayList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestRepository extends JpaRepository<Quest, Long> {
    @Override
    ArrayList<Quest> findAll();
    ArrayList<Quest> findByName(String name);
    Long deleteByName(String name);
}
