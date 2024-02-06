//Estrutura das perguntas Array ou objeto
const perguntas = [
    {
        pergunta: "O que significa CPO?",
        respostas: [
            "Custo por Ordem",
            "Custo por Operação",
            "Custo por Objeto",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o principal objetivo do CPO?",
        respostas: [
            "Maximizar o lucro",
            "Minimizar os custos operacionais",
            "Aumentar a produtividade",
        ],
        correta: 2
    },
    {
        pergunta: "O que é a análise ABC no contexto do CPO?",
        respostas: [
            "Análise de Bens e Custos",
            "Análise de Benefícios e Custos",
            "Análise de Classificação de Itens",
        ],
        correta: 2
    },
    {
        pergunta: "Quais são os três principais tipos de custos no CPO?",
        respostas: [
            "Custos Diretos, Custos Indiretos e Custos Fixos",
            "Custos Variáveis, Custos Fixos e Custos Médios",
            "Custos Primários, Custos Secundários e Custos Terciários",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o ponto de equilíbrio no CPO?",
        respostas: [
            "O ponto onde os custos são mínimos",
            "O ponto onde a receita iguala os custos",
            "O ponto onde a produção é máxima",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a fórmula do Custo Total Médio?",
        respostas: [
            "CTM = Custo Variável / Quantidade Produzida",
            "CTM = Custo Fixo / Quantidade Produzida",
            "CTM = (Custo Fixo + Custo Variável) / Quantidade Produzida",
        ],
        correta: 2
    },
    {
        pergunta: "O que é a curva de aprendizado no CPO?",
        respostas: [
            "Uma curva que representa a relação entre custo e tempo",
            "Uma curva que mostra a relação entre aprendizado e produtividade",
            "Uma curva que indica o aprendizado ao longo do tempo",
        ],
        correta: 2
    },
    {
        pergunta: "O que são custos diretos no CPO?",
        respostas: [
            "Custos relacionados à produção, como materiais e mão de obra",
            "Custos fixos que não estão diretamente ligados à produção",
            "Custos indiretos que não podem ser atribuídos a um produto específico",
        ],
        correta: 1
    },
    {
        pergunta: "O que é a análise de sensibilidade no contexto do CPO?",
        respostas: [
            "Uma análise das variações nos custos ao longo do tempo",
            "Uma análise das mudanças na demanda do mercado",
            "Uma análise das mudanças nos parâmetros que afetam as decisões de custo",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o papel do orçamento no CPO?",
        respostas: [
            "Acompanhar o desempenho passado da empresa",
            "Prever e controlar os custos futuros",
            "Determinar a margem de lucro dos produtos",
        ],
        correta: 2
    },
];

//identificando Div com id quiz no html
const quiz = document.querySelector('#quiz')

const acertos = document.querySelector('#acertos')

//identificando o template feito no html para mostragem
const template = document.querySelector('template')

const corretas = new Set()

const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//Estrutura de repetição para mostrar itens 
for(const item of perguntas) {

    //criando variavel para armazenar a estrutura template do html
    const quizItem = template.content.cloneNode(true)

    //Identifcando a Pergunta presente nos itens de perguntas
    quizItem.querySelector('h3').textContent = item.pergunta

    //Criando Estrutura de repetição para perguntas do quiz
    for( let resposta of item.respostas) {

        //Criando variavel dt que recebera as perguntas e opções
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        
        //Iddentificando Span na variavel perguntas
        dt.querySelector('span').textContent = resposta

        dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }



        //Identificando dl dentro do clone feito em quizItem e colocando em dt
        quizItem.querySelector('dl').appendChild(dt)


    }

    //Remover Respota das Perguntas
    quizItem.querySelector('dl dt').remove()

    //Comando Criou um Filho para a DIV quiz Identificada na Linha 94
    quiz.appendChild(quizItem)
}