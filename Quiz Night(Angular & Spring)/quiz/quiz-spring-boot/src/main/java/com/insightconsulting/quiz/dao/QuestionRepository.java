package com.insightconsulting.quiz.dao;

import com.insightconsulting.quiz.Entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

public interface QuestionRepository extends JpaRepository<Question,Integer> {
}
