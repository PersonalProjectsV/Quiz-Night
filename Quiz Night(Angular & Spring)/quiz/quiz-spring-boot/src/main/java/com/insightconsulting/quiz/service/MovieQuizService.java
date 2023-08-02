package com.insightconsulting.quiz.service;

import com.insightconsulting.quiz.Entity.MovieQuiz;

import java.util.List;

public interface MovieQuizService {
    List<MovieQuiz> findAll();

    MovieQuiz findById(int id);
}
