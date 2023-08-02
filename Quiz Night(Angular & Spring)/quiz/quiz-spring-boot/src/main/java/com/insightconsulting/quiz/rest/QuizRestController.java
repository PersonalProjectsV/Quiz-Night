package com.insightconsulting.quiz.rest;

import com.insightconsulting.quiz.Entity.Answer;
import com.insightconsulting.quiz.Entity.MovieQuiz;
import com.insightconsulting.quiz.service.AnswerService;
import com.insightconsulting.quiz.service.MovieQuizService;
import com.insightconsulting.quiz.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/api")
public class QuizRestController {

    private AnswerService answerService;
    private MovieQuizService movieQuizService;
    private QuestionService questionService;

    @Autowired
    public QuizRestController(AnswerService answerService, MovieQuizService movieQuizService, QuestionService questionService) {
        this.answerService = answerService;
        this.movieQuizService = movieQuizService;
        this.questionService = questionService;
    }


    @GetMapping("/movies")
    public List<MovieQuiz> getMovieNames(){
        return movieQuizService.findAll();
    }
}
