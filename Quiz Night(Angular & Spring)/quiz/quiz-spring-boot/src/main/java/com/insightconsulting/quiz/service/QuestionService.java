package com.insightconsulting.quiz.service;

import com.insightconsulting.quiz.Entity.Question;

import java.util.List;

public interface QuestionService {
    List<Question> findAll();

    Question findById(int id);
}
