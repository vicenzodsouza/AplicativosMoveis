import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

const contatoInicial = {
  nome: '',
  cpf: '',
  telefone: '',
  endereco: '',
  sexo: 'Masculino',
  aceitouTermos: false,
  receberEmail: false
};

export default function App() {
  const [form, setForm] = useState(contatoInicial);
  const [contatos, setContatos] = useState([]);
  const [proximoId, setProximoId] = useState(1);

  function atualizarCampo(campo, valor) {
    setForm({ ...form, [campo]: valor });
  }

  function salvarContato() {
    if (!form.nome.trim()) return;

    setContatos([
      ...contatos,
      {
        id: proximoId,
        ...form
      }
    ]);

    setProximoId(proximoId + 1);
    setForm(contatoInicial);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Cadastro de Contatos</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={form.nome}
        onChangeText={(valor) => atualizarCampo('nome', valor)}
      />

      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={form.cpf}
        keyboardType="numeric"
        onChangeText={(valor) => atualizarCampo('cpf', valor)}
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={form.telefone}
        keyboardType="phone-pad"
        onChangeText={(valor) => atualizarCampo('telefone', valor)}
      />

      <TextInput
        style={styles.input}
        placeholder="Endereco"
        value={form.endereco}
        onChangeText={(valor) => atualizarCampo('endereco', valor)}
      />

      <View style={styles.linha}>
        <Radio
          label="Masculino"
          selecionado={form.sexo === 'Masculino'}
          onPress={() => atualizarCampo('sexo', 'Masculino')}
        />
        <Radio
          label="Feminino"
          selecionado={form.sexo === 'Feminino'}
          onPress={() => atualizarCampo('sexo', 'Feminino')}
        />
      </View>

      <SwitchLinha
        label="Aceitar Termos (obrigatorio)"
        ativo={form.aceitouTermos}
        onPress={() => atualizarCampo('aceitouTermos', !form.aceitouTermos)}
      />

      <SwitchLinha
        label="Receber informacoes por e-mail"
        ativo={form.receberEmail}
        onPress={() => atualizarCampo('receberEmail', !form.receberEmail)}
      />

      <Pressable style={styles.botao} onPress={salvarContato}>
        <Text style={styles.botaoTexto}>SALVAR</Text>
      </Pressable>

      <View style={styles.lista}>
        {contatos.map((contato) => (
          <View key={contato.id} style={styles.contato}>
            <Text style={styles.nomeContato}>
              {contato.id} - {contato.nome}
            </Text>
            <Text style={styles.detalhe}>CPF: {contato.cpf}</Text>
            <Text style={styles.detalhe}>Telefone: {contato.telefone}</Text>
            <Text style={styles.detalhe}>Endereco: {contato.endereco}</Text>
            <Text style={styles.detalhe}>Sexo: {contato.sexo}</Text>
            <Text style={styles.detalhe}>
              {contato.aceitouTermos ? 'Aceitou termos' : 'Nao aceitou termos'}
            </Text>
            <Text style={styles.detalhe}>
              {contato.receberEmail ? 'Quer receber e-mail' : 'Nao quer receber e-mail'}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

function Radio({ label, selecionado, onPress }) {
  return (
    <Pressable style={styles.opcao} onPress={onPress}>
      <View style={styles.radio}>
        {selecionado && <View style={styles.radioSelecionado} />}
      </View>
      <Text style={styles.opcaoTexto}>{label}</Text>
    </Pressable>
  );
}

function SwitchLinha({ label, ativo, onPress }) {
  return (
    <Pressable style={styles.switchLinha} onPress={onPress}>
      <View style={[styles.switchBase, ativo && styles.switchAtivo]}>
        <View style={[styles.switchBolinha, ativo && styles.switchBolinhaAtiva]} />
      </View>
      <Text style={styles.opcaoTexto}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 30,
    width: '100%',
    maxWidth: 1180,
    alignSelf: 'center'
  },
  titulo: {
    fontSize: 20,
    marginBottom: 12,
    color: '#111'
  },
  input: {
    height: 28,
    borderWidth: 1,
    borderColor: '#cfcfcf',
    paddingHorizontal: 8,
    marginBottom: 6,
    fontSize: 13,
    backgroundColor: '#fff'
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    marginTop: 2,
    marginBottom: 8
  },
  opcao: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  radio: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5
  },
  radioSelecionado: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#333'
  },
  opcaoTexto: {
    fontSize: 12,
    color: '#111'
  },
  switchLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6
  },
  switchBase: {
    width: 32,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#c7c7c7',
    justifyContent: 'center',
    marginRight: 6,
    paddingHorizontal: 2
  },
  switchAtivo: {
    backgroundColor: '#1f8f8c'
  },
  switchBolinha: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#fff'
  },
  switchBolinhaAtiva: {
    alignSelf: 'flex-end'
  },
  botao: {
    height: 28,
    backgroundColor: '#1e9bf0',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700'
  },
  lista: {
    marginTop: 18
  },
  contato: {
    width: 240,
    borderWidth: 1,
    borderColor: '#ff2d2d',
    padding: 8,
    marginBottom: 12,
    backgroundColor: '#fff'
  },
  nomeContato: {
    fontSize: 16,
    marginBottom: 5,
    color: '#111'
  },
  detalhe: {
    fontSize: 12,
    color: '#111',
    lineHeight: 16
  }
});
