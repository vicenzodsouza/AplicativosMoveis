package com.example.exemplo1;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class MainActivity extends AppCompatActivity {

    private EditText editNome;
    private EditText editCpf;
    private EditText editTelefone;
    private EditText editEndereco;
    private EditText editCurso;
    private AlunoDAO dao;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
            Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
            return insets;
        });

        // Inicializando os componentes do XML
        editNome = findViewById(R.id.editNome);
        editCpf = findViewById(R.id.editCpf);
        editTelefone = findViewById(R.id.editTelefone);
        editEndereco = findViewById(R.id.editEndereco);
        editCurso = findViewById(R.id.editCurso);

        dao = new AlunoDAO(this);

        // Configurando o clique do botão Salvar
        findViewById(R.id.btnSalvar).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                salvar();
            }
        });
    }

    public void salvar() {
        Aluno a = new Aluno();
        a.setNome(editNome.getText().toString());
        a.setCpf(editCpf.getText().toString());
        a.setTelefone(editTelefone.getText().toString());
        a.setEndereco(editEndereco.getText().toString());
        a.setCurso(editCurso.getText().toString());

        long id = dao.inserir(a);
        Toast.makeText(this, "Aluno inserido com ID: " + id, Toast.LENGTH_SHORT).show();
    }

    // método para botão irParaListar qdo clicado
    public void irParaListar(View view) {
        Intent intent = new Intent(this, ListarAlunosActivity.class);
        startActivity(intent);
    }
}
