package com.insightconsulting.quiz.dao;

import com.insightconsulting.quiz.Entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

public interface AnswerRepository extends JpaRepository<Answer,Integer> {
}
