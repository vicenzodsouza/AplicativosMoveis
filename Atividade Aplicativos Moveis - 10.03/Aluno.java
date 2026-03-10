package com.example.exemplo1;

import java.io.Serializable;

/**
 * Classe Model Aluno
 * Representa a entidade "Aluno" no sistema e no banco de dados SQLite.
 * Implementa Serializable para permitir o transporte dos dados do objeto.
 */
public class Aluno implements Serializable {

    // Atributos privados: Aplicando o conceito de ENCAPSULAMENTO.
    // Os dados não podem ser acessados diretamente, protegendo a integridade da classe.
    private Integer id;       // Chave primária no banco de dados (autoincremento)
    private String nome;     // Nome completo do aluno
    private String cpf;      // Documento de identificação (String para preservar zeros à esquerda)
    private String telefone; // Contato do aluno
    private String endereco; // Endereço do aluno
    private String curso;    // Curso do aluno

    // --- MÉTODOS GETTERS E SETTERS ---
    // Servem para ler (get) e gravar (set) os valores nos atributos privados.

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    // facilitar a visualização de dados e passar o aluno como string
    // sobrescrever o método ToString
    // Quando o aluno for convertido para String irá mostrar somente o nome dele
    @Override
    public String toString() {
        return nome;
    }
}
