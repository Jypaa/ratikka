package com.example.heroes;

import java.util.ArrayList;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SLService {
    
    @Autowired
    private SLRepository slRepository;
    
    public ArrayList<ShoppingList> getSL() {
        return this.slRepository.findAll();        
    }
    public void addSL(String name) {
        this.slRepository.save(new ShoppingList(name));
    }
    public ShoppingList findSLByName(String slName) {
        return this.slRepository.findByName(slName).get(0);
    }
    @Transactional
    public void deleteSLByName(String name) {
        this.slRepository.deleteByName(name);
    }
}
