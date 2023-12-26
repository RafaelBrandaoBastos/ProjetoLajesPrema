/**
 * @brief Tabela com o tamanho em cm dos diferentes tamanhos de isopores.
 */ 
const tabela_isopor = {
    tipo30_36: 30, 
    tipo33_36: 33, 
    tipo37_40: 37,
} 

// Valores que serão inseridos pelo usuário
let input = {
    largura: 0,                      // Largura do comodo.
    comprimento: 0,                  // Comprimento do comodo.
    apoioviga: 0,                    // Tamanho do apoio das vigas
    isopor: tabela_isopor.tipo30_36, // 
    sentidoviga: 0,
}

/**
 * @brief Classe que armazena as configurações do cômodo.
 */
class Comodo {
    constructor (input) {
        if (input.sentidoviga) {
            this.tamviga = input.largura + input.apoioviga;
            this.comprimento = input.comprimento;
        } else { 
            this.tamviga = input.comprimento + input.apoioviga;
            this.comprimento = input.largura;
        }
        
        this.apoioviga = input.apoioviga;
        this.isopor = input.isopor;
    }

    get calc_vigas() {
        
    }

    get calc_isopor() {

    }


}




