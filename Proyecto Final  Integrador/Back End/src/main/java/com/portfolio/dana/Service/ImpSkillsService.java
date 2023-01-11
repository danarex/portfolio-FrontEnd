
package com.portfolio.dana.Service;

import com.portfolio.dana.Entity.Skills;
import com.portfolio.dana.Interface.ISkillsService;
import com.portfolio.dana.Repository.ISkillsRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ImpSkillsService implements ISkillsService {
    @Autowired  ISkillsRepository iskillsRepository;

    @Override
    public List<Skills> getSkills() {
        List <Skills> skills = iskillsRepository.findAll();
        return skills;
    }


    @Override
    public void saveSkills(Skills skills) {
       iskillsRepository.save(skills);
    }

    @Override
    public void deleteSkills(Long id) {
        iskillsRepository.deleteById (id);
    }

    @Override
    public Skills findSkills(Long id) {
        Skills skills = iskillsRepository.findById(id).orElse(null);
        return skills;
    }
    
}
