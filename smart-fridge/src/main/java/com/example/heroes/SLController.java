package com.example.heroes;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class SLController {
    
    @Autowired
    private SLService slService;
    
    @GetMapping("/shoppinglist")
    public String getSL(Model model) {
        ArrayList<ShoppingList> shoppinglist = slService.getSL();
        model.addAttribute("shoppinglist", shoppinglist);
        return "shoppinglist"; // return html file with same name
    }
    
    @PostMapping("/shoppinglist")
    public String addSL(@RequestParam String slName) {
        slService.addSL(slName);
        return "redirect:/shoppinglist";
    }
    @PostMapping("/deleteFromlist")
    public String deleteSL(@RequestParam String slName) {
        slService.deleteSLByName(slName);
        return "redirect:/shoppinglist";
    }
}
