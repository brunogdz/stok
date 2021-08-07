import React, { useEffect, useState } from 'react';

export const Listar = () => {
    const [data, setData] = useState([])
    const listarProdutos = async => {
        var valores = [
            {
                "id": 2,
                "nome": "Camiseta Canal",
                "valor": 69.99,
                "quantidade": 25
            },
            {
                "id": 1,
                "nome": "Mouse Gamer",
                "valor": 80.00,
                "quantidade": 2
            },
            {
                "id": 3,
                "nome": "Caneca Canal",
                "valor": 24.00,
                "quantidade": 5
            }
        ]
        setData(valores);
    }
    useEffect(() => {
        listarProdutos();
    }, [])

    return (
        <>
            <h1>Listar</h1>

            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Nome</td>
                        <td>Valor</td>
                        <td>Quantidade</td>
                        <td>Ações</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map(produto => (
                        <tr>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.valor}</td>
                            <td>{produto.quantidade}</td>
                            <td>Visualizar Editar Apagar</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}