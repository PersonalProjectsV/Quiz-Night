package com.insightconsulting.quiz.service;

import com.insightconsulting.quiz.Entity.MovieQuiz;
import com.insightconsulting.quiz.dao.MovieQuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieQuizServiceImpl implements  MovieQuizService {

    MovieQuizRepository movieQuizRepository;
    @Autowired
    public MovieQuizServiceImpl(MovieQuizRepository movieQuizRepository){
        this.movieQuizRepository=movieQuizRepository;
    }

    @Override
    public List<MovieQuiz> findAll() {
        return movieQuizRepository.findAll();
    }

    @Override
    public MovieQuiz findById(int id) {
        return null;
    }
}
