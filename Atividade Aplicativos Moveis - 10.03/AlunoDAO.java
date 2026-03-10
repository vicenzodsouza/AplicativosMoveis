package com.example.exemplo1;

import android.content.ContentValues;
import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.Cursor;
import java.util.ArrayList;
import java.util.List;

public class AlunoDAO {

    private Conexao conexao; // Atributo para gerenciar a criação/atualização do banco
    private SQLiteDatabase banco; // Objeto que executa comandos SQL no banco de dados

    /**
     * Construtor da classe DAO
     * @param context Contexto da aplicação (necessário para o SQLite localizar o arquivo do banco)
     */
    public AlunoDAO(Context context){
        // Instancia a classe auxiliar de conexão que criamos (OpenHelper)
        conexao = new Conexao(context);

        // Solicita ao sistema permissão de ESCRITA no arquivo do banco de dados.
        // Se o banco não existir, o método onCreate da classe Conexao será disparado.
        banco = conexao.getWritableDatabase();
    }

    /**
     * Método para inserir um novo Aluno no banco de dados.
     * @param aluno Objeto contendo os dados (nome, cpf, telefone)
     * @return Retorna o ID da linha inserida (long) ou -1 em caso de erro.
     */
    public long inserir(Aluno aluno){
        // ContentValues: Uma classe tipo "Dicionário" (Chave/Valor) que facilita a inserção.
        // Evita que o desenvolvedor precise escrever SQL puro (INSERT INTO...), prevenindo SQL Injection.
        ContentValues values = new ContentValues();

        // Mapeia o nome da COLUNA no banco com o VALOR vindo do objeto Java
        values.put("nome", aluno.getNome());
        values.put("cpf", aluno.getCpf());
        values.put("telefone", aluno.getTelefone());
        values.put("endereco", aluno.getEndereco());
        values.put("curso", aluno.getCurso());

        // Executa a inserção na tabela "aluno".
        // O segundo parâmetro (nullColumnHack) é usado apenas se quisermos inserir uma linha vazia.
        return banco.insert("aluno", null, values);
    }

    public List<Aluno> obterTodos() {
        List<Aluno> alunos = new ArrayList<>();
        // cursor aponta para as linhas retomadas
        Cursor cursor = banco.query("aluno", new String[]{"id", "nome", "cpf", "telefone", "endereco", "curso"},
                null, null, null, null, null);
        while (cursor.moveToNext()) {
            Aluno a = new Aluno();
            a.setId(cursor.getInt(0));
            a.setNome(cursor.getString(1));
            a.setCpf(cursor.getString(2));
            a.setTelefone(cursor.getString(3));
            a.setEndereco(cursor.getString(4));
            a.setCurso(cursor.getString(5));
            alunos.add(a);
        }
        return alunos;
    }
}
