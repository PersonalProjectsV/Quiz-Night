package com.insightconsulting.quiz.service;

import com.insightconsulting.quiz.Entity.Answer;

import java.util.List;

public interface AnswerService {
    List<Answer> findAll();

    Answer findById(int id);
}
