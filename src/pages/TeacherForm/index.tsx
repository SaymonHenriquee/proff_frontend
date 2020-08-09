import React from 'react';

import PageHearder from '../../components/PagaHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select/index';

import warningIcon from '../../assets/images/icons/warning.svg';

import './style.css';

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-form" className="container">
      <PageHearder
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulario de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Biogrfia" />

        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Matematica', label: 'Matematica' },
              { value: 'Fisica', label: 'Fisica' },
              { value: 'Quimica', label: 'Quimica' },
              { value: 'Educação Fisica', label: 'Educação Fisica' },
            ]}
          />

          <Input name="cost" label="Custo da hora-aula" />

        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="" />
            Importante!
            <br />
            Preencher todos os dados
          </p>
          <button type="button">
            Salvar cadastro
          </button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;
