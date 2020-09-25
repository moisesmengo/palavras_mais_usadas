const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, 'legendas')

fn.lerDiretorio(caminho)
  .then(arquivos => fn.eletementosTerminadosCom(arquivos, '.srt'))
  .then(arquivoSRT => fn.lerArquivos(arquivoSRT))
  .then(conteudos => conteudos.join('\n'))
  .then(todoConteudos => todoConteudos.split('\n'))
  .then(console.log)
