
package com.example.heroes;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class QuestController {
    
    @Autowired
    private QuestService questService;
    
    @GetMapping("/shoppinglist")
    public String getQuests(Model model) {
        ArrayList<Quest> quests = questService.getQuests();
        model.addAttribute("quests", quests);
        return "shoppinglist"; // return html file with same name
    }
    
    @PostMapping("/shoppinglist")
    public String addQuest(@RequestParam String questName) {
        questService.addQuest(questName);
        return "redirect:/shoppinglist";
    }
    @PostMapping("/deletequest")
    public String deleteQuest(@RequestParam String questName) {
        questService.deleteQuestByName(questName);
        return "redirect:/shoppinglist";
    }
}
