import React from 'react';

import Tabs from '@/components/Tabs';
import Fields from '@/components/Fields';

import {
  Container,
  ClanIcon,
  Header,
  Name,
  Thumbnail,
  Column,
  Generation,
  Title,
  TitleContainer,
  VerticalScroll,
} from '@/pages/Sheet/styles';

const sheetSkeleton = {
  attributes: {
    physical: {
      title: 'Físicos',
      fields: [
        {
          title: 'Força',
          levels: [1, 1, 1, 0, 0],
        },
        {
          title: 'Destreza',
          levels: [1, 1, 1, 1, 1],
        },
        {
          title: 'Vigor',
          levels: [1, 1, 1, 1, 0],
        },
      ],
    },
    social: {
      title: 'Sociais',
      fields: [
        {
          title: 'Carisma',
          levels: [1, 1, 1, 1, 1],
        },
        {
          title: 'Manipulação',
          levels: [1, 1, 1, 1, 0],
        },
        {
          title: 'Aparência',
          levels: [1, 1, 1, 1, 1],
        },
      ],
    },
    mental: {
      title: 'Mentais',
      fields: [
        {
          title: 'Percepção',
          levels: [1, 1, 1, 0, 0],
        },
        {
          title: 'Inteligência',
          levels: [1, 1, 1, 1, 1],
        },
        {
          title: 'Raciocínio',
          levels: [1, 1, 1, 1, 0],
        },
      ],
    },
  },
  abilities: {
    talents: {
      title: 'Talentos',
      fields: [
        {
          title: 'Prontidão',
          levels: [1, 1, 1, 0, 0],
        },
        {
          title: 'Esportes',
          levels: [1, 1, 1, 0, 0],
        },
        {
          title: 'Briga',
          levels: [1, 1, 1, 1, 1],
        },
        {
          title: 'Esquiva',
          levels: [1, 1, 1, 1, 0],
        },
        {
          title: 'Empatia',
          levels: [1, 1, 1, 0, 0],
        },
        {
          title: 'Expressão',
          levels: [1, 1, 1, 0, 0],
        },
        {
          title: 'Intimidação',
          levels: [1, 1, 1, 1, 1],
        },
        {
          title: 'Liderança',
          levels: [1, 1, 1, 1, 0],
        },
        {
          title: 'Manha',
          levels: [1, 1, 1, 1, 1],
        },
        {
          title: 'Labia',
          levels: [1, 1, 1, 1, 0],
        },
      ],
    },
    skills: {
      title: 'Perícias',
      fields: [
        {
          title: 'Empatia c/Animais',
          levels: [1, 1, 1, 0, 0],
        },
        {
          title: 'Ofícios',
          levels: [1, 1, 1, 0, 0],
        },
        {
          title: 'Condução',
          levels: [1, 1, 1, 1, 1],
        },
        {
          title: 'Etiqueta',
          levels: [1, 1, 1, 1, 0],
        },
        {
          title: 'Armas de Fogo',
          levels: [1, 1, 1, 1, 0],
        },
        {
          title: 'Armas Brancas',
          levels: [1, 1, 1, 0, 0],
        },
        {
          title: 'Performance',
          levels: [1, 1, 1, 0, 0],
        },
        {
          title: 'Segurança',
          levels: [1, 1, 1, 1, 1],
        },
        {
          title: 'Furtividade',
          levels: [1, 1, 1, 1, 0],
        },
        {
          title: 'Sobrevivência',
          levels: [1, 1, 1, 1, 1],
        },
      ],
    },
    Knowledges: {
      title: 'Conhecimentos',
      fields: [
        {
          title: 'Acadêmicos',
          levels: [1, 1, 1, 0, 0],
        },
        {
          title: 'Computador',
          levels: [1, 1, 1, 0, 0],
        },
        {
          title: 'Finanças',
          levels: [1, 1, 1, 1, 1],
        },
        {
          title: 'Investigação',
          levels: [1, 1, 1, 1, 0],
        },
        {
          title: 'Direito',
          levels: [1, 1, 1, 0, 0],
        },
        {
          title: 'Linguistica',
          levels: [1, 1, 1, 0, 0],
        },
        {
          title: 'Medicina',
          levels: [1, 1, 1, 1, 1],
        },
        {
          title: 'Ocultismo',
          levels: [1, 1, 1, 1, 0],
        },
        {
          title: 'Política',
          levels: [1, 1, 1, 1, 1],
        },
        {
          title: 'Ciência',
          levels: [1, 1, 1, 1, 0],
        },
      ],
    },
  },
  advantages: {
    backgrounds: {
      title: 'Antecedentes',
      fields: [
        {
          title: 'Recursos',
          levels: [1, 1, 1, 0, 0],
        },
        {
          title: 'Contatos',
          levels: [1, 1, 1, 0, 0],
        },
        {
          title: 'Geração',
          levels: [1, 1, 1, 1, 1],
        },
        {
          title: 'Influencia',
          levels: [1, 1, 1, 1, 0],
        },
        {
          title: 'Fama',
          levels: [1, 1, 1, 0, 0],
        },
      ],
    },
    disciplines: {
      title: 'Disciplinas',
      fields: [
        {
          title: 'Rapidez',
          levels: [1, 1, 1, 0, 0],
        },
        {
          title: 'Potencia',
          levels: [1, 1, 1, 0, 0],
        },
        {
          title: 'Presença',
          levels: [1, 1, 1, 1, 1],
        },
        {
          title: 'Dominação',
          levels: [1, 1, 1, 1, 0],
        },
        {
          title: 'Fortitute',
          levels: [1, 1, 1, 1, 0],
        },
      ],
    },
    virtues: {
      title: 'Virtudes',
      fields: [
        {
          title: 'Conciência',
          levels: [1, 1, 1, 0, 0],
        },
        {
          title: 'Autocontrole',
          levels: [1, 1, 1, 0, 0],
        },
        {
          title: 'Coragem',
          levels: [1, 1, 1, 1, 1],
        },
      ],
    },
  },
};

