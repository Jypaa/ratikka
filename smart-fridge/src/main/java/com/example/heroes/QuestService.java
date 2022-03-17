
package com.example.heroes;

import java.util.ArrayList;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestService {
    
    @Autowired
    private QuestRepository questRepository;
    
    public ArrayList<Quest> getQuests() {
        return this.questRepository.findAll();
        // return quests;
    }
    public void addQuest(String name) {
        this.questRepository.save(new Quest(name));
    }
    public Quest findQuestByName(String questName) {
        return this.questRepository.findByName(questName).get(0);
    }
    @Transactional
    public void deleteQuestByName(String name) {
        this.questRepository.deleteByName(name);
    }
}
