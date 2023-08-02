package com.insightconsulting.quiz.service;

import com.insightconsulting.quiz.Entity.Answer;
import com.insightconsulting.quiz.dao.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnswerServiceImpl implements AnswerService{
    private AnswerRepository answerRepository;

    @Autowired
    public AnswerServiceImpl(AnswerRepository answerRepository){
        this.answerRepository=answerRepository;
    }


    @Override
    public List<Answer> findAll() {
        return answerRepository.findAll();
    }

    @Override
    public Answer findById(int id) {
        return null;
    }
}
