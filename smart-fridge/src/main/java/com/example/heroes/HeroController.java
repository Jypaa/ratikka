
package com.example.heroes;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HeroController {
    
    @Autowired
    private HeroService heroService;
    
    @GetMapping("/fridge")
    public String getHeroes(Model model) {
        ArrayList<Hero> heroes = heroService.getHeroes();
        model.addAttribute("heroes", heroes);
        return "fridge"; // return html file with same name
    }
    
    @PostMapping("/fridge")
    public String addHero(@RequestParam String heroName) {
        System.out.println("Hero name: " + heroName);
        heroService.addHero(heroName);
        return "redirect:/fridge";
    }
    @PostMapping("/deletelistitem")
    public String deleteHero(@RequestParam String heroName) {
        heroService.deleteHeroByName(heroName);
        return "redirect:/fridge";
    }
}
