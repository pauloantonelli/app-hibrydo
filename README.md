# app-hibrydo
Projeto em grupo para o trabalho final do curso programador web Senac Taboao da serra. É um aplicativo financeiro feito para auxiliar uma cliente que trabalha com paes caseiros. Tecnologias: Html 5, css3, typescript, banco de dados [nativo de cada plataforma], angular 6 e ionic 3.

INSTALAÇÃO:
Para usar o projeto
1 - tenha nodejs instalado[]
2 - instale npm []
3 - instale o ionic cordova: npm install -g ionic cordova
4 - baixe o pacote desse projeto zip ou clone em uma pasta
5 - entre na pasta com o prompt, ou entre usando vscode e abra o prompt de comando embutido
6 - agora instale as dependencias necessarias para rodas o projeto usando o prompt com o comando: npm i
7 - Com isso o projeto ja pode ser visto localmente com o comando: ionic serve
8 - aceite a instalacao dos @ionic/app-scripts. Tenha em mente que como o banco de dados usado é o nativo de cada plataforma ele so funcionará em um dispositivo real.


USANDO EM UM DISPOSITIVO REAL
1 - tenha o android studio com o graddle instalado no sistema para ter os drives adb funcionando corretamente(se a instalacao for recente crie um projeto vazio no android studio para o android deixar tudo configurado
2 - Apos os passos acima dar certo, em um celular android, abra o config e entre no modo desenvolvedor
3 - No modo desenvolvedor abilite o modo DEBUG, depois plugue o celular no pc via usb(de preferencia usb traseiro)
4 - após entre com o comando de debug live do ionic angular: ionic cordova run android --livereload, -l
5 - e pronto, se a conexao estiver certa ele vai subir no celular, se der algum erro reinicie a conexao, e verifique os erros do prompt
