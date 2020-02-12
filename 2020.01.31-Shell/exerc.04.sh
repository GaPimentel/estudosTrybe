#!/bin/bash

arquivo="/home/ga/Documentos/Estudos/2020.01.31-Shell"
if [ -e "$arquivo" ]
    then 
        echo "O caminho $arquivo está habilitado!"
fi
if [ -w "$arquivo" ]
    then
        echo "Você tem permissão para editar $arquivo."
    else
        echo "Você NÃO foi autorizado a editar $arquivo."
fi