package com.backexemplo.service;

import com.backexemplo.entity.Pessoa;
import com.backexemplo.repositories.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

    // nessa classe pode conter regras de negocio

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    public List<Pessoa> listar(){
        return pessoaRepository.findAll();
    }
}