const Sheet: React.FC = () => {
  return (
    <Container>
      <VerticalScroll showsVerticalScrollIndicator={false}>
        <Header>
          <Column>
            <Name>Lestat D Auvergne</Name>
            <Generation>8 Geração</Generation>
            <ClanIcon
              source={{
                uri:
                  'https://img3.gratispng.com/dy/af93752d8fdd2f373b62bf6887566e36/L0KzQYm3VcEzN6p4iZH0aYP2gLBuTgZidaFuitc2dHjoPb7okCF2baNmfNc2YoL4erLvTgN6dZN0hJ91YYPyfbP5gb1oaZ8yTdNvNnHkSbeAVsA1QGIzSqsDM0C5RIi4VcI3OWI5UakANEi2RHB3jvc=/kisspng-vampire-the-masquerade-brujah-symbol-lasombra-gan-5af6aa9f760481.2983064715261149754834.png',
              }}
            />
          </Column>
          <Thumbnail
            source={{
              uri:
                'data:image/jpeg;base64,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',
            }}
          />
        </Header>
        <TitleContainer>
          <Title>Atributos</Title>
        </TitleContainer>
        <Tabs
          tabs={[
            {
              info: {
                label: sheetSkeleton.attributes.physical.title,
              },
              component: <Fields data={sheetSkeleton.attributes.physical} />,
            },
            {
              info: {
                label: sheetSkeleton.attributes.social.title,
              },
              component: <Fields data={sheetSkeleton.attributes.social} />,
            },
            {
              info: {
                label: sheetSkeleton.attributes.mental.title,
              },
              component: <Fields data={sheetSkeleton.attributes.mental} />,
            },
          ]}
        />
        <TitleContainer>
          <Title>Habilidades</Title>
        </TitleContainer>
        <Tabs
          tabs={[
            {
              info: {
                label: sheetSkeleton.abilities.talents.title,
              },
              component: <Fields data={sheetSkeleton.abilities.talents} />,
            },
            {
              info: {
                label: sheetSkeleton.abilities.skills.title,
              },
              component: <Fields data={sheetSkeleton.abilities.skills} />,
            },
            {
              info: {
                label: sheetSkeleton.abilities.Knowledges.title,
              },
              component: <Fields data={sheetSkeleton.abilities.Knowledges} />,
            },
          ]}
        />
        <TitleContainer>
          <Title>Vantagens</Title>
        </TitleContainer>
        <Tabs
          tabs={[
            {
              info: {
                label: sheetSkeleton.advantages.backgrounds.title,
              },
              component: <Fields data={sheetSkeleton.advantages.backgrounds} />,
            },
            {
              info: {
                label: sheetSkeleton.advantages.disciplines.title,
              },
              component: <Fields data={sheetSkeleton.advantages.disciplines} />,
            },
            {
              info: {
                label: sheetSkeleton.advantages.virtues.title,
              },
              component: <Fields data={sheetSkeleton.advantages.virtues} />,
            },
          ]}
        />
      </VerticalScroll>
    </Container>
  );
};

export default Sheet;
