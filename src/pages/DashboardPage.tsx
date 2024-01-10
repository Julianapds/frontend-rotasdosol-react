import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Cliente {
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
    endereco: string;
    senha: string;
}

function DashboardPage() {
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5207/clientes')
            .then(response => response.json())
            .then((data: Cliente[]) => setClientes(data))
            .catch(error => console.error("Erro ao buscar dados dos clientes:", error));
    }, []);

    return (
        <div className="container mt-4">
            <h4 className="mb-2">Gerenciamento de Clientes</h4>
            <a href="#" onClick={() => navigate('/cadastro_cliente')} className="btn btn-success btn-sm mb-4">Adicionar novo cliente</a>
            <table className="table table-bordered table-hover">
                <thead className="thead-light">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Email</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.cpf}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.endereco}</td>
                            <td>{cliente.telefone}</td>
                            <td>
                                <button onClick={() => navigate(`/dashboard_admin/clientes/editar/${cliente.id}`)} className="btn btn-primary btn-sm">Editar</button>
                                <button onClick={() => navigate(`/dashboard_admin/clientes/excluir/${cliente.id}`)} className="btn btn-danger btn-sm">Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DashboardPage;
