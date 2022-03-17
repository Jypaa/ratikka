
package com.example.heroes;

import java.util.ArrayList;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HeroService {
    @Autowired
    private HeroRepository heroRepository;
    
    
    public ArrayList<Hero> getHeroes() {
        return this.heroRepository.findAll();
        // return heroes;
    }
    public void addHero(String name) {
        this.heroRepository.save(new Hero(name));
    }
    public Hero findHeroByName(String heroName) {
        return this.heroRepository.findByName(heroName).get(0);
    }
    @Transactional
    public void deleteHeroByName(String name) {
        this.heroRepository.deleteByName(name);
    }
}
