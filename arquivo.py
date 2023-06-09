def lista_de_exercicio():

    import os

    def listar_arquivos(diretorio):
        arquivos = []
        for arquivo in os.listdir(diretorio):
            if os.path.isdir(os.path.join(diretorio, arquivo)) and arquivo != ".git" and arquivo != "static" and arquivo != "__pycache__":
                arquivos.append(arquivo)
        return arquivos

    diretorio_raiz = './'  # Pasta raiz atual
    arquivos = listar_arquivos(diretorio_raiz)

    return arquivos
