
package com.example.heroes;

import javax.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.AbstractPersistable;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor // getters and setters from lombok
public class Hero extends AbstractPersistable<Long> {
    private String name;
    private int level;
    private int health;
    private int gold;
    private String status;
    
    public Hero(String name) {
        this.name=name;
        this.level=1;
        this.health=3;
        this.gold=0;
        this.status="Getting ready";
    }
    public void completeSL() {
        this.gold+=100;
        this.level+=1;
        this.status="SL completed!";
    }
    public void failSL() {
        this.gold=0;
        this.health-=1;
        
        if (this.health==0) {
            this.status="Oops... hero died. RIP";
        } else {
            this.status="Quest failed. Try quest again.";
        }
    }
}
