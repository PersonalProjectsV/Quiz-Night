package com.insightconsulting.quiz.dao;

import com.insightconsulting.quiz.Entity.MovieQuiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

public interface MovieQuizRepository extends JpaRepository<MovieQuiz,Integer> {
}
