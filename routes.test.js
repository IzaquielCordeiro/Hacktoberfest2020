const { beforeAll, afterAll, expect, it } = require('@jest/globals');
const request = require('supertest');
const server = require('../app.js');
const unitFunctionsTests = require('../helloJest.js');

beforeAll(async () =>{
    console.log("Iniciando os testes com JEST");
}
);

// afterAll(() =>{
//     server.close();
//     console.log("Servidor encerrado");
// }
//);
//Bloco de testes relacionados
describe("Inicio dos testes integrados", () =>{
    //testes de integração
    it("Acessa a home e verifica conteudo", async () =>{
        const response = await request(server).get("/");
        expect(response.status).toEqual(200);
        expect(response.text).toContain('Você está na Home');
    }
    );
    it("Acessa a rota a respeito do TDD", async () =>{
        const response = await request(server).get("/tdd");
        expect(response.status).toEqual(200);
        expect(response.text).toContain('Pagina do TDD');
    }
    );
    it("Acessa a rota express", async () =>{
        const response = await request(server).get("/express");
        expect(response.status).toEqual(200);
        expect(response.text).toContain('express eh o melhor');
    }    
    );

}
);
 //testes unitarios, deveriam estar em outro arquivo/diretorio
describe("Inicio dos testes unitarios", () => {
    it("Verifica se a funcao potencia esta certa", () =>{
        expect(4).toBe(unitFunctionsTests.expo(2));
    }
    );
}
);