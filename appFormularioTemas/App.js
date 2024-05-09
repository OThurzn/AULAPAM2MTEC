import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity,Image } from 'react-native';

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native';
import {RadioButton} from 'react-native-paper';


export default function App() {

  const [nome, setNome] = useState('');
  const [CPF, setCPF] = useState('');
  const [idade, setIdade] = useState(13);
  const[checked,setChecked] = useState('Masculino');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [ingresso, setIngresso] = useState(0);
  const [veterano, setVeterano] = useState(false);

  const ingressos=[
    {ingressoTipo: 'Apenas transporte' , valor: 1},
    {ingressoTipo: 'Meia + Transporte', valor: 2},
    {ingressoTipo: 'Inteira + Transporte' , valor: 3},
  ]
  
  function enviarDados(){
    if(nome == '' || CPF == '')
    {
      alert('Preencha todos os campos corretamente');
    } 
    else{
      alert('Informações do participante: \n\n' +
      'Nome: ' + nome + '\n' +
      'CPF: ' + CPF + '\n' +
      'Idade: ' + idade.toFixed(0) + '\n' +
      'Sexo: ' + checked + '\n' +
      'Telefone: ' + telefone + '\n' +
      'Email: ' + email + '\n' +
      'Tipo de Ingresso: ' + ingressos[ingresso].ingressoTipo + '\n\n' +
      (veterano ? 'Primeira vez na BGS!' : 'Já fui em outros anos') + '\n'
    ) 
    }
  }

  let ingressoTipo = ingressos.map((v,k) => {
    return <Picker.Item  key={k} value={k} label={v.ingressoTipo}></Picker.Item>

  })


  
  return (
    <View style={styles.container}>

    <View style={styles.areatitulo}>
      <Text style={styles.textotitulo}>CADASTRO CARAVANA</Text>
      <Text style={styles.textotitulo}>ETEC REGISTRO</Text>
    </View>
      <View style={styles.areaformulario}>
        <Text style={styles.textoNome}>Nome Completo</Text>
        <TextInput
          style={styles.input}
          onChangeText={nome => setNome(nome)}
          placeholder='Digite seu nome'
        >
        </TextInput>

        <View style={styles.areaRadio}>
           <Text style={styles.textoNome}>Sexo</Text>
           <RadioButton
             value="Masculino"
             status={checked == 'Masculino' ? 'checked' : 'unchecked'}
             onPress={() => setChecked('Masculino')}
           >
           </RadioButton>
          <Text>Masculino</Text>
           <RadioButton
             value="Feminino"
             status={checked == 'Feminino' ? 'checked' : 'unchecked'}
             onPress={() => setChecked('Feminino')}
           >
           </RadioButton>
           <Text>Feminino</Text>
        </View>

        <Text style={styles.textoNome}>Telefone</Text>
        <TextInput
         style={styles.input}
         onChangeText={telefone => setTelefone(telefone)}
         placeholder='Digite aqui o seu telefone'
         >
         </TextInput>

        <Text style={styles.textoNome}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={email => setEmail(email)}
          placeholder='Digite aqui o email'
        >
        </TextInput>

        <Text style={styles.textoNome}>CPF</Text>
        <TextInput
          style={styles.input}
          onChangeText={CPF => setCPF(CPF)}
          placeholder='Digite aqui o seu CPF'
        >
        </TextInput>

        <View style={styles.areaIngresso}>
          <Text style={styles.textoNome}>Ingresso:</Text>
          <Picker
             style={styles.pickerIngresso}
             selectedValue={ingresso}
             onValueChange={(itemValue, itemIndex) => setIngresso(itemValue)} 
          >
            {ingressoTipo}
          </Picker>
        </View>

        <View style={styles.idadeParticipante}>
           <Text style={styles.textoNome}>Idade do participante:</Text>  
           <Text style={styles.idadeTexto}>{idade.toFixed(0)}</Text>
        </View>

        <View style={styles.areaSlider}>
          <Slider
            minimumTrackTintColor='#1fbfd2'
            minimumValue={13}
            maximumValue={80}
            value={idade}
            onValueChange={(idade) => setIdade(idade)}
          >               
          </Slider>
        </View>

        <View style={styles.areaVeterano}>
          <Text style={styles.textoNome}>Primeira vez na BGS?</Text>
          <Switch
            style={{paddingTop: 15}}
            value={veterano}
            onValueChange={veterano => setVeterano(veterano)}
          >
          </Switch>
        </View>
         
        <TouchableOpacity
          style={styles.botao} 
          onPress={enviarDados}          
        >
          <Text style={styles.botaoTexto}>Enviar Cadastro</Text>
        </TouchableOpacity>
      </View>   
      <Image
         //source={require('./assets/carros.png')}
         style={styles.imagem}
      >
      </Image>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  areaformulario:
  {
    borderWidth: 1.5,
    borderColor: '#000',
    flexDirection: 'column',
    margin: 10,
    border: 3,
    borderColor:'#000'
  },
  textoNome:{
    paddingLeft: 10,
    padding: 5,
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
    
  },

  areaIngresso:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5
},
  pickerIngresso:{
  flex:1
},
  idadeParticipante:{
  flexDirection:'row',
  paddingBottom: 5,
},
  idadeTexto:{
  color: '#1f9dd2',
  fontSize: 17,
  fontWeight: 'bold',
  paddingLeft: 5,
},
  areaVeterano:{
  flexDirection: 'column', 
  alignItems: 'center'
},
  areaRadio:{
  flexDirection: 'row', 
  alignItems: 'center',
 
},
  botao:{
  backgroundColor: '#asAS033246',
  width: '60%',
  alignSelf: "center",
  height: 50,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  marginBottom: 20,
},
  botaoTexto:{
  fontSize: 20,
  fontWeight: 'bold',
  color: '#FFFFFF'
},
  input:{
  borderWidth: 0.5,
  borderColor: '#000',
  width: '90%',
  borderRadius: 5,
  padding: 10,
  marginBottom: 5,
  justifyContent: "center",
  marginHorizontal: 5,
  alignSelf: "center",
  backgroundColor: '#fff',
  height: 45,
},

  areatitulo:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: "#1f9dd2"
  },

  textotitulo:{
  fontSize: 22,
  color: "#fff",
  textAlign: "center",
  fontWeight: 'bold',
  textAlign: "center",
  },

});