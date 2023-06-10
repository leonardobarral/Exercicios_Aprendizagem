let menu = document.querySelector("#menu");
var diretorioAtual = window.location.origin+"/";


function lerArquivoCSV(arquivoCSV) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = function (event) {
        const textoCSV = event.target.result;
  
        csv.parse(textoCSV, { delimiter: ',' }, function (err, dados) {
          if (err) {
            reject(err);
          } else {
            const nomes = dados.map((linha) => linha[0]);
            resolve(nomes);
          }
        });
      };
  
      reader.onerror = function () {
        reject(new Error('Erro ao ler o arquivo.'));
      };
  
      reader.readAsText(arquivoCSV);
    });
}
  
// Exemplo de uso
const arquivoCSV = `${diretorioAtual}exercicios.csv`; // Substitua pelo caminho do seu arquivo CSV

fetch(arquivoCSV)
    .then((response) => response.text())
    .then((textoCSV) => csv.parse(textoCSV, { delimiter: ',' }))
    .then((dados) => {
    const nomes = dados.map((linha) => linha[0]);
    console.log(nomes);
})
.catch((error) => {
    console.error(error);
});
  
